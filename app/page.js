import Image from "next/image";
import styles from "./page.module.css";
import { signIn } from "next-auth/react";

export default function Home() {
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
          Selamat Datang
        </h1>
      </div>
      <div>
        <form className={styles.form}>
          <label className={styles.label}>Username</label>
          <input
            className={styles.input}
            type="text"
            name="username"
            placeholder="Your username"
          />
          <label className={styles.label}>Password</label>
          <input
            className={styles.input}
            type="text"
            name="password"
            placeholder="Your password"
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
      </div>
    </div>
  );
}
