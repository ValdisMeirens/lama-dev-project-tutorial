"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLinks = ({ item }) => {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <Link
      key={item.path}
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};
export default NavLinks;
