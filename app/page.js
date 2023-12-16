"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data, status } = useSession();

  if (status == "loading") {
    return "loading";
  }

  const buttonSignIn = (
    <div className={styles.signInButton}>
      <Link href={"/login"} className={styles.loginText}>
        Sign In
      </Link>
    </div>
  );

  const buttonLogout = (
    <div
      className={styles.signInButton}
      type="submit"
      onClick={() => signOut()}
    >
      Log Out
    </div>
  );

  const nama = ", " + data?.user.name;

  // console.log({ data, status });
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt=""
          height={80}
          width={80}
        />
        <h1>
          Hello! <br />
          Selamat Datang{data?.user?.name ? nama : ""}
        </h1>
      </div>
      <div className={styles.form}>
        {status === "unauthenticated" ? buttonSignIn : buttonLogout}
      </div>
    </div>
  );
}
