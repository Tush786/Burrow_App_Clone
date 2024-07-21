import React from "react";

import Sec2 from "./Secs/Sec2";
import Sec3 from "./Secs/Sec3";

import Sec5 from "./Secs/Sec5";
import Sec0 from "./Secs/Sec0";

import Sec8 from "./Secs/Sec8";

import Sec10 from "./Secs/Sec10";
import Login from "../Profile/Login";
import Navbar from "../navbar/Navbar";
// import Sec1 from './Secs/Sec1'

const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Sec0 />
      {/* <Sec1/> */}
      <Sec2 />
      <Sec3 />

      <Sec5 />
      <Sec10 />
      <Sec8 />
    </div>
  );
};

export default Home;
