import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

export default function StateArea(props) {
  const { state } = props;
  let [cropdata, setCropdata] = useState([]);
  var barchart;
  const fetchCropData = async () => {
    try {
      const response = await fetch("http://localhost:5000/getAreaState", {
        method: "post",
        body: JSON.stringify({ state: state }),
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
    if (barchart) barchart.destroy();
    const barctx = document.getElementById("myBarPlot");
    barchart = new Chart(barctx, {
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

  useEffect(() => {
    fetchCropData();
  }, []);

  useEffect(() => {
    if (cropdata.length > 0) {
      cropdata.sort((a, b) => b.totalArea - a.totalArea);
      if (barchart) barchart.destroy();
      createChart();
    }
  }, [cropdata]);

  return (
    <>
      <br />
      <br />
      <br />
      <div>
        <canvas style={{ width: 600, height: 400 }} id="myBarPlot"></canvas>
      </div>
    </>
  );
}
