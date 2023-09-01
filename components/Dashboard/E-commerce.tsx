"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import ChartTopic from "../Charts/ChartTopic";
import Link from "next/link";
// import Map from "../Maps/TestMap";

// without this the component renders on server and throws an error
import dynamic from "next/dynamic";
import ChartFour from "../Charts/ChartFour";
import ChartStrenght from "../Charts/ChartStrenght";
import ChartRadar from "../Charts/ChartRadar";
import ChartReview from "../Charts/ChartReview";
const MapOne = dynamic(() => import("../Maps/MapOne"), {
  ssr: false,
});

const ECommerce: React.FC = () => {
  return (
    <>

      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-4">
        <div>
          <h2 className="text-3xl font-medium text-white">Net Promoter Score</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 xl:w-2/3 w-full ml-auto">
          <div>
            <div className="relative">
              <input
                type="date"
                className="custom-input-date custom-input-date-1 w-full text-white rounded-lg border-[1.5px]  bg-transparent py-3 px-5 font-medium outline-none transition focus:border-white active:border-white" placeholder="01 Jun-25 Aug"
              />
            </div>
          </div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-lg gap-2.5 bg-transparent py-3 px-5  text-center font-medium text-white hover:bg-opacity-90  border-[1.5px] border-stroke"
          >
            <span>
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_299_6919)">
                  <path d="M11.8334 18C11.6891 18 11.5488 17.9532 11.4334 17.8667L8.7667 15.8667C8.6839 15.8046 8.6167 15.724 8.57041 15.6315C8.52413 15.5389 8.50003 15.4368 8.50003 15.3333V11.5867L3.82269 6.32467C3.49051 5.94992 3.27361 5.48721 3.19808 4.99216C3.12255 4.4971 3.19159 3.99077 3.39691 3.53401C3.60223 3.07725 3.93509 2.68951 4.35548 2.41738C4.77587 2.14525 5.26591 2.00032 5.76669 2H15.2334C15.7341 2.00059 16.224 2.14576 16.6442 2.41807C17.0645 2.69038 17.3971 3.07825 17.6022 3.53506C17.8073 3.99187 17.8761 4.49818 17.8004 4.99316C17.7247 5.48815 17.5076 5.95073 17.1754 6.32533L12.5 11.5867V17.3333C12.5 17.5101 12.4298 17.6797 12.3048 17.8047C12.1797 17.9298 12.0102 18 11.8334 18Z" fill="#FAFAFC" />
                </g>
                <defs>
                  <clipPath id="clip0_299_6919">
                    <rect width="16" height="16" fill="white" transform="translate(2.5 2)" />
                  </clipPath>
                </defs>
              </svg>

            </span>
            All Channels
          </Link>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartTwo />
        <ChartReview />
        <ChartTopic />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4">
        <ChartRadar />
        <ChartStrenght />
      </div>


      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-3xl font-medium text-white">Journeys</h2>
        </div>
        <div className=" ml-auto">
          <div>
            <div className="relative">
              <input
                type="date"
                className="text-white custom-input-date custom-input-date-1 w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-white active:border-white" placeholder="01 Jun-25 Aug"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4">
        <ChartThree />
        <ChartFour />
      </div>
    </>
  );
};

export default ECommerce;
