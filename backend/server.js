require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT;

// ~~~~~~~~ connect to express app ~~~~~~~ //
const app = express();

// ~~~~~~~~~ connect with mongoDB ~~~~~~~~ //

// ~~~~~~~~~~~~~~ middleware ~~~~~~~~~~~~~ //

// ~~~~~~~~~~~~~~~~ schema ~~~~~~~~~~~~~~~ //

// ~~~~~~~~~~~~~~~~ routes ~~~~~~~~~~~~~~~ //

app.listen(PORT || 5000);
