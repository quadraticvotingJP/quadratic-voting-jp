import type { NextPage } from "next";
import { Button } from "@mui/material";

const Home: NextPage = () => {
  return (
    <>
      <p className="text-red-400">next.js</p>
      <a
        href="https://github.com/quadraticvotingJP/quadratic-voting-jp"
        rel="noopener noreferrer"
        target="_blank"
        className="text-red-400"
      >
        quadratic-voting-jp
      </a>
      <Button variant="text">Text</Button>
    </>
  );
};

export default Home;
