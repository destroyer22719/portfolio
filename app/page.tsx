import styles from "../styles/pages/HomePage.module.scss";
import { FaLinkedin, FaGithub, FaFileCsv } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import TagComponent from "../components/TagComponent";
import Link from "next/link";

export default function Page() {
  const skills = ["NodeJS", "ExpressJS", "NextJS", "SCSS", "MySQL"];
  return (
    <div className={styles["home-page"]}>
      <div className={styles["home-page__header"]}>
        <h1>Nathan Cai</h1>
      </div>
      <div className={styles["home-page__links"]}>
        <Link href={"https://www.linkedin.com/in/nathan-cai-dev/"}>
          <FaLinkedin className={styles["home-page__link"]} size={50} />
        </Link>
        <Link href={"https://github.com/destroyer22719"}>
          <FaGithub className={styles["home-page__link"]} size={50} />
        </Link>
        <Link href={"mailto:nathan.cai.ca@gmail.com"}>
          <div title="nathan.cai.ca@gmail.com">
            <GrMail className={styles["home-page__link"]} size={50} />
          </div>
        </Link>
        <Link href="#">
          <FaFileCsv className={styles["home-page__link"]} size={50} />
        </Link>
      </div>
      <div className={styles["home-page__text"]}>
        <div>
          Hi there! I'm a computer science student at Queen's University, with a
          strong background in both front-end and back-end development. I have
          experience working on a variety of projects, including developing a
          backend API for the Queen's Computing Students Association, and
          organizing a hackathon, and several code projects!
        </div>
        <div>
          I have a passion for creating user-friendly and accessible websites,
          and have a strong understanding of front-end technologies such as
          HTML, CSS, and JavaScript, as well as frameworks like React and
          NextJS. I also have experience working with back-end technologies such
          as NodeJS, REST APIs, and MySQL.
        </div>
        <div>
          In addition to my technical skills, I have strong problem-solving
          abilities and enjoy tackling challenges in a collaborative and
          efficient manner. I'm always looking for opportunities to learn and
          grow as a developer, and am excited to continue building my skills and
          knowledge in the field.
        </div>
      </div>
      <div className={styles["home-page__skills"]}>
        {skills.map((skill, i) => (
          <TagComponent
            tag={skill}
            key={skill}
            size={30}
            className={styles["home-page__skills-item"]}
            iconClassName={styles["home-page__skills-items-icon"]}
          />
        ))}
      </div>
    </div>
  );
}
