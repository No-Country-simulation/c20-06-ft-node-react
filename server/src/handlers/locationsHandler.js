import { generateInitialLocations, getLocations, getLocation, deleteLocationFromUser, addLocationToAnUser,getLocationsForAnUser} from "../controllers/locationsControllers.js";

export async function getAllLocations(req, res) {
    try {
        const locations = await getLocations();
        res.json({ ok: true, locations });
    } catch (error) {
        console.log(error.message);
        res.json({ ok: false, message: 'Error fetching locations', error: error.message });
    }
}

export async function getLocationById(req, res){
    const {id} = req.params;
    try {
        const location = await getLocation(id);
        res.json({ok: true, location});
    } catch (error) {
        res.status(500).json({ok:false, message: error.message});
    }
}

export async function generateLocations (req, res){
    try {
        const data = await generateInitialLocations();
        return res.json({ok: true, message: 'Locations created successfully!'});
        
    } catch (error) {
        return res.json({ok: false, message: 'Error generating locations'});
        
    }
}


// for users

export async function addLocationToUser(req, res) {
    const { userId, locationId } = req.body;

    try {
        if (!userId || !locationId) {
            return res.status(400).json({ ok: false, message: 'Bad request, missing information!' });
        }

        const result = await addLocationToAnUser(userId, locationId);
        return res.json({ ok: true, message: result.message });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ ok: false, message: "Error adding location to user", error: error.message });
    }
}

export async function removeLocationFromUser(req, res) {
    const { userId, locationId } = req.body;

    try {
        if (!userId || !locationId) {
            return res.status(400).json({ ok: false, message: 'Bad request, missing information!' });
        }

        const result = await deleteLocationFromUser(userId, locationId);
        return res.json({ ok: true, message: result.message });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ ok: false, message: "Error removing location from user", error: error.message });
    }
}



export async function getLocationsForUser(req, res) {
    const { id } = req.params;

    try {
        const locations = await getLocationsForAnUser(id);
        res.json({ ok: true, locations });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ ok: false, message: "Error fetching locations for user", error: error.message });
    }
}
