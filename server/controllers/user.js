import UserData from "../models/user.js";

export const getUsers = async (req, res)=>{
    try {
        const allUsers = await UserData.find();

        res.status(200).json(allUsers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res)=>{
    const user = req.body;

    const newUser = new UserData(user);

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteUser = async (req, res)=>{
    const id = req.params.id;
    
    try {
        await UserData.findByIdAndRemove(id).exec();
        res.send('Successfully Deleted!')
    } catch (error) {
        console.log(error);
    }
}