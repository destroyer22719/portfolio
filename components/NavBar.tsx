import Link from "next/link";
import styles from "../styles/components/NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles["nav-bar"]}>
      <Link href="/projects" className={styles["nav-bar__item"]}>
        <div>Projects</div>
      </Link>
      <Link href="/" className={styles["nav-bar__item"]}>
        <div>Home</div>
      </Link>
      <Link href="/experiences" className={styles["nav-bar__item"]}>
        <div>Experiences</div>
      </Link>
    </div>
  );
};

export default NavBar;
