import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Cover from "./components/Cover";
import SubmitCrop from "./components/SubmitCrop";
import Home from "./components/Home";
import Expert from "./components/Expert";
import PesticideGuide from "./components/PesticideGuide";
import F2F_Home from "./components/F2F_Home";
import NewPost from "./components/NewPost";
import Editpost from "./components/Editpost";
import SowingGuide from "./components/SowingGuide";
import StateCropStatistics from "./components/StateCropStatistics";
import CropDistribution from "./components/CropDistribution";
import RegionCropdistribution from "./components/RegionCropDistribution";
import ReplyPost from "./components/ReplyPost";
import Login from "./components/Login";
import Register from './components/Register';
import ViewBlog from "./components/ViewBlog";

const mahacrops = {
  Jowar: require("./Assets/images/jowarlogo.webp"),
  Wheat: require("./Assets/images/wheatlogo.avif"),
  Cotton: require("./Assets/images/cottonlogo.jpg"),
  Sugarcane: require("./Assets/images/sugarcanelogo.jpg"),
  Onion: require("./Assets/images/onionlogo.jpg"),
};

const mpcrops = {
  Soyabean: require("./Assets/images/soybeanlogo.webp"),
  Wheat: require("./Assets/images/wheatlogo.avif"),
  Maize: require("./Assets/images/maizelogo.jpg"),
  Chickpea: require("./Assets/images/chickpealogo.jpg"),
  Mustard: require("./Assets/images/mustardlogo.jpg"),
};

const upcrops = {
  Maize: require("./Assets/images/maizelogo.jpg"),
  Wheat: require("./Assets/images/wheatlogo.avif"),
  Rice: require("./Assets/images/ricelogo.webp"),
  Sugarcane: require("./Assets/images/sugarcanelogo.jpg"),
  Pulses: require("./Assets/images/pulseslogo.jpeg"),
};

const punjabcrops = {
  Barley: require("./Assets/images/barleylogo.jpg"),
  Wheat: require("./Assets/images/wheatlogo.avif"),
  Maize: require("./Assets/images/maizelogo.jpg"),
  Rice: require("./Assets/images/ricelogo.webp"),
  Pulses: require("./Assets/images/pulseslogo.jpeg"),
};

const westbengalcrops = {
  Rice: require("./Assets/images/ricelogo.webp"),
  Jute: require("./Assets/images/jutelogo.jpg"),
  Tea: require("./Assets/images/tealogo.jpg"),
  Sugarcane: require("./Assets/images/sugarcanelogo.jpg"),
  potato: require("./Assets/images/potatologo.jpeg"),
};

const mahaDivisions = [
  "West Maharashtra",
  "North Maharashtra",
  "Konkan",
  "Vidarbha",
  "Marathwada",
];

const mpDivisions = [
  "Malwa",
  "Bundelkhand",
  "Baghelkhand",
  "Nimar",
  "Mahakoshal",
];

const punjabDivisions = ["Malwa", "Majha", "Doaba", "Jalandhar", "Amritsar"];

const upDivisions = [
  "Western Uttar Pradesh",
  "Eastern Uttar Pradesh",
  "Bundelkhand",
  "Awadh",
  "Braj",
];

