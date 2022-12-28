import React from "react";
import AboutChallenge from "../../components/challenges/About";
import ChallengeHeader from "../../components/challenges/ChallengeHeader";
import Review from "../../components/challenges/Review";
import Syllabos from "../../components/challenges/Syllabus";
import { web3ChallengeData } from "../../data/challenges/web3";

export default function Web3Challenge() {
  const { syllabus } = web3ChallengeData;

  return (
    <div>
      <ChallengeHeader />
      <AboutChallenge />
      <Syllabos
        title={syllabus.title}
        description={syllabus.description}
        days={syllabus.days}
      />
      <Review />
    </div>
  );
}
