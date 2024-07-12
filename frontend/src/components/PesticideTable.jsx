import React from "react";
export default function PesticideTable({ data }) {
  return (
    <>
      <h1 className="headerPesticide">Pesticides Table</h1>
      <div className="pesticideTable">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Crop Name</th>
              <th scope="col">Pesticide Name</th>
              <th scope="col">Used For</th>
              <th scope="col">Manual</th>
              <th scope="col">Pesticide Type</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, index) => (
              <tr key={index}>
                <td>#</td>
                <td>{element.cropname}</td>
                <td>{element.pesticidename}</td>
                <td>{element.manual}</td>
                <td>{element.usedfor}</td>
                <td>{element.pesticidetype}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
