import react from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";
import "../css/SowingGuide.css";

export default function StateCropStatistics(props) {
  const { state, crops ,divisions} = props;
  let currstate = state;
  if (currstate === "Madhyapradesh") {
    currstate = "Madhya Pradesh";
  } else if (currstate === "Uttarpradesh") {
    currstate = "Uttar Pradesh";
  }
  const croplist = Object.keys(crops);
  let [cropdata, setCropdata] = useState([]);
  const fetchCropData = async () => {
    try {
      const response = await fetch("http://localhost:5000/statecropreview", {
        method: "post",
        body: JSON.stringify({ state: currstate, crops: crops }),
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
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: croplist,
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
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      ></link>
      <nav className="navsowingguide">
        <div className="containernav">
          <Link to="/home">
            <img
              className="navimg"
              src={require("../Assets/images/HomeLogo.png")}
              alt="logo"
              loading="lazy"
            />
          </Link>
          <p>{state}</p>
        </div>
        <Link to="/sowingguide" className="back">
          Back
        </Link>
      </nav>
      <label
        style={{
          margin: "30px auto auto 50px",
          fontSize: "20px",
          color: "gray",
        }}
        htmlFor=".commodity"
      >
        Crops In {state}
      </label>

      {/* commodity block */}

      <div className="commodity">
        {Object.keys(crops).map((cropname) => (
          <div
            style={{ border: "none" }}
            className="card commoditycard"
            key={cropname}
          >
            <img
              className="card-img-top commoditylogo"
              src={crops[cropname]}
              alt={cropname}
            />
            <div className="card-body">
              <h5 className="card-title">{cropname}</h5>
              <Link to={`/${state}/${cropname}`} className="btn btn-primary">
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/*  regions Block */}

      <div className="commodity">
        {divisions.map((division) => (
          <div
            style={{ border: "none" }}
            className="card commoditycard"
            key={division}
          >
            <img
              className="card-img-top commoditylogo"
              src={require("../Assets/images/maharashtraMap.png")}
              alt={division}
            />
            <div className="card-body">
              <h5 className="card-title">{division}</h5>
              <Link to={`/${division}/${state}`} className="btn btn-primary">
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="overviewofstate">
      <div className="statemap">
      <h3
            style={{
              fontFamily: "sans-serif",
              fontWeight: 600,
              color: "blueviolet",
              marginBottom: "50px",
            }}
          >
          Crop Map of {currstate}
          </h3>
        </div>
        <div className="prevyeargraph">
          <h3
            style={{
              fontFamily: "sans-serif",
              fontWeight: 600,
              color: "blueviolet",
              marginBottom: "50px",
            }}
          >
            Crop Sowing Ratio in {currstate}
          </h3>
          <div style={{ width: 500, height: 400 }}>
            <canvas className="canvas" id="myChart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
