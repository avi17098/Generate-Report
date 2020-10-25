import { model } from 'mongoose';
const feedback = model("Feedback");

export const getFeedback = async (req: any, res: any) => {
    try {
        const allFeedback = await feedback.find({}).populate('customerId');
        if (allFeedback) {
            return res.status(200).json({ status: true, data: allFeedback })
         } else {
            return res.status(200).json({ status: false, data: 'No record found.' })
         }
    } catch (err) {
        return res.status(400).json({ status: false, error: err })
    }
}