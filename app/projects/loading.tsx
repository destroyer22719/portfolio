import styles from "../../styles/pages/ProjectsPage.module.scss";
import ProjectLoadingCardComponent from "../../components/ProjectLoadingCardComponent";

const ProjectsLoading = () => {
  return (
    <div>
      <div className={styles["projects-page__projects-list"]}>
        <ProjectLoadingCardComponent />
        <ProjectLoadingCardComponent />
        <ProjectLoadingCardComponent />
      </div>
    </div>
  );
};

export default ProjectsLoading;
