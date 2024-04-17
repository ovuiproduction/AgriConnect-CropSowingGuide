import React, { useState } from "react";

export default function MaharashtraDivision({ onDivisionChange }) {
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
          <option value="West Maharashtra">West Maharashtra</option>
          <option value="North Maharashtra">North Maharashtra</option>
          <option value="Konkan">Konkan</option>
          <option value="Vidarbha">Vidarbha</option>
          <option value="Marathwada">Marathwada</option>
        </select>
      </div>
    </>
  );
}

export function CropSelection({ onCropChange }) {
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
          <option value="Jowar">Jowar</option>
          <option value="Wheat">Wheat</option>
          <option value="Cotton">Cotton</option>
          <option value="Sugarcane">Sugarcane</option>
          <option value="Onion">Onion</option>
        </select>
      </div>
    </>
  );
}
