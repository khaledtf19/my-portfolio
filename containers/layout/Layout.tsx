import { FC } from "react";
import { LayoutProps } from "./LayoutTypes";
import Navbar from "../../components/navbarComponents/navbar/Navbar";
import { useAppSelector } from "../../state/storeHooks";

import classes from "./Layout.module.scss";

const Layout: FC<LayoutProps> = ({ children }) => {
  const theme = useAppSelector((state) => state.theme);

  return (
    <div className={classes.container}>
      <header>
        <Navbar />
      </header>
      <main className={classes.page} data-theme={theme}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
