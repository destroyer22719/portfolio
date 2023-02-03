import fs from "fs/promises";
import Link from "next/link";
import path from "path";
import ClearButton from "../../components/ClearButton";
import ProjectCard from "../../components/ProjectCardComponent";
import styles from "../../styles/pages/ProjectsPage.module.scss";

const getProjects = async (search?: string, tag?: string) => {
  const dataDir = path.join(process.cwd(), "data");
  let data: Project[] = JSON.parse(
    await fs.readFile(path.join(dataDir, "projects.json"), "utf8")
  );

  let result: Project[] = [];
  
  if (tag) {
    result = [...data.filter((proj) => proj.tags.includes(tag))];
    console.log(result)
  } else if (search) {
    result = [
      ...data.filter((proj) =>
        proj.name.toLowerCase().includes((search).toLowerCase())
      ),
    ];

    result = [
      ...data.filter((proj) =>
        proj.desc.toLowerCase().includes((search).toLowerCase())
      ),
    ];
  } else {
    result = data;
  }


  //delete duplicates
  return result.filter(
    (v, i, a) => a.findIndex((v2) => v2.name === v.name) === i
  );
};

const ProjectsPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  const projects = await getProjects(searchParams?.search, searchParams?.tag);
  return (
    <div>
      {searchParams && (
        <div className={styles["projects-page__res-count"]}>
          {(searchParams?.search || searchParams?.tag) && (
            <>
              <Link href={"/projects"}>
                <ClearButton
                  className={styles["projects-page__clear-search"]}
                />
              </Link>
              <h3>{projects.length} Results Found</h3>
            </>
          )}
        </div>
      )}
      <div className={styles["projects-page__projects-list"]}>
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
    </div>
  );
};

export default ProjectsPage;
