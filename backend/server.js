const express = require("express");
const mongoose = require("mongoose");
const cropcoll = require("./models/cropcollection");
const pesticidescoll = require("./models/pesticidescollection");
const articlecoll = require("./models/article");
const cors = require("cors");
const bodyPaser = require("body-parser");
const commentscoll = require("./models/comments");
const usercoll = require("./models/user");

const app = express();
app.use(express.json());
app.use(bodyPaser.urlencoded({ extended: true }));
app.use(cors());
const port = 5000;

mongoose.connect("mongodb://localhost:27017/cropdb").then(() => {
  console.log("Connected to database");
});

app.get("/", (req, res) => {
  res.send("This is server");
});

app.post("/register", async (req, res) => {
  console.log("register");
  const username = req.body.username;
  const password = req.body.password;
  try {
    const user = await usercoll({ username: username, password: password });
    const result = await user.save();
    res.status(200).send({ data: result });
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  console.log("login");
  const username = req.body.username;
  const password = req.body.password;
  try {
    const user = await usercoll.findOne({ username: username });
    if (user) {
      if (user.password == password) {
        res.status(200).send({ data: "Verified" });
      } else {
        res.status(400).send({ data: "Invalid Password" });
      }
    } else {
      res.status(500).send({ data: "Invalid Username" });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/submitcrop", async (req, res) => {
  console.log("request arrived");
  const response = new cropcoll(req.body);
  let result = await response.save();
  res.send({ status: "ok", data: result });
});

app.post("/submitpesticide", async (req, res) => {
  console.log("request arrived");
  const response = new pesticidescoll(req.body);
  let result = await response.save();
  res.send({ status: "ok", data: result });
});

app.post("/savepost", async (req, res) => {
  console.log("post saved successfully");
  const response = new articlecoll(req.body);
  let result = await response.save();
  res.send({ status: "ok", data: result });
});

app.post("/searchpesticide", async (req, res) => {
  console.log("request arrived");
  console.log(req.body.cropname);
  let response = await pesticidescoll.find({ cropname: req.body.cropname });
  console.log(response[0]);
  res.send({ status: "ok", data: response }); //sending response to from where this /searchpesticide was called in <PesticideGuide />
});

app.post("/fetchpost", async (req, res) => {
  console.log("fetched post successfully");
  let response = await articlecoll.find();
  console.log(response);
  res.send({ status: "ok", data: response }); //sending response to from where this /searchpesticide was called in <PesticideGuide />
});

app.post("/deletepost", async (req, res) => {
  console.log("dropped post successfully");
  let response = await articlecoll.deleteOne({ _id: req.body.id });
  console.log(response);
  res.send({ status: "ok", data: response }); //sending response to from where this /searchpesticide was called in <PesticideGuide />
});

app.post("/updatepost", async (req, res) => {
  let article = await articlecoll.findById(req.body.id);
  article.username = req.body.username;
  article.blogtitle = req.body.blogtitle;
  article.blogcontent = req.body.blogcontent;
  article = await article.save();
  console.log("edited successfully");
  res.send({ status: "ok", data: article });
});

app.post("/fetch-reply", async (req, res) => {
  const id = req.body.id;
  console.log(id);
  try {
    const result = await commentscoll.find({ blogId: id });
    res.send({ status: "ok", data: result });
  } catch (err) {
    console.log(err);
  }
});
app.post("/replypost", async (req, res) => {
  const blogId = req.body.blogId;
  const text = req.body.text;
  const commentOwner = req.body.commentOwner;
  try {
    const reply = await commentscoll({
      blogId: blogId,
      text: text,
      commentOwner: commentOwner,
    });
    const result = await reply.save();
    res.send({ status: "Ok", data: result });
  } catch (err) {
    console.log(err);
  }
});
app.post("/cropsowingratio", async (req, res) => {
  const state = req.body.state;
  const crop = req.body.crop;
  let division = req.body.division;
  try {
    const counts = await Promise.all([
      // here division array implementation
      cropcoll.countDocuments({
        state: state,
        cropname: crop,
        division: division[0],
      }),
      cropcoll.countDocuments({
        state: state,
        cropname: crop,
        division: division[1],
      }),
      cropcoll.countDocuments({
        state: state,
        cropname: crop,
        division: division[2],
      }),
      cropcoll.countDocuments({
        state: state,
        cropname: crop,
        division: division[3],
      }),
      cropcoll.countDocuments({
        state: state,
        cropname: crop,
        division: division[4],
      }),
    ]);
    res.send({ status: "ok", data: counts });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send({ status: "error", message: "Internal server error" });
  }
});

app.post("/statecropreview", async (req, res) => {
  const state = req.body.state;
  const crops = req.body.crops;
  const crop = Object.keys(crops);
  try {
    const counts = await Promise.all([
      cropcoll.countDocuments({ state: state, cropname: crop[0] }),
      cropcoll.countDocuments({ state: state, cropname: crop[1] }),
      cropcoll.countDocuments({ state: state, cropname: crop[2] }),
      cropcoll.countDocuments({ state: state, cropname: crop[3] }),
      cropcoll.countDocuments({ state: state, cropname: crop[4] }),
    ]);
    res.send({ status: "ok", data: counts });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send({ status: "error", message: "Internal server error" });
  }
});

app.post("/cropdivisionreview", async (req, res) => {
  const state = req.body.state;
  const crops = req.body.crops;
  const division = req.body.division;
  try {
    const counts = await Promise.all([
      // here division array implementation
      cropcoll.countDocuments({
        state: state,
        cropname: crops[0],
        division: division,
      }),
      cropcoll.countDocuments({
        state: state,
        cropname: crops[1],
        division: division,
      }),
      cropcoll.countDocuments({
        state: state,
        cropname: crops[2],
        division: division,
      }),
      cropcoll.countDocuments({
        state: state,
        cropname: crops[3],
        division: division,
      }),
      cropcoll.countDocuments({
        state: state,
        cropname: crops[4],
        division: division,
      }),
    ]);
    res.send({ status: "ok", data: counts });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send({ status: "error", message: "Internal server error" });
  }
});

app.post("/getAreaCropNameWise", async (req, res) => {
  let result = cropcoll
    .aggregate()
    .match({ cropname: req.body.crop, state: req.body.state })
    .group({ _id: "$division", totalArea: { $sum: "$area" } })
    .then((resultSet) => {
      console.log(resultSet);
      res.send({ status: "ok", data: resultSet });
    })
    .catch((error) => console.log(error));
});

app.post("/getAreaDivisionWise", async (req, res) => {
  let result = cropcoll
    .aggregate()
    .match({ division: req.body.division, state: req.body.state })
    .group({ _id: "$cropname", totalArea: { $sum: "$area" } })
    .then((resultSet) => {
      console.log(resultSet);
      res.send({ status: "ok", data: resultSet });
    })
    .catch((error) => console.log(error));
});

app.post("/getAreaState", async (req, res) => {
  let result = cropcoll
    .aggregate()
    .match({ state: req.body.state })
    .group({ _id: "$cropname", totalArea: { $sum: "$area" } })
    .then((resultSet) => {
      console.log(resultSet);
      res.send({ status: "ok", data: resultSet });
    })
    .catch((error) => console.log(error));
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
