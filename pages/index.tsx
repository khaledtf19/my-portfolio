import type { NextPage } from "next";
import Head from "next/head";
import classes from "../styles/Home.module.scss";

import { useAppSelector, useAppDispatch } from "../state/storeHooks";
import { themeActions } from "../state";

const Home: NextPage = () => {
  const theme = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();

  return (
    <div className={classes.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <h1>hi</h1>

      <br />
      <h1>theme: {theme}</h1>
      <button onClick={() => dispatch(themeActions.toLight())}>
        theme light
      </button>
      <button onClick={() => dispatch(themeActions.toDark())}>
        theme dark
      </button>
      <h1>home</h1>
    </div>
  );
};

export default Home;
