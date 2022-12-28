import Head from "next/head";
import React from "react";
import ProjectHeader from "../../../components/resources/projects/Header";
import Projects from "../../../components/resources/projects/Projects";

export default function whitepaper() {
  return (
    <div>
      <Head>
        <title>Learn by building projects | Gurukul DAO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <ProjectHeader/>
      <Projects/>
    </div>
  );
}
