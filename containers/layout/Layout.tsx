import { LayoutProps } from "./LayoutTypes";
import Navbar from "../../components/navbarComponents/navbar/Navbar";

import classes from "./Layout.module.css";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className={classes.layout}>{children}</div>
    </>
  );
};

export default Layout;
