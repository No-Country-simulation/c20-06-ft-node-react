import { getUsers,getUserById, createNewUser, updateUserById, deleteUserById , getUserByEmail} from "../controllers/userController.js"
import bcrypt from 'bcrypt';
import { findOrCreateLocation, getLocation } from '../controllers/locationsControllers.js';


export async function getAllUsers(req, res) {
    try {
        const data = await getUsers();
        res.json({ ok : true, users : data})
    } catch (error) {
        res.json({ ok : false, message : "Error getting users"})
    }
}

export async function getUser(req, res) {
    const { id } = req.params;
    try {
        const user = await getUserById(id);
        res.json({ ok: true, user });
    } catch (error) {
        res.status(500).json({ ok: false, message: error.message });
    }
}

// export async function createUser(req, res){
//     const { username, email, password, role } = req.body;
//     try {
//         if(!username || !email || !password || !role) return res.status(404).json({ ok : false, message : 'Bad request!'})
//         const user = await getUserByEmail(email);

//         const salt = await bcript.genSalt(10);
//         const hashedPassword = await bcript.hash(password.toString(), salt);

//         if(user?.length > 0) return res.json({ok : false, message : "There is one account with this email"})
//         const newUser = await createNewUser(username,email,hashedPassword,role);
//         return res.json({ ok : true, newUser})
//     } catch (error) {
//         console.log(error);
//         res.json({ ok : false, message : "Error creating users"})
//     }
// }
export async function createUser(req, res) {
    const { username, email, password, role, locationId } = req.body;
    console.log(req.body); 

    try {
        if (!username || !email || !password || !role || !locationId) {
            return res.status(400).json({ ok: false, message: 'Bad request!' });
        }

        const user = await getUserByEmail(email);
        if (user?.length > 0) {
            return res.status(400).json({ ok: false, message: "There is one account with this email" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password.toString(), salt);

        // Verificar si la localidad existe en la base de datos
        const location = await getLocation(locationId); // Asegúrate de que la localidad existe
        if (!location) {
            return res.status(400).json({ ok: false, message: "Invalid location" });
        }

        // Crear el nuevo usuario
        const newUser = await createNewUser( username, email, hashedPassword, role, locationId );
        
        return res.json({ ok: true, newUser });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ ok: false, message: "Error creating user", error: error.message });
    }
}


export async function updateUser(req, res) {
    const { id } = req.params;
    const updatedFields = req.body;
    try {
        const updatedUser = await updateUserById(id, updatedFields);
        res.json({ ok: true, updatedUser });
    } catch (error) {
        res.status(500).json({ ok: false, message: error.message });
    }
}

export async function deleteUser(req, res) {
    const { id } = req.params;
    try {
        const message = await deleteUserById(id);
        res.json({ ok: true, message });
    } catch (error) {
        res.status(500).json({ ok: false, message: error.message });
    }
}

