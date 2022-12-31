import styles from "../styles/components/ProjectCard.module.scss";

const ProjectLoadingCardComponent: React.FC<{}> = () => {
  return (
    <div className={styles["project-card"]}>
      <div
        className={`${styles["project-card__header--loader"]} ${styles["project-card--loader"]}`}
      ></div>
      <div
        className={`${styles["project-card__tags--loader"]} ${styles["project-card--loader"]}`}
      ></div>
      <div>
        <div
          className={`${styles["project-card__desc--loader"]} ${styles["project-card--loader"]}`}
        ></div>
      </div>
    </div>
  );
};

export default ProjectLoadingCardComponent;
