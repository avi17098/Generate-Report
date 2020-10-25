import { Schema, model } from "mongoose";

const feedback_schema = new Schema({
    customerId: {type: Schema.Types.ObjectId, ref:'Customer'},
    userComment: {type: String},
    rating: {type: Number},
    createdAt: {type: Date}
});

model('Feedback', feedback_schema);