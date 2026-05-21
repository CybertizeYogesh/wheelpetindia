export const SITE = {
  name: "Sharma Packers & Movers",
  legalName: "Sharma Packers Movers",
  baseUrl: "https://www.sharmapackersmovers.in",
  phone: "+91 9057900808",
  phoneCompact: "+919057900808",
  email: "info@sharmapackersmovers.in",
  hours: "08:00 AM - 21:00 PM",
  whatsappText: "I am Looking for Packers and Movers",
  addresses: [
    "Plot no. 43, Guddaadhalli, Behind TCI Indian Oil Petrol Pump, Nelamangala, Bangalore, Karnataka - 562162",
    "KH No. 70, Min Ground Floor, Siraspur, Rajat Factory, Samyapur Badli, Delhi - 110042.",
    "Shop No. 38, Muhana Mandi Gate No. 2, Jaipur, Rajasthan - 302029",
    "138, Near Gaur Shabha Bhawan, Industrial Area, Rani Bazar Bikaner"
  ]
};

export const assets = {
  logo: "/uploads/2025/01/Screenshot-2025-01-17-170229.webp",
  hero: "/uploads/2025/11/image-48.webp",
  about: "/uploads/2025/11/image-52.webp",
  why: "/uploads/2025/11/image-53.webp",
  cta: "/uploads/2025/01/deliveryman-in-uniform-holds-parcel-and-phone-GMNT8LD-4.webp",
  map: "/uploads/2025/01/world-map-KAKTEK5-4-1024x581.webp",
  arrow: "/uploads/2025/01/arrow-moverie.webp",
  box: "/uploads/2025/02/A-big-box-1024x1024.webp",
  featureIcons: [
    "/uploads/2025/02/cargo-truck-2.webp",
    "/uploads/2025/02/notes-1-1.webp",
    "/uploads/2025/02/three-o-clock-clock.webp",
    "/uploads/2025/02/copy.webp"
  ],
  partners: [
    "/uploads/2025/01/GDB9KJ.webp",
    "/uploads/2025/01/MQTL8L.webp",
    "/uploads/2025/01/PEYRAY.webp",
    "/uploads/2025/01/HPHBLHQ.webp",
    "/uploads/2025/01/5Z6DUAR.webp"
  ],
  gallery: [
    "/uploads/2025/01/moving-in-new-house.webp",
    "/uploads/2025/01/couple-unloading-truck.webp",
    "/uploads/2025/01/business-lady-asking-mover-about-delivery-order.webp",
    "/uploads/2025/01/courier-working-with-parcels-in-warehouse.webp",
    "/uploads/2025/01/happy-delivery-man-with-cardboard-boxes-on-cart.webp",
    "/uploads/2025/03/imgpsh_fullsize_anim-6.webp",
    "/uploads/2025/03/imgpsh_fullsize_anim-7.webp",
    "/uploads/2025/04/a299db33-9fa6-4265-9d24-c6ee050fc741.webp"
  ],
  team: [
    "/uploads/2025/01/elderly-cargo-man-in-uniform-poses-in-home-office-6XAG2PS.webp",
    "/uploads/2025/01/deliveryman-with-carton-box-at-the-car-delivery-8W4L4MW.webp",
    "/uploads/2025/01/content-bearded-mover-delivering-boxes-UP2AG4B.webp"
  ]
};

export const featureStrip = [
  { title: "Estimate", icon: assets.featureIcons[0] },
  { title: "Flat Rates", icon: assets.featureIcons[1] },
  { title: "24/7 Working Hours", icon: assets.featureIcons[2] },
  { title: "Quick Delivery", icon: assets.featureIcons[3] }
];

