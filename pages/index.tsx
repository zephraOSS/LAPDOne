import type { NextPage } from "next";

import { TestComp } from "../components/TestComp";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <TestComp />
        </div>
    );
};

export default Home;
