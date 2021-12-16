import express from "express";
import cors from "cors";
import bunyan from "bunyan";
import { LoggingBunyan } from "@google-cloud/logging-bunyan";
import mongoose from "mongoose";
import userRoutes from "./routes/user.js";
import stockRoutes from "./routes/stock.js";

//const bunyan = require('bunyan');
//const {LoggingBunyan} = require('@google-cloud/logging-bunyan');

// creates new express aplication 'app'
const app = express();

// *************** Bunyan logging setup *************
// Creates a Bunyan Stackdriver Logging client
const loggingBunyan = new LoggingBunyan({
    projectId: 'building-systems-logger',
    keyFilename: '/path/to/key.json',
});
// Create a Bunyan logger that streams to Stackdriver Logging
const bunyanLogger = bunyan.createLogger({
  name: 'node-error-reporting',
  streams: [
    // Log to the console at 'info' and above
    {stream: process.stdout, level: 'info'},
    // And log to Stackdriver Logging, logging at 'info' and above
    loggingBunyan.stream('info'),
  ],
});


// cors (Cross-origin resource sharing) allows sharing of restricted resources
app.use(cors());

// recognise incoming request object as JSON object
app.use(express.json({limit: "20mb", extended:true}));
// recognise incoming request objects as Strings/Arrays
app.use(express.urlencoded({limit: "20mb", extended:true}));

// tells express where to find routes where methods get called
app.use("/users", userRoutes);
app.use("/stocks", stockRoutes);

// //************** Stackdriver Error Reporting setup ******** */
// app.get('/bunyan-error', (req, res) => {
//     bunyanLogger.error('Bunyan error logged');
//     res.send('Bunyan error logged!');
// }) 

// establishes connection to MONGODB
const CONNECTION_URL = "mongodb+srv://HenryMarsden:Mollymarsden1@buildingsystems.8hiaa.mongodb.net/BuildingSystems?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () => 
    console.log("Connecion is established and running on port: ", PORT)
)).catch((err) => console.log(err.message));
