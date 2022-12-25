import Link from "next/link";
import styles from "../styles/components/NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles["nav-bar"]}>
      <div className={styles["nav-bar__item"]}>
        <Link href="/projects">Projects</Link>
      </div>
      <div className={styles["nav-bar__item"]}>
        <Link href="/">Home</Link>
      </div>
      <div className={styles["nav-bar__item"]}>
        <Link href="/experiences">Experiences</Link>
      </div>
    </div>
  );
};

export default NavBar;
