"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import ChartTopic from "../Charts/ChartTopic";
// import Map from "../Maps/TestMap";

// without this the component renders on server and throws an error
import dynamic from "next/dynamic";
const MapOne = dynamic(() => import("../Maps/MapOne"), {
  ssr: false,
});

const ECommerce: React.FC = () => {
  return (
    <>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">

      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* <ChartOne /> */}
        <ChartTwo />
        <ChartTwo />
        <ChartTopic />
        <ChartThree />
        {/* <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard /> */}
      </div>
    </>
  );
};

export default ECommerce;
