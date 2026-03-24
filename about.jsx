import React from "react";
//css
const About = () => {
  return (
    <section id="about" style={styles.wrapper}>
      <p style={styles.eyebrow}>ABOUT PRERNA</p>
      <h2 style={styles.title}>Frontend Developer and Creative Problem Solver</h2>
      <p style={styles.text}>
        I am Prerna, a developer who loves building beautiful and functional digital
        products. My focus is creating experiences that feel simple to use and
        delightful to explore.
      </p>
    </section>
  );
};

const styles = {
  wrapper: {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "40px 16px",
    color: "#1c2340",
    fontFamily: "Outfit, sans-serif",
  },
  eyebrow: {
    letterSpacing: "0.1em",
    color: "#0b63f6",
    fontWeight: 600,
    marginBottom: "8px",
    fontSize: "12px",
  },
  title: {
    fontSize: "32px",
    lineHeight: 1.2,
    marginBottom: "12px",
  },
  text: {
    fontSize: "18px",
    lineHeight: 1.6,
    color: "#5f6688",
  },
};

export default About;

