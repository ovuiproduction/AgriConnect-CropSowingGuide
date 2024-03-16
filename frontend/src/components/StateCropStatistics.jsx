import react from "react";
import { Link } from "react-router-dom";
import "../css/SowingGuide.css";

export default function StateCropStatistics(props) {
  const { state, crops } = props;
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
    </>
  );
}
