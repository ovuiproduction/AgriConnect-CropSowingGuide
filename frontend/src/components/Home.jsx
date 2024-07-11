import React from "react";
import "../css/Home.css";
import img1 from "../Assets/images/HomeLogo.png";
import {Link} from "react-router-dom"

export default function Home(){
    return(
        <>
        <header>
        <div className="logo">
          <div className="logoBlock"><img src={img1} alt=""/></div>
        </div>
          <div className="headerContentBlock">
            <div className="logoText">Crop Sowing Guide</div>
            <nav>
                <ul> 
                    <li><a className="active" href="/home">Home</a></li>
                    <li><Link to="/sowingguide">Sowing Guide</Link></li>
                    <li><Link to="/pesticideguide">Pesticide Guide</Link></li>
                    <li><Link to="/login">FarmerToFarmer</Link></li>
                    <li><Link to="/expert">Expert</Link></li>
                </ul>
            </nav>
          </div>
    </header>
    <div className="middleBlock">
        <div className="middleBlockLayer">
        <div className="mainBlock">
           <p className="q_1">For the farmer By the farmer From the farmer</p>
        </div>
        <div className="showBlock">
            <h1 className="SubmitCropBlock"><Link to="/submitcrop" className="SubmitCropLink" >Submit Crop</Link></h1>
            <h1 className="SowingGuideBlock"><Link to="/sowingguide" className="SowingGuideLink" >Sowing Guide</Link></h1>
        </div>
        </div>
    </div>
        </>
    );
}