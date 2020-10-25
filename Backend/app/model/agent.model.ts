import { Schema, model } from "mongoose";

const agent_schema = new Schema({
    agentName: {type: String}
});

model('Agent', agent_schema);