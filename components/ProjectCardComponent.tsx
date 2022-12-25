import Link from "next/link";
import TagComponent from "./TagComponent";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";
import styles from "../styles/components/ProjectCard.module.scss";
// import { IconContext } from "react-icons";

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
    <div className={styles["project-card"]}>
      <div className={styles["project-card__header"]}>
        <h3>{name}</h3>
        <div className={styles["project-card__icon-section"]}>
          {url && (
            <Link href={url} className={styles["project-card__header"]}>
              <FiExternalLink
                size={20}
                className={styles["project-card__icon"]}
              />
            </Link>
          )}
          {github && (
            <Link href={github} className={styles["project-card__header"]}>
              <FiGithub size={20} className={styles["project-card__icon"]} />
            </Link>
          )}
        </div>
      </div>
      <div className={styles["project-card__tags"]}>
        {tags.map((tag) => (
          <TagComponent tag={tag} />
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
