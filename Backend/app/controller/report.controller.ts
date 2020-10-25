import { model } from 'mongoose';
const reports = model("Report");

export const getReports = async (req: any, res: any) => {
    try {
        const allReports = await reports.find({}).populate('customerId').populate('agentId');
        if (allReports) {
            return res.status(200).json({ status: true, data: allReports })
         } else {
            return res.status(200).json({ status: false, data: 'No record found.' })
         }
    } catch (err) {
        return res.status(400).json({ status: false, error: err })
    }
}