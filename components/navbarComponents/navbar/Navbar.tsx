import Link from "next/link";
import { useRouter } from "next/router";
import { useAppSelector } from "../../../state/storeHooks";
import { TODARK, TOLIGHT } from "../../../state/storeTypes";
// import classes from "./NavBar.module.css";
import classes from "./Navbar.module.scss";

import {
  RiHome4Fill,
  RiHome4Line,
  RiCodeSSlashFill,
  RiCodeSFill,
  RiMailFill,
  RiMailLine,
} from "react-icons/ri";

import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";

function Navbar() {
  const theme = useAppSelector((state) => state.theme);

  const router = useRouter();

  let iconsSize = "auto";

  return (
    <nav
      className={`${classes.container} ${
        theme === TODARK ? classes.container__dark : classes.container__light
      }`}
    >
      <ul className={classes.list}>
        <li className={classes.item}>
          <Link href="/">
            <a className={classes.link}>
              {router.pathname === "/" ? (
                <RiHome4Fill size={iconsSize} />
              ) : (
                <RiHome4Line size={iconsSize} />
              )}
              <span className={classes.link__description}>Home</span>
            </a>
          </Link>
        </li>
        <li className={classes.item}>
          <Link href="/about">
            <a className={classes.link}>
              {router.pathname === "/about" ? (
                <FaUserCircle size={iconsSize} />
              ) : (
                <FaRegUserCircle size={iconsSize} />
              )}
              <span className={classes.link__description}>About Me</span>
            </a>
          </Link>
        </li>
        <li className={classes.item}>
          <Link href="/mywork">
            <a className={classes.link}>
              {router.pathname === "/mywork" ? (
                <RiCodeSSlashFill size={iconsSize} />
              ) : (
                <RiCodeSFill size={iconsSize} />
              )}
              <span className={classes.link__description}>My Work</span>
            </a>
          </Link>
        </li>
        <li className={classes.item}>
          <Link href="/contact">
            <a className={classes.link}>
              {router.pathname === "/contact" ? (
                <RiMailFill size={iconsSize} />
              ) : (
                <RiMailLine size={iconsSize} />
              )}
              <span className={classes.link__description}>Hire Me</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
