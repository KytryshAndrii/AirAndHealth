
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from "chart.js"
import zoomPlugin from 'chartjs-plugin-zoom';
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { dateConverter } from "../../utils/DateFormating";

export const MultyAxisChart = ({ data, title }) => {

  Chart.register(
    zoomPlugin,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    )

    const [displayedData, setDisplayedData] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
  
    useEffect(() => {
      if (data && data.list && data.list.length > 0) {
        const quarterLength = Math.ceil(data.list.length / 6);
        const quarterData = data.list.slice(startIndex, startIndex + quarterLength);
        setDisplayedData(quarterData);
      }
    }, [data, startIndex]);
  
    const handleIncreaseData = () => {
      if (startIndex + displayedData.length < data.list.length) {
        setStartIndex(startIndex + Math.ceil(displayedData.length / 2));
      }
    };
  
    const handleDecreaseData = () => {
      if (startIndex - Math.ceil(displayedData.length / 2) >= 0) {
        setStartIndex(startIndex - Math.ceil(displayedData.length / 2));
      }
    };

  const labels = [];
  const co = [];
  const no = [];
  const no2 = [];
  const o3 = [];
  const so2 = [];
  const pm2_5 = [];
  const pm10 = [];
  const nh3 = [];

  displayedData.forEach((element) => {
    labels.push(dateConverter.convertUnixToDate(element.dt));
    co.push(element.components.co);
    no.push(element.components.no);
    no2.push(element.components.no2);
    o3.push(element.components.no2);
    so2.push(element.components.o3);
    pm2_5.push(element.components.pm2_5);
    pm10.push(element.components.pm10);
    nh3.push(element.components.nh3);
  });

  const MultyData = {
    labels: labels,
    datasets: [
      {
        label: 'CO',
        data: co,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 1,
        yAxisID: 'y',
      },
      {
        label: 'NO',
        data: no,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 1,
        yAxisID: 'y',
      },
      {
        label: 'NO2',
        data: no2,
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderWidth: 1,
        yAxisID: 'y',
      },
      {
        label: 'O3',
        data: o3,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 1,
        yAxisID: 'y',
      },
      {
        label: 'SO2',
        data: so2,
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderWidth: 1,
        yAxisID: 'y',
      },
      {
        label: 'PM2.5',
        data: pm2_5,
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderWidth: 1,
        yAxisID: 'y',
      },
      {
        label: 'PM10',
        data: pm10,
        borderColor: "#1fe708",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 1,
        yAxisID: 'y',
      },
      {
        label: 'NH3',
        data: nh3,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 1,
        yAxisID: 'y',
      },
    ]
  };

  const MultyOptions = {
    type: 'line',
    data: MultyData,
    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true // SET SCROOL ZOOM TO TRUE
            },
            mode: "xy",
            speed: 100
          },
          pan: {
            enabled: true,
            mode: "xy",
            speed: 100
          }
        },
        title: {
          display: true,
          text: title
        }
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          min: 2500,
          max: 7000,
          stepSize: 100,
        },
        y1: {
          type: 'linear',
          display: false,
          position: 'left',
          min: 2500,
          max: 7000,
          stepSize: 100,
        },
        y2: {
          type: 'linear',
          display: false,
          position: 'left',
          min: 2500,
          max: 7000,
          stepSize: 100,
        },
        y3: {
          type: 'linear',
          display: false,
          position: 'tight',
          min: 2500,
          max: 7000,
          stepSize: 100,
        }
      },
    },
  };

  return (
    <div className="Chart">
      <p className="text-lg font-semibold p-2 m-2">{title}</p>
      <div>
        <Line data={MultyData} options={MultyOptions} />
        <div>
          <button className="w-fit h-fit text-center text-md font-semibold p-2 m-1 border-2 bg-slate-200 border-slate-300 shadow-md hover:shadow-inner rounded-lg caret-transparent ease-in-out duration-[.4s]" onClick={handleDecreaseData}>Show Less Data</button>
          <button className="w-fit h-fit text-center text-md font-semibold p-2 m-1 border-2 bg-slate-200 border-slate-300 shadow-md hover:shadow-inner rounded-lg caret-transparent ease-in-out duration-[.4s]" onClick={handleIncreaseData}>Show More Data</button>
        </div>
      </div>
    </div>
  );
};

