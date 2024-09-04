import { Category } from "../models/Category.js";
import { Service } from "../models/Services.js";
import { User } from "../models/User.js";
import  { ServiceProvider} from "./../models/ServiceProviders.js"


export async function getAllServiceProviders() {
    try {
        const data = await ServiceProvider.findAll({include : [ 
                { model : User, attributes : ['id', 'email', 'username', 'role'] },
                {model : Service, as : 'services', through : { attributes : []}, include : [{
                    model: Category,
                    as: 'category',
                    attributes: ['id', 'name']
                }]}
            ]
        })
        return data
    } catch (error) {
        console.log(error);
        throw new Error (" Error getting service providers")
    }
}

export async function createNewServiceProvider(userId, profileDescription, profilePicture, serviceIds ) {
    try {
        const data = await ServiceProvider.create({ userId, profilePicture, profileDescription });
        const serviceProviderId = data.dataValues.id;
        if(serviceIds?.length > 0 && serviceProviderId){
            const serviceProvider = await ServiceProvider.findByPk(serviceProviderId);
            const services = await Service.findAll({
                where : { id : serviceIds }
            })
            await serviceProvider.addService(services);
        }
        return data;
    } catch (error) {
        console.log('Error in controller', error.message);
        throw new Error("Error creating new service provider");
    }
}

export async function getServiceProviderById(id) {
    try {
        const data = await ServiceProvider.findByPk(id, { include : [
                { model : User, attributes : ['id', 'email', 'username', 'role'] },
                {model : Service, as : 'services', through : { attributes : []}}
            ]
        });
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

export async function addServiceToServiceProvider(id, idService) {
    try {
        const serviceProvider = await ServiceProvider.findByPk(id);
        await serviceProvider.addServices(idService);
        return true
    } catch (error) {
        // console.log(error);
        throw new Error("Error adding service")
    }
}

export async function removeServiceToServiceProvider(id, idService) {
    try {
        const serviceProvider = await ServiceProvider.findByPk(id);
        await serviceProvider.removeServices(idService);
        return true
    } catch (error) {
        throw new Error(" Error removing service")
    }
}

