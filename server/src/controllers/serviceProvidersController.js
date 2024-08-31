import { User } from "../models/User.js";
import  { ServiceProvider} from "./../models/ServiceProviders.js"


export async function getAllServiceProviders() {
    try {
        const data = await ServiceProvider.findAll({include : [ { model : User, attributes : ['id', 'email', 'username', 'role'] } ]})
        return data
    } catch (error) {
        console.log(error);
        throw new Error (" Error getting service providers")
    }
}

export async function createNewServiceProvider(userId, serviceId, profileDescription, profilePicture ) {
    try {
        const data = await ServiceProvider.create({ userId, serviceId, profilePicture, profileDescription });
        return data;
    } catch (error) {
        console.log('Error in controller', error);
        throw new Error("Error creating new service provider");
    }
}

export async function getServiceProviderById(id) {
    try {
        const data = await ServiceProvider.findByPk(id, {include : [{ model : User, attributes : ['id', 'email', 'username', 'role'] }]});
        return data
    } catch (error) {
        throw new Error(" Error gettin service provider")
    }
}

export async function updateServiceProvider(id ,updatedServiceProvider) {
    try {
        const updated = await ServiceProvider.update(updatedServiceProvider, {where : { id : id}})
        return updated
    } catch (error) {
        console.log(error.message);
        throw new Error(" Error updating service provider")
    }
}

