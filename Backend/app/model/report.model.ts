import { Schema, model } from "mongoose";

const report_schema = new Schema({
    customerId: {type: Schema.Types.ObjectId, ref:'Customer'},
    agentId: {type: Schema.Types.ObjectId, ref:'Agent'},
    startDate: {type: Date},
    endDate: {type: Date},
    callLog: {type: String},
    type: {type: Number},
    createdAt: {type: Date}
});

model('Report', report_schema);