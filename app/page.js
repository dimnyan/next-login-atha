"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const { data, status } = useSession();
  const router = useRouter();

  if (status == "loading") {
    return "loading";
  }

  if (status === "authenticated") {
    router.push("/");
  }

  const buttonSignIn = (
    <Link href={"/login"} className={styles.signInButton} type="submit">
      Sign In
    </Link>
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
      {/* <div>
        <form className={styles.form}>
          <label className={styles.label}>Username</label>
          <input
            className={styles.input}
            type="text"
            name="username"
            placeholder="Your username..."
          />
          <label className={styles.label}>Password</label>
          <input
            className={styles.input}
            type="text"
            name="password"
            placeholder="Your password..."
          />
          <button className={styles.signInButton} type="submit">
            Sign In
          </button>
          <button className={styles.signUpButton} type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <div className={styles.signInLogos}>
        <div className={styles.signInLogo}>
          <Image src="/facebook.svg" width={23} height={23} alt="" />
        </div>
        <div className={styles.signInLogo} onClick={() => signIn("google")}>
          <Image src="/google.svg" width={23} height={23} alt="" />
        </div>
        <div className={styles.signInLogo}>
          <Image src="/apple.svg" width={23} height={23} alt="" />
        </div>
      </div> */}
    </div>
  );
}
