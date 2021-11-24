import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    regNo: Number,
    userName: String,
    grade: String,
    section: {
        type: String,
        default: 'A'
    }
});

const user = mongoose.model('user', userSchema);

export default user;