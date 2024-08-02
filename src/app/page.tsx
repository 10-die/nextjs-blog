"use client";
import React from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.bannerContainer}>
        <div className={styles.bannerContent}>
          openminds@gmail.com | +27 12 234 8999
        </div>
      </div>

      <div className={styles.topContainer}>
        <div className={styles.imagesLogo}>
          <img src="/HomeschoolingHubLogo.png" alt="Home Schooling Hub"></img>
        </div>


        <div className={styles.buttons}>
          <button>contact us</button>
          <button onClick={() => window.location.href='https://docs.google.com/forms/d/e/1FAIpQLScby0QaHcurnl21tUz_OAjXScRTvHdIMfEjxdFZvUZ5Rqz7ng/viewform?usp=sf_link'}>interested in homeschooling?</button>
        </div>
      </div>


      <div className={styles.videoContainer}>
        <video 
          src={require("../../public/BackgroundVideoOne.mp4")} 
          autoPlay 
          muted 
          loop 
         />
      </div>
    
      <div className={styles.visionContainer}>
        <h1>
          Our Vision
        </h1>
      </div>

      
    </main>
  );
}
