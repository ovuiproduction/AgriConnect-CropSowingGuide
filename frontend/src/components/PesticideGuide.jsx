import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import PesticideTable from "./PesticideTable";
import "../css/pesticideguide.css";

export default function PesticideGuide() {
    const [cropname, setCropname] = useState("");
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    let returnHome = async (e) => {
        e.preventDefault();
        navigate("/home");
    }
   const [status, setStatus] = useState("");
    let onHandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/searchpesticide", {
                method: "post",
                body: JSON.stringify({ cropname }),//providing to server
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const responseData = await response.json();
            setData(responseData.data);
            setStatus("ok");
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }

    }

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"></link>
            <script src="https://kit.fontawesome.com/dd438282bc.js" crossOrigin="anonymous"></script>
            <nav className="navbar bg-body-tertiary expertNavbar pesticideGuideNavbar">
                <div className="container-fluid">
                    <div className="headingExpert"><i onClick={returnHome} className="fa-solid fa-circle-left"></i></div>
                </div>
            </nav>
            <div className="pesticideSearchBlock">
            <form className="addPesticideForm">
                <div className="mb-3">
                    <label htmlFor="searchpesticide" className="form-label">Crop Name</label>
                    <input value={cropname} onChange={(e) => setCropname(e.target.value)} type="text" className="form-control" id="searchpesticide" placeholder="Enter crop name" />
                </div>
                <button onClick={onHandleSubmit} className="btn btn-primary">Submit</button>
            </form>
            <div>
                {data && status=="ok" && <PesticideTable data={data}/>}
                
            </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
        </>
    );
}
