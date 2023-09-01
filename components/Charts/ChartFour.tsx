
import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartFourState {
  series: { data: number[] }[];
}

const ChartFour: React.FC = () => {
  const [state, setState] = useState<ChartFourState>({
    series: [
      {
        data: [
          30, 80, 73, 55,
        ],
      },
    ],
  });

  // Update the state
  const updateState = () => {
    setState((prevState) => ({
      ...prevState,
      // Update the desired properties
    }));
  };
  updateState;

  const options: ApexOptions = {
    colors: ['#B9E500'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        // endingShape: "rounded",
        borderRadius: 2,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Product 1',
        'Product 2',
        'Product 3',
        'Product 4',
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      fontFamily: 'inter',

      markers: {
        radius: 99,
      },
    },
    // yaxis: {
    //   title: false,
    // },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      opacity: 1,
    },

    tooltip: {
      x: {
        show: false,
      },
      // y: {
      //   formatter: function (val) {
      //     return val;
      //   },
      // },
    },
  };

  return (
    <div className="col-span-12 xl:col-span-8 rounded-lg bg-black px-5 pt-7.5 pb-5 sm:px-7.5">
      <div>
        <h4 className="text-xl font-semibold text-white dark:text-white">
          Product Performance
        </h4>
        <p className="text-sm">Secondary Text</p>
      </div>

      <div className="mb-2">
        <div id="chartFour" className="-ml-5">
          <ApexCharts
            options={options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartFour;
