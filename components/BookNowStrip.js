import { FaPaw, FaRoute, FaShieldAlt, FaUserCheck } from "react-icons/fa";
import styles from "@/styles/sections.module.css";

export default function BookNowStrip() {
  const features = [
    {
      title: "Climate-Controlled Cabins",
      desc: "AC vehicles for comfortable dog shipping & pet transport.",
      Icon: FaPaw,
    },
    {
      title: "GPS-Tracked Carriers",
      desc: "Real-time updates for your car courier service.",
      Icon: FaRoute,
    },
    {
      title: "Full Transit Coverage",
      desc: "Comprehensive protection by a top car shipping company.",
      Icon: FaShieldAlt,
    },
    {
      title: "Trained Pet Handlers",
      desc: "Dedicated travel support from our animal travel agency.",
      Icon: FaUserCheck,
    },
  ];

  return (
    <section className={styles.bookNow}>
      <div className={`containerWide ${styles.bookWrapNew}`}>
        {features.map((item) => (
          <div className={styles.bookFeatureNew} key={item.title}>
            <div className={styles.featureIconWrap}>
              <item.Icon size={22} />
            </div>
            <div className={styles.featureTextWrap}>
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
