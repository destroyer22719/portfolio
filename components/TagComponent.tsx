import { FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { RxGear } from "react-icons/rx";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
// import { IconContext } from "react-icons";
import styles from "../styles/components/ProjectCard.module.scss";
import Link from "next/link";

type Prop = {
  tag: string;
  className: string;
  iconClassName: string;
  size?: number;
};

const TagToIcon: React.FC<{ tag: string; className: string, size?:number }> = ({
  tag,
  className,
  size=20
}) => {
  switch (tag) {
    case "NodeJS":
      return <FaNodeJs size={size} className={className} />;
    case "React":
      return <FaReact size={size} className={className} />;
    case "NextJS":
      return <TbBrandNextjs size={size} className={className} />;
    case "SCSS":
      return <FaSass size={size} className={className} />;
    case "MySQL":
      return <SiMysql size={size} className={className} />;
    default:
      return <RxGear size={size} className={className} />;
  }
};
const TagComponent: React.FC<Prop> = ({ tag, className, iconClassName, size }) => {
  return (
    <Link href={`/projects?tag=${tag}`}>
      <div className={className}>
        <TagToIcon tag={tag} className={iconClassName} size={size}/>
        <div>{tag}</div>
      </div>
    </Link>
  );
};

export default TagComponent;
