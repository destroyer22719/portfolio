import styles from "../styles/components/ProjectCard.module.scss";

const ProjectLoadingCardComponent: React.FC<{}> = () => {
  return (
    <div className={styles["project-card"]}>
      <div className={styles["project-card__header--loader"]}></div>
      <div className={styles["project-card__tags--loader"]}></div>
      <div>
        <div className={styles["project-card__desc--loader"]}></div>
      </div>
    </div>
  );
};

export default ProjectLoadingCardComponent;
