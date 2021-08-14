import Head from 'next/head';
import React from 'react';
import styles from "../styles/About.module.scss";

const about = () => {
    return (
      <div>
        <Head>
          <title className={styles.highlightscss}> About</title>
        </Head>

        <h2 className={styles.textscss}> About Page</h2>
      </div>
    );
}

export default about
