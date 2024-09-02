import { createNewReport, getReports, getById, getReportsByServiceId } from "../controllers/reportController.js";


export async function getAllReports(req, res){
    try {
        const data = await getReports();
        return res.json({ ok : true, reports : data})
    } catch (error) {
       return res.json({ ok : false, message : 'Error getting all reports'})
    }
}

export async function createRerport(req, res){
    const { userId, providerId} = req.params;
    const { comment } = req.body;

    if(!userId || !providerId || !comment) return res.json({ ok : false, message : "Bad request"});
   try {
        const data = await createNewReport(userId, providerId, comment);
        res.json({ ok : true, report : data });
   } catch (error) {
    res.json({ ok : false, message: "Error creating report"})
   } 
}

export async function getReportById(req, res){
    const  { id } = req.params
    if(!id) return res.json({ ok : false, message : "Bad request"});
    try {
        const data = await getById(id);
        if(!data) return res.json({ ok : false, message : 'Invalid id'})
        res.json( { ok : true, report : data })
    } catch (error) {
        res.json({ ok : false, message : "Error getting report" })
    }
}

export async function getByServiceId(req, res) {
    const { providerId } = req.params;
    if(!providerId) return res.json({ ok : false, message : "Id service provider not sent"});
    try {
        const data = await getReportsByServiceId(providerId);
        res.json( { ok : true, reports : data});
    } catch (error) {
        res.json({ ok : false, message : "Error getting reports" })
    }
}