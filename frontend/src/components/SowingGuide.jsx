import react from "react";
import {Link} from "react-router-dom";
import img2 from "../Assets/images/HomeLogo.png";
import mahaMap from "../Assets/images/maharashtraMap.png"
import mpMap from "../Assets/images/madhypradeshMap.png"
import upMap from "../Assets/images/UPMap.jpeg"
import punjabMap from "../Assets/images/punjabMap.png"
import westBengalMap from "../Assets/images/westBengalMap.png"
import "../css/SowingGuide.css";

export default function SowingGuide() {
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
            <img className="navimg" src={img2} alt="logo" loading="lazy" />
          </Link>
          <p>
            Crop Sowing Analysis / पीक पेरणीचे विश्लेषण & Crop Sowing Guide /
            पीक पेरणी मार्गदर्शक
          </p>
        </div>
        <Link to="/home" className="back">
          Back
        </Link>
      </nav>
      <label
        style={{margin:"30px auto auto 50px" ,fontSize:"20px" ,color:"gray"}}
        htmlFor=".commodity"
      >
        State Wise
      </label>
      <div className="commodity">
        <div style={{ border: "none" }} className="card commoditycard">
          <img
            className="card-img-top commoditylogo"
            src={mahaMap}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Maharashtra</h5>
            <Link to="/maharashtra" className="btn btn-primary">
              Explore
            </Link>
          </div>
        </div>

        <div style={{ border: "none" }} className="card commoditycard">
          <img
            className="card-img-top commoditylogo"
            src={mpMap}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Madhyapradesh</h5>
            <Link to="/madhyapradesh" className="btn btn-primary">
              Explore
            </Link>
          </div>
        </div>

        <div style={{ border: "none" }} className="card commoditycard">
          <img
            className="card-img-top commoditylogo"
            src={upMap}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">UttarPradesh</h5>
            <Link to="/uttarpradesh" className="btn btn-primary">
              Explore
            </Link>
          </div>
        </div>

        <div style={{ border: "none" }} className="card commoditycard">
          <img
            className="card-img-top commoditylogo"
            src={punjabMap}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Punjab</h5>
            <Link to="/punjab" className="btn btn-primary">
              Explore
            </Link>
          </div>
        </div>

        <div style={{ border: "none" }} className="card commoditycard">
          <img
            className="card-img-top commoditylogo"
            src={westBengalMap}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">WestBengal</h5>
            <Link to="/westbengal" className="btn btn-primary">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
