import Head from "next/head";
import React from "react";
import Header from "../../../components/resources/whitepaper/Header";
import Whitepapers from "../../../components/resources/whitepaper/Whitepapers";

export default function whitepaper() {
  return (
    <div>
      <Head>
        <title>Learn from whitepapers | Gurukul DAO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <Header/>
      <Whitepapers/>
    </div>
  );
}
