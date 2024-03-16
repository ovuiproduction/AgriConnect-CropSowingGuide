import React, { useState, useEffect } from "react";
import "../css/Expert.css";
import { Link, useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import Alert, { AlertSuccess, AlertWarning } from "./Alert";

export default function Expert() {
    const [cropname, setCropname] = useState("");
    const [pesticidename, setPesticidename] = useState("");
    const [usedfor, setUsedfor] = useState("");
    const [manual, setManual] = useState("");
    const [pesticidetype, setPesticidetype] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (status === "ok") {
            setTimeout(() => {
                navigate("/home");
            }, 1000); // Adjust the delay time (in milliseconds) as needed
        }
    }, [status, navigate]);
    let returnHome = async (e) => {
        e.preventDefault();
        navigate("/home");
    }
    let onHandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/submitpesticide", {
                method: "post",
                body: JSON.stringify({ cropname, pesticidename, usedfor, manual, pesticidetype }),//providing to server
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
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous">

            </link>
            <script src="https://kit.fontawesome.com/dd438282bc.js" crossOrigin="anonymous"></script>
            <nav className="navbar bg-body-tertiary expertNavbar">
                <div className="container-fluid">
                    <div className="headingExpert"><i onClick={returnHome} className="fa-solid fa-circle-left"></i></div>
                </div>
            </nav>

            <div className="alerts">
                {status=="ok" && <AlertSuccess />}

            </div>
            

            <div className="expertHeader">
                <h1>Add Pesticide</h1>
            </div>
            <form className="addPesticideForm">
                <div className="mb-3">
                    <label htmlFor="cropname" className="form-label">Crop Name</label>
                    <input value={cropname} onChange={(e) => setCropname(e.target.value)} type="text" className="form-control" id="cropname" placeholder="Enter cropname" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pesticidename" className="form-label">Pesticide Name</label>
                    <input value={pesticidename} onChange={(e) => setPesticidename(e.target.value)} type="text" className="form-control" id="pesticidename" placeholder="Enter pesticide name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pesticidetype" className="form-label">Type of Pesticide</label>
                    <select value={usedfor} onChange={(e) => setUsedfor(e.target.value)} id="pesticidetype" className="form-control">
                        <option value="">Select pesticide type</option>
                        <option value="Insecticide">Insecticide</option>
                        <option value="Herbicide">Herbicide</option>
                        <option value="Rodenticide">Rodenticide</option>
                        <option value="Fungicide">Fungicide</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="methodtouse" className="form-label">Manual</label>
                    <textarea value={manual} onChange={(e) => setManual(e.target.value)} className="form-control" id="methodtouse" rows="3" placeholder="Enter method to use"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="pesticidetype" className="form-label">Type of Pesticide</label>
                    <select value={pesticidetype} onChange={(e) => setPesticidetype(e.target.value)} id="pesticidetype" className="form-control">
                        <option value="">Select type</option>
                        <option value="Poisonous">Poisonous</option>
                        <option value="Non Poisonous">Non Poisonous</option>
                    </select>
                </div>
                <button onClick={onHandleSubmit} className="btn btn-primary">Submit</button>
            </form>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
        </>
    );
}