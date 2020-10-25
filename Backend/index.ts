// import express from 'express';    
const express = require('express');
const mongo = require('mongoose');
import { Schema } from "mongoose";
import { agentData, customerData, feedBackData, reportData } from './data';
import http from 'http';
import { api } from './app/main';
import { model } from 'mongoose';


const app = express()  
const port = 3000;
let db: any = {};

const connectionOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }

// const db = mongo.connect("mongodb://localhost:27017/report", connectionOptions).then((res: any) => {
//      if(res) {
//         console.log('Connected to ', res);
//         app.listen(port, () => {
//             console.log(`Express server listening on port ${port}`);
//           });
//      }
//  }).catch((error: any) => console.log(error)); 

 
mongo.Promise = global.Promise;
(async () => {
    try {
        db = await mongo.connect('mongodb://localhost:27017/report', connectionOptions);
        // app.listen(port, () => {
        //     console.log(`Express server listening on port ${port}`);
        // });
        setDatabaseDetails();
    } catch (err) {
        console.error(err);
    }
})();

 app.use((req: any, res: any, next: any) => {        
    res.setHeader('Access-Control-Allow-Origin', '*');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
    res.setHeader('Access-Control-Allow-Credentials', true);       
    next();  
});

const onListening = () => {
   console.log(`Server listening on port: ${port}`);
  }

const server = http.createServer(app);
server.listen(port);
server.on('listening', onListening);
app.use('/', api);


async function setDatabaseDetails() {
    const customer = model('Customer')
    const customerDocumentCount = await customer.countDocuments();
    let insertCustomer: any;
    let insertAgent: any;
    if (customerDocumentCount == 0) {
        insertCustomer = await customer.insertMany(customerData);
    }
    const agent = model('Agent')
    const agentDocumentCount = await agent.countDocuments();
    if (agentDocumentCount == 0) {
        insertAgent = await agent.insertMany(agentData);
    }
    const report = model('Report')
    const reportDocumentCount = await report.countDocuments();
    if (reportDocumentCount == 0) {
        reportData[0].customerId = insertCustomer[0]._id;
        reportData[0].agentId = insertAgent[0]._id;
        reportData[1].customerId = insertCustomer[1]._id;
        reportData[1].agentId = insertAgent[1]._id;
        reportData[2].customerId = insertCustomer[0]._id;
        reportData[2].agentId = insertAgent[0]._id;
        reportData[3].customerId = insertCustomer[1]._id;
        reportData[3].agentId = insertAgent[1]._id;
        const insert = await report.insertMany(reportData);
    }
    const feedback = model('Feedback')
    const feedbackDocumentCount = await feedback.countDocuments();
    if (feedbackDocumentCount == 0) {
        feedBackData[0].customerId = insertCustomer[0]._id;
        feedBackData[1].customerId = insertCustomer[1]._id;
        const insert = await feedback.insertMany(feedBackData);
    }
}