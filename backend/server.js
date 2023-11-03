require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT;
const DB = process.env.MONGO_URL;
const userRoutes = require("./routes/user.routes");

// ~~~~~~~~ connect to express app ~~~~~~~ //

const app = express();

// ~~~~~~~~~ connect with mongoDB ~~~~~~~~ //

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB);
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// ~~~~~~~~~~~~~~ middleware ~~~~~~~~~~~~~ //

app.use(cors());
app.use(express.json());

// ~~~~~~~~~~~~~~~~ routes ~~~~~~~~~~~~~~~ //

app.get("/", (req, res) => {
  res.status(200).json({
    status: "API Server Working Totally Fine",
  });
});

app.use("/api/users", userRoutes);

// ~~~~~~~~~~ Server Connection ~~~~~~~~~ //

const startServer = () => {
  try {
    // Connect to DB
    connectDB();

    // Start & Listen to the requests
    app.listen(PORT, () => console.log(`Server started listening on ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

startServer();
