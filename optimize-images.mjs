import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import sharp from 'sharp';

const MAX_SIZE_BYTES = 120 * 1024; // 120 KB limit
// Directories to ignore during scanning
const IGNORE_DIRS = ['node_modules', '.git', '.next', 'dist', 'out', 'build', '.vercel'];
// File extensions to process
const IMAGE_EXTS = ['.jpg', '.jpeg', '.png'];
// Code files to scan for references
const CODE_EXTS = ['.html', '.css', '.js', '.jsx', '.ts', '.tsx', '.json', '.md'];

/**
 * Recursively walks a directory and calls `fileCallback` for every file.
 */
async function walkDir(dir, fileCallback) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!IGNORE_DIRS.includes(entry.name)) {
        await walkDir(fullPath, fileCallback);
      }
    } else {
      await fileCallback(fullPath);
    }
  }
}

/**
 * Converts an image to WebP and ensures its size is <= 120 KB.
 * Iteratively reduces quality and dimensions if necessary.
 */
async function optimizeImage(inputPath, outputPath) {
  let quality = 85;
  let buffer = null;
  const image = sharp(inputPath);
  let metadata = await image.metadata();
  let width = metadata.width;

  while (true) {
    buffer = await sharp(inputPath)
      .resize(width ? { width: Math.round(width) } : undefined)
      .webp({ quality, effort: 6 }) // effort 6 gives better compression
      .toBuffer();

    if (buffer.length <= MAX_SIZE_BYTES) {
      break; // Successfully compressed under limit
    }

    if (quality > 50) {
      quality -= 10; // First, try reducing quality
    } else if (width && width > 300) {
      // If quality is low and image is large, scale down dimensions by 10%
      width = width * 0.9;
    } else {
       // Cannot safely compress further
       break;
    }
  }

  await fs.writeFile(outputPath, buffer);
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function main() {
  const rootDir = process.cwd();
  console.log(`\n🚀 Starting Image Optimization in: ${rootDir}\n`);
  
  const imagesToProcess = [];
  const codeFiles = [];

  // 1. Scan for images and code files
  await walkDir(rootDir, async (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (IMAGE_EXTS.includes(ext)) {
      imagesToProcess.push(filePath);
    } else if (CODE_EXTS.includes(ext)) {
      codeFiles.push(filePath);
    }
  });

  console.log(`🔍 Found ${imagesToProcess.length} images to process.`);
  console.log(`🔍 Found ${codeFiles.length} code files to scan for replacements.\n`);

  if (imagesToProcess.length === 0) {
    console.log('✅ No images found to process. Exiting.');
    return;
  }

  const replacementMap = new Map(); // Maps old filename -> new WebP filename

  // 2. Convert & Compress Images
  console.log('🔄 Starting Conversion & Compression...');
  for (const inputPath of imagesToProcess) {
    const dir = path.dirname(inputPath);
    const ext = path.extname(inputPath);
    const basename = path.basename(inputPath, ext);
    const outputPath = path.join(dir, `${basename}.webp`);
    const relativePath = path.relative(rootDir, inputPath);
    
    try {
      await optimizeImage(inputPath, outputPath);
      const oldSize = (await fs.stat(inputPath)).size;
      const newSize = (await fs.stat(outputPath)).size;
      
      console.log(`  ✔️ Optimized: ${relativePath} (${(oldSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB)`);
      
      const oldName = path.basename(inputPath);
      const newName = path.basename(outputPath);
      
      // Store exact filenames for code replacement
      replacementMap.set(oldName, newName);
      
      // Store URI-encoded names in case they are used in HTML/CSS
      replacementMap.set(encodeURIComponent(oldName), encodeURIComponent(newName));
    } catch (err) {
      console.error(`  ❌ Error processing ${relativePath}: ${err.message}`);
    }
  }

  // 3. Code Modification
  console.log('\n📝 Updating Code References...');
  let updatedFilesCount = 0;
  for (const codePath of codeFiles) {
    try {
      let content = await fs.readFile(codePath, 'utf-8');
      let modified = false;

      for (const [oldName, newName] of replacementMap.entries()) {
        const regex = new RegExp(escapeRegExp(oldName), 'g');
        if (regex.test(content)) {
          content = content.replace(regex, newName);
          modified = true;
        }
      }

      if (modified) {
        await fs.writeFile(codePath, content, 'utf-8');
        console.log(`  ✔️ Updated references in: ${path.relative(rootDir, codePath)}`);
        updatedFilesCount++;
      }
    } catch (err) {
      console.error(`  ❌ Error reading/writing ${codePath}: ${err.message}`);
    }
  }
  console.log(`✅ Updated references in ${updatedFilesCount} files.`);

  // 4. Cleanup
  console.log('\n🗑️ Cleaning up original image files...');
  let deletedCount = 0;
  for (const inputPath of imagesToProcess) {
    try {
      const dir = path.dirname(inputPath);
      const basename = path.basename(inputPath, path.extname(inputPath));
      const webpPath = path.join(dir, `${basename}.webp`);
      
      // Only delete the original if the WebP conversion was successful and exists
      if (existsSync(webpPath)) {
        await fs.unlink(inputPath);
        deletedCount++;
      }
    } catch (err) {
      console.error(`  ❌ Error deleting ${path.relative(rootDir, inputPath)}: ${err.message}`);
    }
  }
  console.log(`✅ Deleted ${deletedCount} original image files.`);

  console.log('\n🎉 Image Optimization Complete!\n');
}

main().catch(console.error);
