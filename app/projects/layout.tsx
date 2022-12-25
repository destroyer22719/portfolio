import SearchBarComponent from "../../components/SearchBarComponent";
import styles from "../../styles/pages/ProjectsPage.module.scss";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles["projects-page"]}>
      <SearchBarComponent />
      <div>{children}</div>
    </div>
  );
}
