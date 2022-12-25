import fs from "fs";
import path from "path";
import ProjectCard from "../../components/ProjectCardComponent";

const getProjects = () => {
  const dataDir = path.join(process.cwd(), "data");
  let data: Project[] = JSON.parse(
    fs.readFileSync(path.join(dataDir, "projects.json"), "utf8")
  );

  let result: Project[] = [];

  result = data;

  return result;
};

const page: React.FC<{}> = () => {
  const projects = getProjects();

  return (
    <div>
      {projects.map(({ name, desc, tags, github, image, url }, i) => (
        <ProjectCard
          key={i}
          name={name}
          desc={desc}
          tags={tags}
          github={github}
          image={image}
          url={url}
        />
      ))}
    </div>
  );
};

export default page;
