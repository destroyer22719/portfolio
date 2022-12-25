import { FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { RxGear } from "react-icons/rx";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { IconContext } from "react-icons";
import styles from "../styles/components/ProjectCard.module.scss";
import Link from "next/link";

type Prop = {
  tag: string;
};

const TagToIcon: React.FC<Prop> = ({ tag }) => {
  switch (tag) {
    case "NodeJS":
      return <FaNodeJs size={12} />;
    case "React":
      return <FaReact size={12} />;
    case "NextJS":
      return <TbBrandNextjs size={12} />;
    case "SCSS":
      return <FaSass size={12} />;
    case "MySQL":
      return <SiMysql size={12} />;
    default:
      return <RxGear size={12} />;
  }
};
const TagComponent: React.FC<Prop> = ({ tag }) => {
  return (
    <Link href={`/projects?tag=${tag}`}>
      <div className={styles["project-card__tag"]}>
        <IconContext.Provider
          value={{ className: styles["project-card__tag-icon"] }}
        >
          <TagToIcon tag={tag} />
        </IconContext.Provider>
        <div>{tag}</div>
      </div>
    </Link>
  );
};

export default TagComponent;
