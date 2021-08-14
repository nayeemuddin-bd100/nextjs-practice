import Head from 'next/head';
import React from 'react';
import styles from "styles/About.module.scss";

const about = () => {
    return (
      <div>
        <Head>
          <title> About</title>
        </Head>

        <h2 className={styles.highlightscss}> About Page</h2>
        <h2 className={styles.textscss}>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque,
          ipsum!
        </h2>
      </div>
    );
}

export default about
