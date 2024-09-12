import { Location } from "../models/Locations.js";
import { User } from "../models/User.js";



export async function generateInitialLocations(){
    try {
        const data = await Location.bulkCreate([
            { city: "Buenos Aires", state: "Buenos Aires", postalCode: "1000", latitude: -34.603722, longitude: -58.381592 },
            { city: "Buenos Aires", state: "Buenos Aires", postalCode: "1406", latitude: -34.629714, longitude: -58.513532 },
            { city: "Buenos Aires", state: "Buenos Aires", postalCode: "1425", latitude: -34.588035, longitude: -58.409897 }
        ])
        return data;
    } catch (error) {
        throw new Error("Error generating locations")
    }
}

export async function findOrCreateLocation(city, state, postalCode, latitude, longitude) {
    try {
        const [location, created] = await Location.findOrCreate({
            where: { city, state, postalCode }, // Buscar si ya existe la ubicación
            defaults: { latitude, longitude }   // Si no existe, crear con estos valores
        });

        return location;
    } catch (error) {
        console.log(error.message);
        throw new Error("Error finding or creating location");
    }
}

export async function getLocations() {
    try {
        const data = await Location.findAll();
        return data
    } catch (error) {
        console.log(error);
        throw new Error("Error getting locations")
    }
}

export async function getLocation(id){
    try {
        const location = await Location.findByPk(id);
        if(!location){
            throw new Error("Location not found");
        }
        return location;
    } catch (error) {
        console.log(error.message);
        throw new Error("Error getting location");
        
    }
}

//for users

export async function addLocationToAnUser(userId, locationId) {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error("User not found");
        }

        const location = await Location.findByPk(locationId);
        if (!location) {
            throw new Error("Location not found");
        }

        await user.addLocation(location);
        return { message: "Location added to user successfully" };
    } catch (error) {
        console.log(error.message);
        throw new Error("Error adding location to user");
    }
}


export async function deleteLocationFromUser(userId, locationId) {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error("User not found");
        }

        const location = await Location.findByPk(locationId);
        if (!location) {
            throw new Error("Location not found");
        }

        await user.removeLocation(location);
        return { message: "Location removed from user successfully" };
    } catch (error) {
        console.log(error.message);
        throw new Error("Error removing location from user");
    }
}


export async function getLocationsForAnUser(userId) {
    try {
        const user = await User.findByPk(userId, {
            include: {
                model: Location,
                as: 'locations'
            }
        });

        if (!user) {
            throw new Error("User not found");
        }

        return user.locations;
    } catch (error) {
        throw new Error(`Error fetching locations for user: ${error.message}`);
    }
}

