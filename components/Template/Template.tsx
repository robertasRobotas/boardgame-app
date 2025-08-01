import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./template.module.css";

type TemplateProps = {
  children: React.ReactNode;
};

const Template = ({ children }: TemplateProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contentWrapper}>{children}</div>
      <Footer />
    </div>
  );
};

export default Template;
