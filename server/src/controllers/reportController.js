import { Report } from "../models/Reports.js";



export async function getReports(){
    try {
        const data = await Report.findAll();
        return data;
    } catch (error) {
        throw new Error("Error getting reports");
    }
}

export async function createNewReport(userId, providerId, comment) {
    try {
        const date = new Date();
        console.log(date);
        const data = await Report.create({ userId, providerId, comment, date});
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        throw new Error("Error creating new report");
    }

}

export async function getById(id) {
    try {
        const data = await Report.findByPk(id);
        return data
    } catch (error) {
        throw new Error("Error getting report");        
    }
}

export async function getReportsByServiceId(providerId){
    try {
        const data = await Report.findAll({where : {
            providerId : providerId
        }})
        return data
    } catch (error) {
        console.log(error.message);
        throw new Error(" Error getting reports")
    }
}