import { generateInitialLocations, getLocations, getLocation} from "../controllers/locationsControllers.js";

export async function getAllLocations(req, res) {
    try {
        const locations = await getLocations(); // Obtiene todas las localidades predefinidas
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