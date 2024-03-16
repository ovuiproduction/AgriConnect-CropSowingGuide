import React from "react";
import Footer from "../partials/Footer";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import MaharashtraDivision, { CropSelection } from "../components/Maharashtra";
import MadhyaPradeshDivision, { MadhyaPradeshCrop } from "../components/MadhyaPradesh";
import PunjabDivision, { PunjabCrop } from "../components/Punjab";
import UttarPradeshDivision, { UttarPradeshCrop } from "../components/UttarPradesh";
import WestBengalDivision, { WestBengalCrop } from "../components/WestBengal";
import Alert, { AlertSuccess, AlertWarning } from "./Alert";

import "../css/cropSubmitForm.css"

export default function SubmitCrop() {
  const [cropname, Setcropname] = useState(""); //similar to bodyparser in react we use this hooks to fetch data
  const [division, setDivision] = useState("");
  const [status, setStatus] = useState("");
  const handleDivisionChange = (division) => {
    setDivision(division);
  };
  const handleCropChange = (cropname) => {
    Setcropname(cropname);
  };
  const [area, Setarea] = useState("");
  const [state, setState] = useState("");

  const navigate = useNavigate();
  let returnHome = async (e) => {
    e.preventDefault();
    navigate("/home");
  }

  useEffect(() => {
    if (status === "ok") {
      setTimeout(() => {
        navigate("/home");
      }, 3000); // Adjust the delay time (in milliseconds) as needed
    }
  }, [status, navigate]);

  let onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/submitcrop", {
        method: "post",
        body: JSON.stringify({ state, division, cropname, area }),//providing to server
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setStatus(data.status);
    } catch (error) {
      console.error("Error fetching data:", error);
    }


  };
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"></link>
      <script src="https://kit.fontawesome.com/dd438282bc.js" crossOrigin="anonymous"></script>

      <nav className="navbar bg-body-tertiary expertNavbar">
        <div className="container-fluid">
          <div className="headingExpert"><i onClick={returnHome} className="fa-solid fa-circle-left"></i></div>
        </div>
      </nav>
      <div className="submitFormBlock">
        <div className="headingForm">
          <h1>Submit Crop Details</h1>
        </div>

        <div className="alerts">
          {status === "ok" && <AlertSuccess />}
        </div>


        <form className="cropSubmitForm">
          <div className="mb-3">
            <label htmlFor="state" className="form-label">State</label>
            <select className="form-control" value={state} onChange={(e) => setState(e.target.value)} name="state" id="statename">
              <option value="Select State">Select State</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Punjab">Punjab</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          {state === "Maharashtra" && (
            <MaharashtraDivision onDivisionChange={handleDivisionChange} />
          )}
          {state === "Maharashtra" && (
            <CropSelection onCropChange={handleCropChange} />
          )}
          {state === "Madhya Pradesh" && (
            <MadhyaPradeshDivision onDivisionChange={handleDivisionChange} />
          )}
          {state === "Madhya Pradesh" && (
            <MadhyaPradeshCrop onCropChange={handleCropChange} />
          )}
          {state === "Punjab" && (
            <PunjabDivision onDivisionChange={handleDivisionChange} />
          )}
          {state === "Punjab" && (
            <PunjabCrop onCropChange={handleCropChange} />
          )}
          {state === "Uttar Pradesh" && (
            <UttarPradeshDivision onDivisionChange={handleDivisionChange} />
          )}
          {state === "Uttar Pradesh" && (
            <UttarPradeshCrop onCropChange={handleCropChange} />
          )}
          {state === "West Bengal" && (
            <WestBengalDivision onDivisionChange={handleDivisionChange} />
          )}
          {state === "West Bengal" && (
            <WestBengalCrop onCropChange={handleCropChange} />
          )}
          {/* <div className="mb-3">
          <label htmlFor="division" className="form-label">Division</label>
          <input value={division} onChange={(e) => Setdivision(e.target.value)} type="text" className="form-control" id="division" />
        </div> */}

          {/* <div className="mb-3">
          <label htmlFor="cropname" className="form-label">Crop Name</label>
          <input value={cropname} onChange={(e) => Setcropname(e.target.value)} type="text" className="form-control" id="cropname" />
        </div> */}

          <div className="mb-3">
            <label htmlFor="croparea" className="form-label">Crop Area</label>
            <input value={area} onChange={(e) => Setarea(e.target.value)} type="number" className="form-control" id="croparea" placeholder="in hecters" />
          </div>


          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button onClick={onHandleSubmit} className="btn btn-primary">Submit</button>
        </form>
      </div>
      {/* <Footer /> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>

    </>
  );
}
