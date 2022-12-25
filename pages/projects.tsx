import { GetServerSideProps } from "next";
import React from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCardComponent";
import SearchBarComponent from "../components/SearchBarComponent";

type Props = {
  projects: {
    name: string;
    desc: string;
    url?: string;
    github?: string;
    image?: string;
    tags: string[];
  }[];
};

const ProjectsPage: React.FC<Props> = ({ projects }) => {
  return (
    <Layout title={"Projects"}>
      <h1>Projects</h1>
      <SearchBarComponent />
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
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const tag = query.tag ? query.tag : "";
  const search = query.search ? query.search : "";
  const req =
    (await fetch(`http://localhost:3000/api/projects?tag=${tag}&search=${search}`)) || [];
  const projects = await req.json();

  return {
    props: { projects },
  };
};

export default ProjectsPage;