export const services = [
  {
    slug: "domestic-moving",
    title: "Domestic Moving",
    short: "Securely packed and safely transported, your home is our priority!",
    image: "/uploads/2025/11/image-56-scaled.webp",
    icon: "FaHome",
    intro: "Domestic moving with Sharma Packers & Movers keeps household shifting calm, organized, and carefully managed from survey to final placement.",
    detail: [
      "Our team packs furniture, appliances, kitchen items, clothes, documents, and fragile goods with suitable material before loading them into covered vehicles.",
      "Every domestic move is planned around the route, inventory, building access, and delivery schedule so families can relocate without last-minute confusion.",
      "We support local, city-to-city, and interstate household relocation with transparent communication and practical handling at each step."
    ],
    benefits: ["Door-to-door household shifting", "Fragile item protection", "Inventory-based loading", "Timely city-to-city delivery"],
    process: ["Survey and quotation", "Packing and labeling", "Safe loading and transit", "Delivery and unpacking"]
  },
  {
    slug: "corporate-shifting",
    title: "Corporate Shifting",
    short: "Seamless transitions for your business, with care for every detail!",
    image: "/uploads/2025/11/image-44.webp",
    icon: "FaBuilding",
    intro: "Corporate shifting is handled with schedules, checklists, department-wise packing, and minimum disruption to daily operations.",
    detail: [
      "We move office furniture, IT equipment, files, workstations, display units, and sensitive material with disciplined packing and marked cartons.",
      "The relocation plan is aligned with working hours, floor access, and reinstallation priorities so teams can resume work quickly.",
      "Supervisors coordinate packing, loading, transport, unloading, and placement for a controlled business move."
    ],
    benefits: ["Office inventory planning", "Document and IT care", "Weekend and after-hours movement", "Dedicated move supervisor"],
    process: ["Office survey", "Department packing", "Secure transport", "Placement at destination"]
  },
  {
    slug: "transportation-solution",
    title: "Transportation Solution",
    short: "Timely and safe delivery, tailored to your needs!",
    image: "/uploads/2025/11/image-55.webp",
    icon: "FaTruckMoving",
    intro: "Transportation solutions cover reliable movement of household, commercial, industrial, and personal consignments across India.",
    detail: [
      "We choose the vehicle type and loading method according to the size, weight, distance, and urgency of your goods.",
      "Goods are secured with straps, protective sheets, and careful stacking to reduce movement during transit.",
      "Our transport support is suitable for single consignments, relocation loads, and recurring business movement."
    ],
    benefits: ["Covered transport vehicles", "Route-based planning", "Commercial goods support", "Door pickup and delivery"],
    process: ["Load assessment", "Vehicle allocation", "Protected loading", "Tracked delivery"]
  },
  {
    slug: "storage-and-warehouse",
    title: "Storage and Warehouse",
    short: "Secure, flexible solutions for all your storage needs!",
    image: "/uploads/2025/11/image-54-scaled.webp",
    icon: "FaWarehouse",
    intro: "Storage and warehouse services provide safe space for household goods, office material, documents, and commercial items.",
    detail: [
      "Short-term and long-term storage options help customers during delayed possession, renovation, transfers, and business transitions.",
      "Goods are packed, listed, stored, and retrieved with attention to safety, cleanliness, and accessibility.",
      "The storage process is designed to keep material organized and protected until you are ready for delivery."
    ],
    benefits: ["Short and long-term storage", "Packed item inventory", "Clean warehouse space", "Flexible delivery release"],
    process: ["Packing and listing", "Warehouse intake", "Safe storage", "Scheduled dispatch"]
  },
  {
    slug: "automobile-shifting",
    title: "Automobile Shifting",
    short: "Safe transport for your cars and bikes, arriving in pristine condition!",
    image: "/uploads/2025/02/A-big-box-1024x1024.webp",
    icon: "FaCarSide",
    intro: "Automobile shifting is planned for careful pickup, inspection, protection, and delivery of cars and two-wheelers.",
    detail: [
      "Our team checks the vehicle condition before movement and guides customers on fuel, documents, keys, and accessories.",
      "Cars and bikes are loaded using appropriate handling and secured for long-distance movement.",
      "Customers receive practical coordination from booking to delivery so vehicle relocation stays simple."
    ],
    benefits: ["Vehicle condition checks", "Bike and car movement", "Door pickup support", "Intercity delivery"],
    process: ["Booking and inspection", "Protective preparation", "Carrier loading", "Destination handover"]
  },
  {
    slug: "packaging-solution",
    title: "Packaging Solution",
    short: "Stress-free packing with high-quality protection for your belongings!",
    image: "/uploads/2025/11/packers-and-movers-Jaipur_0_1200.jpg.webp",
    icon: "FaBoxOpen",
    intro: "Packaging solutions protect belongings with suitable material, layering, labeling, and room-wise organization.",
    detail: [
      "We use cartons, sheets, cushioning, wrapping, tape, and protective covers according to the nature of each item.",
      "Fragile, electronic, glass, kitchen, decor, and furniture items are packed with extra attention to reduce transit risk.",
      "Clear labeling makes unloading, unpacking, and placement easier at the destination."
    ],
    benefits: ["Quality packing material", "Fragile item wrapping", "Room-wise labels", "Furniture protection"],
    process: ["Item sorting", "Material selection", "Layered packing", "Label and seal"]
  },
  {
    slug: "car-transportation",
    title: "Car Transportation",
    short: "Secure vehicle carriers and careful handling for city-to-city car movement.",
    image: "/uploads/2025/11/image-42.webp",
    icon: "FaCar",
    intro: "Car transportation is carried out with pre-move inspection, careful loading, carrier movement, and destination handover.",
    detail: [
      "Moving a car over long distance by driving it yourself can be tiring and risky, so our carrier-based service helps preserve the vehicle.",
      "We coordinate pickup, condition notes, loading, transit, and delivery timing for dependable car relocation.",
      "The service is suitable for transfers, family moves, new job relocations, and city-to-city vehicle movement."
    ],
    benefits: ["Door-to-door car pickup", "Carrier transport", "Condition notes", "Pan-India movement"],
    process: ["Vehicle inspection", "Carrier scheduling", "Secure loading", "Delivery confirmation"]
  },
  {
    slug: "bike-transportation",
    title: "Bike Transportation",
    short: "Safe transport for your bikes arriving in pristine condition!",
    image: "/uploads/2025/11/image-41.webp",
    icon: "FaMotorcycle",
    intro: "Bike transportation includes fuel guidance, protective wrapping, safe loading, and city-to-city delivery.",
    detail: [
      "Two-wheelers are wrapped with protective layers and loaded carefully to avoid scratches and handling damage.",
      "The team guides customers on preparing the bike before pickup and coordinates delivery based on route timelines.",
      "This service is useful for transfers, students, professionals, and families moving to a new city."
    ],
    benefits: ["Protective bike packing", "Door pickup", "Intercity delivery", "Careful loading"],
    process: ["Bike preparation", "Bubble and sheet wrap", "Loading and securing", "Destination delivery"]
  },
  {
    slug: "loading-unloading",
    title: "Loading / Unloading",
    short: "Trained manpower for careful lifting, stacking, and placement.",
    image: "/uploads/2025/01/couple-unloading-truck.webp",
    icon: "FaPeopleCarry",
    intro: "Loading and unloading support keeps heavy and fragile goods moving safely between home, vehicle, warehouse, and destination.",
    detail: [
      "Trained staff lift, pass, stack, and unload goods with attention to stairs, lifts, doorways, and vehicle balance.",
      "The process reduces damage risk by using organized handling rather than rushed manual movement.",
      "It can be booked as part of full relocation or as standalone manpower support."
    ],
    benefits: ["Experienced handlers", "Heavy item lifting", "Careful stacking", "Destination placement"],
    process: ["Access check", "Goods grouping", "Safe loading", "Room-wise unloading"]
  },
  {
    slug: "office-relocation",
    title: "Office Relocation",
    short: "Structured office moves with minimal downtime and careful asset handling.",
    image: "/uploads/2025/01/business-lady-asking-mover-about-delivery-order.webp",
    icon: "FaBriefcase",
    intro: "Office relocation supports small offices, branches, shops, and corporate teams with planned packing and shifting.",
    detail: [
      "Furniture, computers, files, equipment, and pantry material are moved with labels and destination placement planning.",
      "We can schedule movement outside peak work hours to keep business disruption low.",
      "A coordinator keeps the team aligned during packing, loading, transport, and setup."
    ],
    benefits: ["Low-disruption planning", "Workstation labeling", "Document care", "Team coordination"],
    process: ["Office walkthrough", "Asset labeling", "Move execution", "Setup support"]
  },
  {
    slug: "house-shifting",
    title: "House Shifting",
    short: "Complete home relocation support from packing to final delivery.",
    image: "/uploads/2025/01/moving-in-new-house.webp",
    icon: "FaHouseUser",
    intro: "House shifting brings packing, loading, transport, unloading, and unpacking support into one organized relocation service.",
    detail: [
      "We handle household goods with room-wise packing and practical care for furniture, utensils, appliances, clothes, and valuables.",
      "The move is planned around your date, building access, distance, and destination requirements.",
      "Customers receive clear guidance from enquiry through delivery for a smooth shifting experience."
    ],
    benefits: ["Complete home move", "Packing and unpacking", "Local and domestic shifting", "Safe delivery"],
    process: ["Move survey", "Packing", "Transport", "Unpacking"]
  }
];

