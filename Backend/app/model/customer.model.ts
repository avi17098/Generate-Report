import { Schema, model } from "mongoose";

const customer_schema = new Schema({
    customerName: {type: String}
});

model('Customer', customer_schema);