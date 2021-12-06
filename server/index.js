import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./routes/user.js";
import stockRoutes from "./routes/stock.js";

// creates new express aplication 'app'
const app = express();

// cors (Cross-origin resource sharing) allows sharing of restricted resources
app.use(cors());

// recognise incoming request object as JSON object
app.use(express.json({limit: "20mb", extended:true}));
// recognise incoming request objects as Strings/Arrays
app.use(express.urlencoded({limit: "20mb", extended:true}));

// tells express where to find routes where methods get called
app.use("/users", userRoutes);
app.use("/stocks", stockRoutes);

// establishes connection to MONGODB
const CONNECTION_URL = "mongodb+srv://HenryMarsden:Mollymarsden1@buildingsystems.8hiaa.mongodb.net/BuildingSystems?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () => 
    console.log("Connecion is established and running on port: ", PORT)
)).catch((err) => console.log(err.message));