export const testimonials = [
  {
    name: "Ravi Prakash Singh",
    avatar: "/uploads/2025/01/P2UGM57.webp",
    text: "I recently hired SHARMA Packers & Movers for my relocation, and I couldn't be happier. The team was professional, efficient, and took great care of my belongings."
  },
  {
    name: "Neha Gupta",
    avatar: "/uploads/2025/01/RHDZL5A.webp",
    text: "Moving can be stressful, but SHARMA made it a breeze. Their customer service was outstanding, and the packing and loading process was seamless."
  },
  {
    name: "Rahul Devendra Mehta",
    avatar: "/uploads/2025/01/PYTF4B7.webp",
    text: "I was impressed by the level of care and attention to detail. They handled my antique furniture with professionalism and delivered everything safely."
  },
  {
    name: "Pooja Desai",
    avatar: "/uploads/2025/01/E3CC8GB.webp",
    text: "From the initial booking to final delivery, the entire process was smooth and hassle-free. The team was friendly and worked efficiently."
  }
];

export const faqs = [
  {
    question: "Do you move unique or very large items?",
    answer: "Yes. Our team inspects oversized, delicate, or unusual items before movement and selects packing, handling, and vehicle support accordingly."
  },
  {
    question: "How do you take care of fragile items and antiques?",
    answer: "Fragile items are wrapped with cushioning, packed separately, labeled clearly, and loaded with extra care to reduce pressure during transit."
  },
  {
    question: "Can you pack my stuff or does it have to be packed?",
    answer: "We can provide complete packing support. Customers may also pack personal items themselves while our team handles furniture, appliances, and delicate goods."
  },
  {
    question: "How early should I book my move?",
    answer: "Booking a few days in advance is ideal, but our team also supports urgent moves whenever vehicles and manpower are available."
  }
];

