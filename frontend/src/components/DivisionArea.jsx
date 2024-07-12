import React, { useEffect, useState } from "react";
import "../css/CropDistribution.css";
import Chart from "chart.js/auto";

export default function DivisionArea(props) {
  const { division, state } = props;
  let [cropdata, setCropdata] = useState([]);
  var chart;
  var piechart;
  const fetchCropData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/getAreaDivisionWise",
        {
          method: "post",
          body: JSON.stringify({ division: division, state: state }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setCropdata(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const createChart = () => {
    if (chart) chart.destroy();
    const ctx = document.getElementById("myChartArea");
    chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: cropdata.map((item) => item._id),
        datasets: [
          {
            label: "Area Cultivated with Crops in Hectares",
            data: cropdata.map((item) => item.totalArea),
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

  const createPieChart = () => {
    if (piechart) piechart.destroy();
    const piectx = document.getElementById("myPieChart");
    piechart = new Chart(piectx, {
      type: "pie",
      data: {
        labels: cropdata.map((item) => item._id),
        datasets: [
          {
            label: "Area Cultivated with Crops in Hectares",
            data: cropdata.map((item) => item.totalArea),
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
      cropdata.sort((a, b) => b.totalArea - a.totalArea);
      createChart();
      createPieChart();
    }
  }, [cropdata]);

  return (
    <>
      <div className="crop_sowingdata_bar">
        <div className="graphBlock">
          <h2
            style={{
              fontFamily: "sans-serif",
              fontWeight: 600,
              color: "blueviolet",
            }}
          >
            {division} Area Sowing Distribution in {state} state
          </h2>
          <br />
          <br />
          <div className="graphs">
            <div className="graph">
              <canvas id="myChartArea"></canvas>
            </div>
            <div className="graph">
              <canvas id="myPieChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
