import Link from "next/link";
import styles from "../styles/components/NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles["nav-bar"]}>
      <div className={styles["nav-bar__item"]}>
        <Link href="/project">Projects</Link>
      </div>
    </div>
  );
};

export default NavBar;