export const blogPosts = [
  {
    slug: "sharma-packers-bikaner-affordable-trusted-moving-services",
    title: "Sharma Packers Bikaner: Affordable Trusted Moving Services",
    category: "Uncategorized",
    date: "March 26, 2025",
    image: "/uploads/2025/03/imgpsh_fullsize_anim-7.webp",
    excerpt: "Affordable relocation becomes easier when packing, loading, transport, and delivery are handled by a disciplined local moving team.",
    content: [
      "Transferring your place or office can be a major experience at any time. A trusted packing team can reduce stress with careful planning and transparent work.",
      "Sharma Packers & Movers supports household shifting, office relocation, vehicle transport, packing, loading, and unloading with practical coordination.",
      "The right moving partner keeps the process simple: survey the goods, provide a fair estimate, use suitable packing material, and deliver safely."
    ]
  },
  {
    slug: "step-by-step-guide-to-moving-with-packers-and-movers-in-bikaner",
    title: "Step-by-Step Guide to Moving with Packers and Movers in Bikaner",
    category: "Uncategorized",
    date: "March 27, 2025",
    image: "/uploads/2025/03/imgpsh_fullsize_anim-6.webp",
    excerpt: "This step-by-step procedure offers key tips for a hassle-free relocation with packers and movers in Bikaner.",
    content: [
      "Start by listing your items and deciding what should be moved, donated, stored, or packed separately.",
      "Book the moving date, confirm services, and keep documents, valuables, and daily-use items with you.",
      "On moving day, check labels, supervise loading, and confirm delivery placement at the new location."
    ]
  },
  {
    slug: "sharma-packers-and-movers",
    title: "Sharma Packers and Movers: Secure and Reliable Services",
    category: "Uncategorized",
    date: "April 5, 2025",
    image: "/uploads/2025/04/a299db33-9fa6-4265-9d24-c6ee050fc741.webp",
    excerpt: "Secure and reliable relocation depends on experienced planning, trained manpower, quality packing, and careful transportation.",
    content: [
      "Sharma Packers & Movers focuses on safe packing, careful handling, and dependable delivery for families and businesses.",
      "Whether you are shifting a home, office, car, bike, or commercial material, the process is managed with attention to detail.",
      "The company keeps customer convenience at the center with phone, WhatsApp, and enquiry support."
    ]
  }
];

