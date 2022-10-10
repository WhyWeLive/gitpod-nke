import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

type Response = {
  phrase: string;
};

const Home: NextPage = () => {
  const router = useRouter();
  const { phrase } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>НКЭиВТ » Посвящение в студенты</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Привет, Ты нашел кодовую фразу!</h1>

        <p className={styles.description}>{phrase}</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://whywelive.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made w/ ❤️ by Nikita Sitnik in NKE
        </a>
      </footer>
    </div>
  );
};

export default Home;
