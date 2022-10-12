const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const config = require("./config/config.js");
const User = require("./model/user.js");

mongoose
  .connect(config.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Some problem to connected to MongoDB: ", error.reason);
  });

app.use(bodyParser.json());
app.use(cors());

app.get("/api/users", async (req, res) => {
  const users = await User.find({}).exec();
  return res.status(200).json({ users });
});

app.post("/api/user", async (req, res) => {
  try {
    console.log("req.body: ", req.body);
    const {
      firstName,
      lastName,
      dateOfBorn,
      emailVerified,
      pseudo,
      status,
      sex,
      email,
      phoneNumber,
    } = req.body;
    const newUser = await new User({
      firstName,
      lastName,
      dateOfBorn,
      emailVerified,
      pseudo,
      status,
      sex,
      email,
      phoneNumber,
    }).save();
    if (newUser) {
      res.status(201).send({
        message:
          "Welcome to our marketplace community. Your profile is created successfully.",
        newUser,
      });
    } else {
      res.status(500).send({
        message: `Error in creating user account. Try again !!!`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Generic error",
    });
  }
});

const port = config.PORT || 8000;

app.listen(port, () => {
  console.log(`Application MERN listing to port ${port}`);
});