const cityNames = [
  "Bikaner",
  "Bangalore",
  "Pune",
  "Mumbai",
  "Ahmedabad",
  "Nagpur",
  "Ganganagar",
  "Kolkata",
  "Bhubaneswar",
  "Nokha",
  "Jaipur",
  "Kochin",
  "Trivandrum",
  "Chennai",
  "Goa",
  "Delhi",
  "Noida",
  "Amritsar",
  "Suratgarh",
  "Ratangarh",
  "Jaiselmer",
  "Jamshedpur",
  "Guwahati",
  "Siliguri",
  "Ranchi",
  "Lucknow",
  "Kanpur",
  "Bhopal",
  "Shri Dungargarh",
  "Rajasthan",
  "Jodhpur",
  "Dehradun",
  "Shimla",
  "Chandigrah",
  "Surat",
  "Coimbatore",
  "Puducherry",
  "Indore",
  "Sikar",
  "Hyderabad"
];

export const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const locations = cityNames.map((name) => {
  const slug = slugify(name);
  const nearby = {
    jaipur: "Sitapura, Kukas, Bindayaka, Bagru, Sirsi, Muhana, Chomu, Ringus, and nearby industrial areas",
    bikaner: "Kolayat, Nokha, Nagaur, Deshnokh, Shri Dungargarh, and nearby Rajasthan routes",
    sikar: "Fatehpur, Laxmangarh, Neem Ka Thana, Reengus, Danta Ramgarh, Dhod, and Losal",
    suratgarh: "Ganganagar, Hanumangarh, Padampur, Rawatsar, Raisinghnagar, and Bikaner routes",
    bangalore: "Nelamangala, Peenya, Yeshwanthpur, Hebbal, Whitefield, Electronic City, and surrounding routes",
    delhi: "Siraspur, Badli, Rohini, Dwarka, Pitampura, Noida, Gurugram, and NCR routes"
  };

  return {
    name,
    slug,
    originalSlug: `sharma-packers-and-movers-in-${slug}`,
    title: `Sharma Packers And Movers In ${name}`,
    subtitle: `Packers And Movers In ${name}`,
    image: assets.box,
    nearby: nearby[slug] || `main residential, commercial, industrial, and nearby routes around ${name}`,
    meta: `Sharma Packers and Movers in ${name} provides reliable packing, moving, transportation, storage, and vehicle shifting services.`
  };
});

export const branchColumns = [
  locations.slice(0, 10),
  locations.slice(10, 20),
  locations.slice(20)
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  {
    label: "Services",
    href: "/services/",
    children: services.slice(0, 8).map((service) => ({
      label: service.title,
      href: `/services/${service.slug}/`
    }))
  },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Gallery", href: "/gallery/" }
];

export const stats = [
  { value: 98, suffix: "%", label: "Project Completed" },
  { value: 96, suffix: "%", label: "Packages Delivered" },
  { value: 92, suffix: "%", label: "Commercial Goods" },
  { value: 99, suffix: "%", label: "Delivered On Time" }
];

export const processSteps = [
  {
    title: "Book Your Service",
    text: "Experience a hassle-free move with just a click and secure your spot today."
  },
  {
    title: "Pack Your Good",
    text: "Ensure your belongings are safeguarded with care and precision for a smooth move."
  },
  {
    title: "Safe Loading",
    text: "Goods are packed, secured, and loaded to support a worry-free journey."
  },
  {
    title: "Safe Delivery",
    text: "Trust us to deliver your belongings with care so they arrive in perfect condition."
  }
];

export const teamMembers = [
  { name: "Nabeel Parry", role: "Moverie Manager", image: assets.team[0] },
  { name: "Haven Thorrey", role: "Moverie Courier", image: assets.team[1] },
  { name: "Hugh Craig", role: "Moverie Driver", image: assets.team[2] }
];

export const formFields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Mobile Number", type: "tel", required: true },
  { name: "movingDate", label: "Moving Date", type: "date", required: true },
  { name: "from", label: "Location From", type: "text", required: true },
  { name: "to", label: "Location To", type: "text", required: true }
];

export const getServiceBySlug = (slug) => services.find((service) => service.slug === slug);
export const getLocationBySlug = (slug) =>
  locations.find((location) => location.slug === slug || location.originalSlug === slug);
export const getPostBySlug = (slug) => blogPosts.find((post) => post.slug === slug);
