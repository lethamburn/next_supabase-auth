import Head from "next/head";
import Auth from "../components/Auth";
import UserArea from "../components/UserArea";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Home() {
  const [session, setSession] = useState(null);
  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      setSession(session);
    });
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs & Supabase</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {session != null ? <UserArea /> : <Auth />}
    </div>
  );
}
