"use client";

import { useState, useEffect } from "react";
import styles from "../styles/pages/HomePage.module.scss";
import { FaLinkedin, FaGithub, FaFileCsv } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import TagComponent from "../components/TagComponent";
import Link from "next/link";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

function Page() {
  const [expand, setExpand] = useState<boolean>(true);

  useEffect(() => {
    if (window.innerWidth > 750) {
      setExpand(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 750) {
        setExpand(true);
      }
    });
  }, []);

  const skills = [
    { name: "NodeJS", link: true },
    { name: "ExpressJS", link: true },
    { name: "NextJS", link: true },
    { name: "ReactJS", link: false },
    { name: "SCSS", link: true },
    { name: "MySQL", link: true },
    { name: "CSS", link: true },
    { name: "HTML", link: true },
    { name: "JavaScript", link: true },
    { name: "TypeScript", link: true },
    { name: "Python", link: false },
  ];
  return (
    <div className={styles["home-page"]}>
      <div
        className={`${styles["home-page__header"]} ${styles["home-page--fade-from-bot"]}`}
      >
        <h1>Nathan Cai</h1>
      </div>
      <div
        className={`${styles["home-page__expand"]} ${styles["home-page--fade-from-bot"]}`}
        onClick={() => setExpand(!expand)}
      >
        {expand ? <BiDownArrow size={40} /> : <BiUpArrow size={40} />}
      </div>
      <div
        className={`${styles["home-page__links"]} ${styles["home-page--fade-from-bot"]}`}
      >
        {expand && (
          <>
            <Link
              href={"https://www.linkedin.com/in/nathan-cai-dev/"}
              target="_blank"
            >
              <FaLinkedin className={styles["home-page__link"]} size={50} />
            </Link>
            <Link href={"https://github.com/destroyer22719"} target="_blank">
              <FaGithub className={styles["home-page__link"]} size={50} />
            </Link>
            <Link href={"mailto:nathan.cai.ca@gmail.com"} target="_blank">
              <div title="nathan.cai.ca@gmail.com">
                <GrMail className={styles["home-page__link"]} size={50} />
              </div>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1RGZ3lTyQPxc_kDe9USod7IwUPZ78KOWE/view?usp=sharing"
              target="_blank"
            >
              <FaFileCsv className={styles["home-page__link"]} size={50} />
            </Link>
          </>
        )}
      </div>
      <div
        className={`${styles["home-page__text"]} ${styles["home-page--fade-from-bot"]}`}
      >
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
      <div
        className={`${styles["home-page__skills"]} ${styles["home-page--fade-from-bot"]}`}
      >
        {expand && (
          <>
            {skills.map((skill, i) => (
              <TagComponent
                tag={skill.name}
                key={skill.name}
                link={skill.link}
                size={30}
                className={styles["home-page__skills-item"]}
                iconClassName={styles["home-page__skills-item-icon"]}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Page;
