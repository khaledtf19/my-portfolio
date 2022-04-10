import { useAppSelector } from "../../../state/storeHooks";
import { TODARK, TOLIGHT } from "../../../state/storeTypes";
import classes from "./NavBar.module.css";

import { RiMenuFill } from "react-icons/ri";

export const List = () => {
  return (
    <>
      <ul className={classes.list}>
        <li className={classes.item}>
          <a className={classes.link} href="#about">
            About
          </a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="#myWork">
            My Work
          </a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};

function Navbar() {
  const theme = useAppSelector((state) => state.theme);

  return (
    <nav
      className={`${classes.container} ${
        theme === TODARK ? classes.container__dark : classes.container__light
      }`}
    >
      <div className={classes.menu__icon}>
        <RiMenuFill size={25} />
      </div>
      <div className={classes.nav__list}>
        <List />
      </div>
    </nav>
  );
}

export default Navbar;
