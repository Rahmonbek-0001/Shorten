import { Schema, model } from "mongoose";
const schema = new Schema({
    name: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
    
})

const Users = model("Users", schema)
export default Users