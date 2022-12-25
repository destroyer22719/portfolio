import Head from "next/head";
import style from "../styles/components/Layout.module.scss";
import NavBar from "./NavBar";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{`Nathan Cai | ${title}`}</title>
        <meta
          name="description"
          content="Track price histories of grocery stores across Canada"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        {/* <link rel="icon" href="/favicon.png" /> */}
      </Head>
      <NavBar/>
      <div className={style["layout__main"]}>{children}</div>
    </div>
  );
};

export default Layout;
