import React, { useState } from "react";

export default function WestBengalDivision({ onDivisionChange }) {
  const handleDivisionChange = (e) => {
    const division = e.target.value;
    onDivisionChange(division);
  };

  const [division, setDivision] = useState("");

  return (
    <>
      <div className="mb-3">
        <label htmlFor="division" className="form-label">
          Division
        </label>
        <select
          className="form-control"
          onChange={handleDivisionChange}
          name="division"
          id="divisionname"
        >
          <option value="">Choose Region</option>
          <option value="Darjeeling Himalayan hill">
            Darjeeling Himalayan hill{" "}
          </option>
          <option value="The Ganges delta">The Ganges delta</option>
          <option value="The Rarh region">The Rarh region</option>
          <option value="The coastal Sundarbans">The coastal Sundarbans</option>
          <option value="The Bay of Bengal">The Bay of Bengal</option>
        </select>
      </div>
    </>
  );
}

export function WestBengalCrop({ onCropChange }) {
  const handleCropChange = (e) => {
    const cropname = e.target.value;
    onCropChange(cropname);
  };

  const [cropname, setCropname] = useState("");

  return (
    <>
      <div className="mb-3">
        <label htmlFor="cropname" className="form-label">
          Crop Name
        </label>
        <select
          className="form-control"
          onChange={handleCropChange}
          name="cropname"
          id="crop"
        >
          <option value="">Choose Crop</option>
          <option value="Rice">Rice</option>
          <option value="Sugarcane">Sugarcane</option>
          <option value="Jute">Jute</option>
          <option value="Tea">Tea</option>
          <option value="Potato">Potato</option>
        </select>
      </div>
    </>
  );
}
