"use client";
import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  console.log("works");
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="EMail" />
          <input type="text" placeholder="Phone Number(optinal)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button onClick={() => console.log("test")}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
