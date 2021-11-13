import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./routes/user.js";


const app = express();

app.use("/user", userRoutes);

app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

app.use(cors());

const CONNECTION_URL = "mongodb+srv://HenryMarsden:Mollymarsden1@buildingsystems.8hiaa.mongodb.net/BuildingSystems?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () => 
    console.log("Connecion is established and running on port: ", PORT)
)).catch((err) => console.log(err.message));
