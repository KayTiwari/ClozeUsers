const express = require("express");
const cors = require("cors");
const userRouter = require('./routes/server')
const expressApi = express();
const port = process.env.PORT || 3001;

// test route
expressApi.get("/", (req, res) => {
  res.send("Server is working");
});

// set up CORS
expressApi.use(cors());

// Make sure we're getting our data
expressApi.use(express.json());
expressApi.use(express.urlencoded({ extended: false }));

// set up route for axios call
expressApi.use(userRouter);

// start server
expressApi.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});