import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/components/SearchBar.module.scss";


const SearchBarComponent = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  return (
    <div className={styles["search-bar"]}>
      <input
        type="text"
        placeholder="Search"
        className={styles["search-bar__input"]}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") router.push(`/projects?search=${search}`);
        }}
      />
    </div>
  );
};

export default SearchBarComponent;
