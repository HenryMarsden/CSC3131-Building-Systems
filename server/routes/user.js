import express from "express"
import {getUsers, createUser} from "../controllers/user.js"
import user from "../models/user.js";

const router = express.Router();


router.get("/", getUsers);
router.post("/", createUser);


export default router;