import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that ar bigger and bolder
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsam
          magnam vitae dolorum error explicabo facere veniam nostrum neque.
          Consectetur laborum ea obcaecati officia quis voluptas, reprehenderit
          laboriosam blanditiis reiciendis.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10k+</h1>
            <p>year of experiences</p>
          </div>
          <div className={styles.box}>
            <h1>10k+</h1>
            <p>year of experiences</p>
          </div>
          <div className={styles.box}>
            <h1>10k+</h1>
            <p>year of experiences</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
