import { Schema, Types, model } from "mongoose";
const linksSchema = new Schema({
  linkFrom: { type: String, required: true },
  linkTo: { type: String, required: true, unique: true },
  linkCode: { type: String },
  date: { type: Date, default: Date.now },
  clicks: { type: Number, required: true, default: 0 },
  owner: { type: Types.ObjectId, ref: "User", required: true },
  
});

export const Links = model("Links", linksSchema);
