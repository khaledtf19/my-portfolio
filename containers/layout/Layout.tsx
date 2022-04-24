import { FC } from "react";
import { LayoutProps } from "./LayoutTypes";
import Navbar from "../../components/navbarComponents/navbar/Navbar";

import classes from "./Layout.module.scss";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={classes.container}>
      <header>
        <Navbar />
      </header>
      <main className={classes.page}>{children}</main>
    </div>
  );
};

export default Layout;
