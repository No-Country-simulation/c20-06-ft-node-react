import { getAllServiceProviders, createNewServiceProvider, getServiceProviderById, updateServiceProvider, addServiceToServiceProvider, removeServiceToServiceProvider} from "../controllers/serviceProvidersController.js"
import { createNewUser,updateUserById } from "../controllers/userController.js";
import bcrypt from 'bcrypt';


export async function getAll(req,res){
    try {   
        const data = await getAllServiceProviders();
        return res.json({ ok : true, servicesProviders : data})
    } catch (error) {
        res.json({ok : false, message : "Error getting all services providers"})
    }
}

export async function createServiceProvider(req, res) {
    const { password, email, username, role, locationId } = req.body; // datos user  
    const { profileDescription, profilePicture, serviceIds } = req.body // datos serviceProvider

    try {
        if (role != 'service_provider') return res.json({ ok : false, message : 'Bad request, you should create a service provider'});
        if(!serviceIds) return res.json( { ok : false, message : "Bad request, not sent services" })

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password.toString(), salt);
        
        const newUser = await createNewUser(username, email, hashedPassword, role, locationId);
        if(!newUser) return res.json({ ok : false, message : 'error creatin service provider'})
        const id = newUser.dataValues.id;
            
        const newProfileUser = await createNewServiceProvider(id, profileDescription, profilePicture, serviceIds);
  
        return res.json({ ok : true, newProfileUser })
        
    } catch (error) {
        console.log('error', error.message);
        res.json({ ok : false, message : 'Error creatin service provider'})
    }
}

export async function getById(req,res) {
    const { id } = req.params
    try {
        if(!id) return res.json({ ok : false, message : "Bad request, not id sent"});
        const data = await getServiceProviderById(id);
        if(!data) return res.json({ ok : false, message : 'Service provider doesnt exist'})
        return res.json({ok : true, service_provider : data});
    } catch (error) {
        res.json({ ok : false, })
    }
}

export async function updatedServiceProvider(req, res) {
    const { id } = req.params;
    const { profilePicture, profileDescription, isActive, username } = req.body;

    try {
        const serviceProvider = await getServiceProviderById(id);
        if(!serviceProvider) return res.json({ ok : false, message : 'Bad request, it service provider doesnt exist! '});

        if(username ){
            const id = serviceProvider.dataValues.User.id;
            const userUpdated = await updateUserById(id, {username});
        }
        console.log('aca');

        const [data] = await updateServiceProvider(id, { profilePicture, profileDescription, isActive});
        
        return res.json({ ok : true, message : "Service profile updated sucesfully!"});
    } catch (error) {
        res.json({ ok : false, error : 'Error updating update'})
    }
}

export async function updatedActive(req, res) {
    const { id } = req.params;
    const {isActive } = req.body
    if(!id) return res.json({ ok : false, message : "ID not sent " }) 

    try {
        const serviceProvider = await getServiceProviderById(id);
        if(!serviceProvider) return res.json({ ok : false, message : "Service provider doesnt exist"});
        
        const updated = await updateServiceProvider(id, { isActive })
        console.log(updated);
        
        return res.json({ ok : true, message : "Service provider updated sucesfully" });
    } catch (error) {
        res.json({ ok : false, messge: 'Error updating service provider!'});
    }
}

export async function updatedRating(req, res) { 
    const { id } = req.params
    const { newVote } = req.body
    if(!id || !newVote) return res.json({ ok : false, message : "ID or new vote not sent"});
    if(newVote > 5 || newVote < 0) return res.json({ ok : false, message : "Incorrect vote"}); 
    try {
        const serviceProvider = await getServiceProviderById(id);
        if(!serviceProvider) return res.json({ ok :false, message : "Service provider doesnt exist" });
    
        const amountVotes = serviceProvider.dataValues?.amountVotes || 3
        const numberVotes = serviceProvider.dataValues?.numberVotes || 1;

        let newRating = Math.round((amountVotes + newVote) / (numberVotes + 1)) ;
        const updated = await updateServiceProvider(id, {rating : newRating})

        return res.json( { ok  : true, message : "Service provider rating updated" })
    } catch (error) {
        console.log(error);
        res.json({ ok : false, message : "Error updating rating"})
    }
}

export async function addService (req, res) {
    const { id, idService } = req.params;
    if(!id || !idService ) return res.json( { ok : false, message : "Bad request. id or idService not sent"});
    try {
        const serviceProvider = await getServiceProviderById(id)
        if(!serviceProvider) return res.json( { ok : false, message : "service provides doesnt exist"})
        
        const data = await addServiceToServiceProvider(id, idService);
        if(!data) return res.json( { ok : false, message : 'Error adding service'});
        return res.json( { ok : true, message : "Service added sucesfully!"})
    } catch (error) {
        console.log(error);
        return res.json({ ok : false, message : 'Error adding serice'})
    }
}

export async function removeService(req, res ) {
    const { id, idService } = req.params;
    if(!id || !idService ) return res.json( { ok : false, message : "Bad request. id or idService not sent"});
    try {
        const serviceProvider = await getServiceProviderById(id)
        if(!serviceProvider) return res.json( { ok : false, message : "service provides doesnt exist"})
            
        const data = await removeServiceToServiceProvider(id, idService);
        if(!data) return res.json( { ok : false, message : "Error removing service"})
        return res.json( { ok : true, message : 'Service removed sucesfully!' })
    } catch (error) {
        return res.json( { ok : false, message: 'Error removing service'})
    }
}