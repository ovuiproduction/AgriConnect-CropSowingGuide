import react from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Chart } from "chart.js/auto";
import "../css/CropDistribution.css";
import DivisionArea from "./DivisionArea";

export default function RegionCropdistribution(props) {
  let chart;
  const { state, crops } = props;
  const { division } = useParams();
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
  const croplist = Object.keys(crops);
  let [cropdata, setCropdata] = useState([]);
  const fetchCropData = async () => {
    try {
      const response = await fetch("http://localhost:5000/cropdivisionreview", {
        method: "post",
        body: JSON.stringify({
          state: state,
          crops: croplist,
          division: division,
        }),
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
    const ctx = document.getElementById("myChart");
    chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: croplist,
        datasets: [
          {
            label: "Count Of Farmers",
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
      if (chart) chart.destroy();
      createChart();
    }
  }, [cropdata]);
  return (
    <>
      <nav className="navCropDistribution">
        <div class="containerCropDistribution">
          <h1>{division}</h1>
        </div>
        <Link to={`/${backurl}`}>Back</Link>
      </nav>
      <div className="crop_sowingdata_bar">
        <div className="graphBlock">
          <h3
            style={{
              fontFamily: "sans-serif",
              fontWeight: 600,
              color: "blueviolet",
              marginBottom: "20px",
            }}
          >
            Crop Sowing Ratio in {division}
          </h3>
          <div style={{ width: 800, height: 400 }}>
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
      <DivisionArea division={division} state={state} />
    </>
  );
}
