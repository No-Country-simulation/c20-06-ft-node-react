import  { ServiceProvider} from "./../models/ServiceProviders.js"


export async function getAllServiceProviders() {
    try {
        const data = await ServiceProvider.findAll()
        console.log('data', data);
        return data
    } catch (error) {

        throw new Error (" Error getting service providers")
    }
}


export async function createNewServiceProvider(userId, serviceId, profileDescription, profilePicture ) {
    try {
        const data = await ServiceProvider.create({ userId, serviceId, profilePicture, profileDescription });
        return data
    } catch (error) {
        console.log('Error in controller', error);
        throw new Error("Error creating new service provider");
    }
}