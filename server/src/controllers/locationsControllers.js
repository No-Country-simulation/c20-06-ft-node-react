import { Location } from "../models/Locations.js";
import { User } from "../models/User.js";



export async function generateInitialLocations(){
    try {
        const data = await Location.bulkCreate([
            { "localidad": "San Isidro", "provincia": "Provincia Buenos Aires" },
            { "localidad": "Tigre", "provincia": "Provincia Buenos Aires" },
            { "localidad": "Vicente López", "provincia": "Provincia Buenos Aires" },
            { "localidad": "San Fernando", "provincia": "Provincia Buenos Aires" },
            { "localidad": "Pilar", "provincia": "Provincia Buenos Aires" },
            { "localidad": "Escobar", "provincia": "Provincia Buenos Aires" },
            { "localidad": "San Martín", "provincia": "Provincia Buenos Aires" },
            { "localidad": "Malvinas Argentinas", "provincia": "Provincia Buenos Aires" },
            { "localidad": "José C. Paz", "provincia": "Provincia Buenos Aires" },
            { "localidad": "Moreno", "provincia": "Provincia Buenos Aires" },
            { "localidad": "Lomas de Zamora", "provincia": "Provincia Buenos Aires" },
            { "localidad": "Lanús", "provincia": "Provincia Buenos Aires" },
            { "localidad": "Avellaneda", "provincia": "Provincia Buenos Aires" },
            { "localidad": "Quilmes", "provincia": "Provincia Buenos Aires" },
            { "localidad": "Berazategui", "provincia": "Provincia Buenos Aires" },
            { "localidad": "Florencio Varela", "provincia": "Provincia Buenos Aires" },
            { "localidad": "Almirante Brown", "provincia": "Provincia Buenos Aires" },
            { "localidad": "Esteban Echeverría", "provincia": "Provincia Buenos Aires" },
            { "localidad": "Ezeiza", "provincia": "Provincia Buenos Aires" },
            { "localidad": "Berisso", "provincia": "Provincia Buenos Aires" },
            { "localidad": "Palermo", "provincia": "Capital Federal" },
            { "localidad": "Belgrano", "provincia": "Capital Federal" },
            { "localidad": "Recoleta", "provincia": "Capital Federal" },
            { "localidad": "Caballito", "provincia": "Capital Federal" },
            { "localidad": "Villa Urquiza", "provincia": "Capital Federal" },
            { "localidad": "Villa Devoto", "provincia": "Capital Federal" },
            { "localidad": "San Telmo", "provincia": "Capital Federal" },
            { "localidad": "Almagro", "provincia": "Capital Federal" },
            { "localidad": "Villa Crespo", "provincia": "Capital Federal" },
            { "localidad": "Nuñez", "provincia": "Capital Federal" },
            { "localidad": "Puerto Madero", "provincia": "Capital Federal" },
            { "localidad": "Flores", "provincia": "Capital Federal" },
            { "localidad": "Boedo", "provincia": "Capital Federal" },
            { "localidad": "Parque Patricios", "provincia": "Capital Federal" },
            { "localidad": "Villa Lugano", "provincia": "Capital Federal" },
            { "localidad": "Mataderos", "provincia": "Capital Federal" },
            { "localidad": "Barracas", "provincia": "Capital Federal" },
            { "localidad": "Balvanera", "provincia": "Capital Federal" },
            { "localidad": "Parque Chacabuco", "provincia": "Capital Federal" },
            { "localidad": "Liniers", "provincia": "Capital Federal" }
         
          ])
        return data;
    } catch (error) {
        throw new Error("Error generating locations")
    }
}

// export async function findOrCreateLocation(city, state, postalCode, latitude, longitude) {
//     try {
//         const [location, created] = await Location.findOrCreate({
//             where: { city, state, postalCode }, // Buscar si ya existe la ubicación
//             defaults: { latitude, longitude }   // Si no existe, crear con estos valores
//         });

//         return location;
//     } catch (error) {
//         console.log(error.message);
//         throw new Error("Error finding or creating location");
//     }
// }

export async function getLocations() {
    try {
        const data = await Location.findAll();
        return data
    } catch (error) {
        console.log(error);
        throw new Error("Error getting locations")
    }
}

export async function getLocation(ids){
    try {
        const location = await Location.findAll({where : {id : ids}});
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

