import React, { useState } from "react";

export default function UttarPradeshDivision({ onDivisionChange }) {
    const handleDivisionChange = (e) => {
        const division = e.target.value;
        onDivisionChange(division);
    };

    const [division, setDivision] = useState("");

    return (
        <>
            <div className="mb-3">
                <label htmlFor="division" className="form-label">Division</label>
                <select className="form-control" onChange={handleDivisionChange} name="division" id="divisionname">
                    <option value="">Choose Region</option>
                    <option value="Western Uttar Pradesh">Western Uttar Pradesh</option>
                    <option value="Eastern Uttar Pradesh">Eastern Uttar Pradesh</option>
                    <option value="Bundelkhand">Bundelkhand</option>
                    <option value="Awadh">Awadh</option>
                    <option value="Braj">Braj</option>
                </select>
            </div>
        </>
    );
}

export function UttarPradeshCrop({ onCropChange }) {
    const handleCropChange = (e) => {
        const cropname = e.target.value;
        onCropChange(cropname);
    };

    const [cropname, setCropname] = useState("");

    return (
        <>
            <div className="mb-3">
                <label htmlFor="cropname" className="form-label">Crop Name</label>
                <select className="form-control" onChange={handleCropChange} name="cropname" id="crop">
                    <option value="">Choose Crop</option>
                    <option value="Wheat">Wheat</option>
                    <option value="Sugarcane">Sugarcane</option>
                    <option value="Maize">Maize</option>
                    <option value="Rice">Rice</option>
                    <option value="Pulses">Pulses</option>
                </select>
            </div>
        </>
    );
}
