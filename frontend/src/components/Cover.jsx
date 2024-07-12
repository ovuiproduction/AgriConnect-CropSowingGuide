import React from "react";
import { Link } from "react-router-dom";
import "../css/coverpage.css";

export default function Cover() {
  return (
    <>
      <div className="coverBody">
        <div className="coverBodylayer">
          <header className="coverHeader">
            <nav className="coverNav">
              <h1 className="coverHeaderText">Crop Sowing Guide</h1>
              <div className="coverServices">
                <Link className="coverHomeLink" to="/home">
                  Home
                </Link>
                <Link className="coverServicesLink" to="/pesticideguide">
                  Servcies
                </Link>
              </div>
            </nav>
          </header>
          <h2 className="coverStart">
            <Link className="coverStartLink" to="/home">
              Get Started
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
}
