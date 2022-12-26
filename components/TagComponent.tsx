import { FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { RxGear } from "react-icons/rx";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPython,
  SiTypescript,
} from "react-icons/si";
import Link from "next/link";

type Prop = {
  tag: string;
  className: string;
  iconClassName: string;
  size?: number;
};

const TagToIcon: React.FC<{
  tag: string;
  className: string;
  size?: number;
}> = ({ tag, className, size = 20 }) => {
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
    case "TypeScript":
      return <SiTypescript size={size} className={className} />;
    case "JavaScript":
      return <SiJavascript size={size} className={className} />;
    case "CSS":
      return <SiCss3 size={size} className={className} />;
    case "HTML":
      return <SiHtml5 size={size} className={className} />;
    case "Python":
      return <SiPython size={size} className={className} />;
    default:
      return <RxGear size={size} className={className} />;
  }
};
const TagComponent: React.FC<Prop> = ({
  tag,
  className,
  iconClassName,
  size,
}) => {
  return (
    <Link href={`/projects?tag=${tag}`}>
      <div className={className}>
        <TagToIcon tag={tag} className={iconClassName} size={size} />
        <div>{tag}</div>
      </div>
    </Link>
  );
};

export default TagComponent;
