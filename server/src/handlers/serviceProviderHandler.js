import { getAllServiceProviders, createNewServiceProvider } from "../controllers/serviceProvidersController.js"
import { getServiceById } from "../controllers/servicesControllers.js";
import { createNewUser } from "../controllers/userController.js";

export async function getAll(req,res){
    try {   
        const data = await getAllServiceProviders();
        console.log(data);
        return res.json({ ok : true, servicesProviders : data})
    } catch (error) {
        console.log(error);
        res.json({ok : false, message : "Error getting all services providers"})
    }
}


export async function createServiceProvider(req, res) {
    const { password, email, username, role } = req.body; // datos user  
    const { profileDescription, profilePicture, serviceId } = req.body // datos serviceProvider
    // console.log(password, email, username, role, profileDescription, profilePicture); funciona
    try {
        if (role != 'service_provider') return res.json({ ok : false, message : 'Bad request, you should create a service provider'}); //funciona
        const service = await getServiceById(serviceId);
        if(!service) return res.json( { ok : false, message : "Bad request, service doesnt exist" })

        const newUser = await createNewUser(username,email,password,role);
        if(!newUser) return res.json({ ok : false, message : 'error creatin service provider'})
        const id = newUser.dataValues.id;

        const newProfileUser = await createNewServiceProvider(id, serviceId, profileDescription, profilePicture);
        console.log('new profile user', newProfileUser);
        return res.json({ ok : true, newProfileUser })
        
    } catch (error) {
        console.log('error', error.message);
        res.json({ ok : false, message : 'Error creatin service provider'})
    }
}