import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartRadar {
    series: number[];
}

const options: ApexOptions = {
    chart: {
        type: "radar",
        toolbar: {
            show: false,
        },
    },
    colors: ["#B7D43B", "#A5C814", "#8DAC14", "#B9E500"],
    labels: ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5", "Product 6", "Product 7"],
    legend: {
        show: true,
        position: "bottom",
    },
    dataLabels: {
        enabled: false,
    },
    responsive: [
        {
            breakpoint: 2600,
            options: {
                chart: {
                    width: 480,
                },
            },
        },
        {
            breakpoint: 640,
            options: {
                chart: {
                    width: 250,
                },
            },
        },
    ],
};

const ChartRadar: React.FC = () => {
    const [state, setState] = useState<ChartRadar>({
        series: [65, 34, 12, 56, 34, 12, 56],
    });

    return (
        <div className="col-span-12 rounded-lg bg-black px-5 pt-7.5 pb-5 sm:px-7.5 xl:col-span-5">
            <div className="mb-3 justify-between gap-4 sm:flex">
                <div>
                    <h4 className="text-xl font-semibold text-white dark:text-white">
                        Strengths & Weaknesses
                    </h4>
                    <p className="text-sm">Based on Status</p>
                </div>
            </div>

            <div className="mb-2">
                <div id="chartRadar" className="mx-auto flex justify-center">
                    <ReactApexChart
                        options={options}
                        series={[{ name: "Series 1", data: state.series }]}
                        type="radar"
                    />
                </div>
            </div>
        </div>
    );
};

export default ChartRadar;