const westBengalDivisions = [
  "Darjeeling Himalayan hill",
  "The Ganges delta",
  "The Rarh region",
  "The coastal Sundarbans",
  "The Bay of Bengal",
];

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* main pages routes */}
          <Route exact path="/" element={<Cover />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/submitcrop" element={<SubmitCrop />} />
          <Route exact path="/pesticideguide" element={<PesticideGuide />} />
          <Route exact path="/expert" element={<Expert />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/farmertofarmer" element={<F2F_Home />} />
          <Route exact path="/sowingguide" element={<SowingGuide />} />
    
          {/* State wise route */}
          <Route
            exact
            path="/maharashtra"
            element={
              <StateCropStatistics
                state={"Maharashtra"}
                crops={mahacrops}
                divisions={mahaDivisions}
              />
            }
          />
          <Route
            exact
            path="/madhyapradesh"
            element={
              <StateCropStatistics
                state={"Madhyapradesh"}
                crops={mpcrops}
                divisions={mpDivisions}
              />
            }
          />
          <Route
            exact
            path="/uttarpradesh"
            element={
              <StateCropStatistics
                state={"Uttarpradesh"}
                crops={upcrops}
                divisions={upDivisions}
              />
            }
          />
          <Route
            exact
            path="/punjab"
            element={
              <StateCropStatistics
                state={"Punjab"}
                crops={punjabcrops}
                divisions={punjabDivisions}
              />
            }
          />
          <Route
            exact
            path="/westbengal"
            element={
              <StateCropStatistics
                state={"West Bengal"}
                crops={westbengalcrops}
                divisions={westBengalDivisions}
              />
            }
          />

          {/* Routes for crops in maharashtra */}
          <Route
            exact
            path="/Maharashtra/Jowar"
            element={
              <CropDistribution
                state={"Maharashtra"}
                crop={"Jowar"}
                division={mahaDivisions}
              />
            }
          />
          <Route
            exact
            path="/Maharashtra/Wheat"
            element={
              <CropDistribution
                state={"Maharashtra"}
                crop={"Wheat"}
                division={mahaDivisions}
              />
            }
          />
          <Route
            exact
            path="/Maharashtra/Onion"
            element={
              <CropDistribution
                state={"Maharashtra"}
                crop={"Onion"}
                division={mahaDivisions}
              />
            }
          />
          <Route
            exact
            path="/Maharashtra/Cotton"
            element={
              <CropDistribution
                state={"Maharashtra"}
                crop={"Cotton"}
                division={mahaDivisions}
              />
            }
          />
          <Route
            exact
            path="/Maharashtra/Sugarcane"
            element={
              <CropDistribution
                state={"Maharashtra"}
                crop={"Sugarcane"}
                division={mahaDivisions}
              />
            }
          />

          {/* Routes for crops in madhyapradesh */}
          <Route
            exact
            path="/Madhyapradesh/Soyabean"
            element={
              <CropDistribution
                state={"Madhya Pradesh"}
                crop={"Soyabean"}
                division={mpDivisions}
              />
            }
          />
          <Route
            exact
            path="/Madhyapradesh/Wheat"
            element={
              <CropDistribution
                state={"Madhya Pradesh"}
                crop={"Wheat"}
                division={mpDivisions}
              />
            }
          />
          <Route
            exact
            path="/Madhyapradesh/Maize"
            element={
              <CropDistribution
                state={"Madhya Pradesh"}
                crop={"Maize"}
                division={mpDivisions}
              />
            }
          />
          <Route
            exact
            path="/Madhyapradesh/Chickpea"
            element={
              <CropDistribution
                state={"Madhya Pradesh"}
                crop={"Chickpea"}
                division={mpDivisions}
              />
            }
          />
          <Route
            exact
            path="/Madhyapradesh/Mustard"
            element={
              <CropDistribution
                state={"Madhya Pradesh"}
                crop={"Mustard"}
                division={mpDivisions}
              />
            }
          />

          {/* Routes for crops in Punjab */}
          <Route
            exact
            path="/Punjab/Barley"
            element={
              <CropDistribution
                state={"Punjab"}
                crop={"Barley"}
                division={punjabDivisions}
              />
            }
          />
          <Route
            exact
            path="/Punjab/Wheat"
            element={
              <CropDistribution
                state={"Punjab"}
                crop={"Wheat"}
                division={punjabDivisions}
              />
            }
          />
          <Route
            exact
            path="/Punjab/Maize"
            element={
              <CropDistribution
                state={"Punjab"}
                crop={"Maize"}
                division={punjabDivisions}
              />
            }
          />
          <Route
            exact
            path="/Punjab/Rice"
            element={
              <CropDistribution
                state={"Punjab"}
                crop={"Rice"}
                division={punjabDivisions}
              />
            }
          />
          <Route
            exact
            path="/Punjab/Pulses"
            element={
              <CropDistribution
                state={"Punjab"}
                crop={"Pulses"}
                division={punjabDivisions}
              />
            }
          />

          {/* Routes for crops in Uttarpradesh */}
          <Route
            exact
            path="/Uttarpradesh/Sugarcane"
            element={
              <CropDistribution
                state={"Uttar Pradesh"}
                crop={"Sugarcane"}
                division={upDivisions}
              />
            }
          />
          <Route
            exact
            path="/Uttarpradesh/Wheat"
            element={
              <CropDistribution
                state={"Uttar Pradesh"}
                crop={"Wheat"}
                division={upDivisions}
              />
            }
          />
          <Route
            exact
            path="/Uttarpradesh/Maize"
            element={
              <CropDistribution
                state={"Uttar Pradesh"}
                crop={"Maize"}
                division={upDivisions}
              />
            }
          />
          <Route
            exact
            path="/Uttarpradesh/Rice"
            element={
              <CropDistribution
                state={"Uttar Pradesh"}
                crop={"Rice"}
                division={upDivisions}
              />
            }
          />
          <Route
            exact
            path="/Uttarpradesh/Pulses"
            element={
              <CropDistribution
                state={"Uttar Pradesh"}
                crop={"Pulses"}
                division={upDivisions}
              />
            }
          />

          {/* Routes for crops in west bengal */}
          <Route
            exact
            path="/West Bengal/Sugarcane"
            element={
              <CropDistribution
                state={"West Bengal"}
                crop={"Sugarcane"}
                division={westBengalDivisions}
              />
            }
          />
          <Route
            exact
            path="/West Bengal/Potato"
            element={
              <CropDistribution
                state={"West Bengal"}
                crop={"Potato"}
                division={westBengalDivisions}
              />
            }
          />
          <Route
            exact
            path="/West Bengal/Jute"
            element={
              <CropDistribution
                state={"West Bengal"}
                crop={"Jute"}
                division={westBengalDivisions}
              />
            }
          />
          <Route
            exact
            path="/West Bengal/Rice"
            element={
              <CropDistribution
                state={"West Bengal"}
                crop={"Rice"}
                division={westBengalDivisions}
              />
            }
          />
          <Route
            exact
            path="/West Bengal/Tea"
            element={
              <CropDistribution
                state={"West Bengal"}
                crop={"Tea"}
                division={westBengalDivisions}
              />
            }
          />

          {/* routes for region in maharashtra */}
          <Route
            exact
            path="/:division/Maharashtra"
            element={
              <RegionCropdistribution state="Maharashtra" crops={mahacrops} />
            }
          />
          {/* routes for region in madhyaprdesh */}
          <Route
            exact
            path="/:division/Madhyapradesh"
            element={
              <RegionCropdistribution state="Madhya Pradesh" crops={mpcrops} />
            }
          />
          {/* routes for region in Uttarpradesh */}
          <Route
            exact
            path="/:division/Uttarpradesh"
            element={
              <RegionCropdistribution state="Uttar Pradesh" crops={upcrops} />
            }
          />
          {/* routes for region in Punjab */}
          <Route
            exact
            path="/:division/punjab"
            element={
              <RegionCropdistribution state="Punjab" crops={punjabcrops} />
            }
          />
          {/* routes for region in west bengal */}
          <Route
            exact
            path="/:division/West Bengal"
            element={
              <RegionCropdistribution state="West Bengal" crops={westbengalcrops} />
            }
          />

          {/* Post opration routes */}
          <Route exact path="/newpost" element={<NewPost />} />
          <Route exact path="/editpost" element={<Editpost />} />
          <Route exact path="/view-blog" element={<ViewBlog />} />
          <Route exact path="/replypost" element={<ReplyPost />} />
        </Routes>
      </Router>
    </>
  );
}
