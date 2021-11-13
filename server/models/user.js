import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    registrationNumber: Number,
    name: String,
    grade: String,
    section: {
        type: String,
        default: 'A'
    },
    subjects:[String]
});

const user = mongoose.model('user', userSchema);

export default user;