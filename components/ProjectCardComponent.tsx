import Link from "next/link";
import TagComponent from "./TagComponent";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";
import styles from "../styles/components/ProjectCard.module.scss";

type Props = {
  name: string;
  desc: string;
  url?: string;
  github?: string;
  image?: string;
  tags: string[];
};

const ProjectCard: React.FC<Props> = ({
  name,
  desc,
  url,
  github,
  image,
  tags,
}) => {
  return (
    <div
      className={`${styles["project-card"]} ${styles["project-card--fade-from-bot"]}`}
    >
      <div className={styles["project-card__header"]}>
        <h3>{name}</h3>
        <div className={styles["project-card__icon-section"]}>
          {url && (
            <Link href={url}>
              <FiExternalLink
                size={30}
                className={styles["project-card__icon"]}
              />
            </Link>
          )}
          {github && (
            <Link href={github} className={styles["project-card__header"]}>
              <FiGithub size={30} className={styles["project-card__icon"]} />
            </Link>
          )}
        </div>
      </div>
      <div className={styles["project-card__tags"]}>
        {tags.map((tag, i) => (
          <TagComponent
            className={styles["project-card__tag"]}
            iconClassName={styles["project-card__tag-icon"]}
            tag={tag}
            key={i}
          />
        ))}
      </div>
      <div>
        <div className={styles["project-card__desc"]}>{desc}</div>
        {image && <Image src={image} alt={name} />}
      </div>
    </div>
  );
};

export default ProjectCard;
