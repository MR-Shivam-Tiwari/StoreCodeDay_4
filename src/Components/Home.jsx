import React, { useState } from "react";

import Navbar from "./HomeComponent/Navbar";
import StorecodeSearchBar from "./HomeComponent/StorecodeSearchBar";
import GetCode from "./HomeComponent/GetCode";
import MostSearched from "./HomeComponent/MostSearched";
import TopInfluencer from "./HomeComponent/TopInfluencer";
import ExploreGuides from "./HomeComponent/ExploreGuides";

function Home() {
  return (
    <div className="">
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          background: "white",
        }}
      ></div>
      <div>
        <Navbar />
      </div>
      <div>
        <StorecodeSearchBar />
      </div>
      <div>
        <GetCode />
      </div>
      <div className=" w-100 h-100 " style={{backgroundColor:"black"}}>
        <MostSearched />
     
      <div className="">
        <TopInfluencer />
      </div>
      <div className="">
        <ExploreGuides />
      </div>
      </div>
    </div>
  );
}

export default Home;
