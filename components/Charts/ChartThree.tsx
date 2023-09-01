import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartThreeState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    type: "donut",
  },
  colors: ["#B7D43B", "#A5C814", "#8DAC14", "#B9E500"],
  labels: ["Product 1", "Product 2", "Product 3", "Product 4"],
  legend: {
    show: true,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: true,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ChartThree: React.FC = () => {
  const [state, setState] = useState<ChartThreeState>({
    series: [65, 34, 12, 56],
  });

  return (
    <div className="col-span-12 rounded-lg bg-black px-5 pt-7.5 pb-5 sm:px-7.5 xl:col-span-4">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div className="mb-4">
          <h6 className="text-base font-semibold text-white">
            Over all C-SAT
          </h6>
          <h4 className="text-2xl font-semibold text-white">
            76 (Good)
          </h4>
          <p className="text-sm">Secondary Text</p>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>
    </div>
  );
};

export default ChartThree;
