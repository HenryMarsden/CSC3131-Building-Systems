import express from "express"
import {getUsers, createUser, deleteUser} from "../controllers/user.js"
import user from "../models/user.js";

const router = express.Router();

// data storage routes

// retrieve all stored user data from MONGODB
router.get("/", getUsers);

// add a new user to MONGODB
router.post("/", createUser);

//delete a user from MONGODB
router.delete("/:id", deleteUser);


export default router;