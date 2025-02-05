import mongoose from "mongoose";

const { Schema, model } = mongoose;

const zipcodeSchema = new Schema({
  postalCode: String,
  postalCodeName: String,
  postalCodeNameLong: String,
});

const Zipcode = model("zipcode", zipcodeSchema);

export default Zipcode;
