import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/CropDistribution.css";
import Chart from "chart.js/auto";
import CropArea from "./CropArea";

export default function CropDistribution(props) {
  let [cropdata, setCropdata] = useState([]);
  const { state, crop, division } = props;
  let chart;
  const states = [
    "maharashtra",
    "uttarpradesh",
    "madhyapradesh",
    "westbengal",
    "punjab",
  ];
  let backurl = "";
  if (state === "Maharashtra") {
    backurl = states[0];
  } else if (state == "Uttar Pradesh") {
    backurl = states[1];
  } else if (state == "Madhya Pradesh") {
    backurl = states[2];
  } else if (state == "West Bengal") {
    backurl = states[3];
  } else if (state == "Punjab") {
    backurl = states[4];
  }
  const fetchCropData = async () => {
    try {
      const response = await fetch("http://localhost:5000/cropsowingratio", {
        method: "post",
        body: JSON.stringify({ state: state, crop: crop, division: division }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setCropdata(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const createChart = () => {
    if (chart) chart.destroy();
    const ctx = document.getElementById("myChart");
    chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: division,
        datasets: [
          {
            label: "Crop area",
            data: cropdata,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  useEffect(() => {
    fetchCropData();
  }, []);

  useEffect(() => {
    if (cropdata.length > 0) {
      createChart();
    }
  }, [cropdata]);

  return (
    <>
      <nav className="navCropDistribution">
        <div className="containerCropDistribution">
          <h1>{crop}</h1>
        </div>
        <Link to={`/${backurl}`}>Back</Link>
      </nav>
      <div className="crop_sowingdata_bar">
        <div className="graphBlock">
          <h2
            style={{
              fontFamily: "sans-serif",
              fontWeight: 600,
              color: "blueviolet",
            }}
          >
            {crop} Sowing Distribution in {state}
          </h2>
          <div style={{ width: 800, height: 400 }}>
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
      <CropArea state={state} crop={crop} />
    </>
  );
}
