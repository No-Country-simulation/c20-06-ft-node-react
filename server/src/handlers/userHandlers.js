import { getUsers,getUserById, createNewUser, updateUserById, deleteUserById , getUserByEmail} from "../controllers/userController.js"
import bcrypt from 'bcrypt';
import { getLocation } from '../controllers/locationsControllers.js';


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

export async function createUser(req, res) {
    const { last_name, first_name, phone_number, email, password, role, locationId } = req.body;

    try {

        if (!last_name || !email || !password || !role || !locationId || 
            !first_name || !phone_number) {
            return res.status(400).json({ ok: false, message: 'Bad request, missing information!' });
        }

        const user = await getUserByEmail(email);
        if (user?.length > 0) {
            return res.status(400).json({ ok: false, message: "There is one account with this email" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password.toString(), salt);
        // Crear el nuevo usuario
                const newUser = await createNewUser({
                    last_name,
                    first_name,
                    phone_number,
                    email,
                    password: hashedPassword,
                    role
                });

        const location = await getLocation(locationId);
        if (!location) {
            return res.status(400).json({ ok: false, message: "Invalid location" });
        }

        await newUser.addLocation(location);


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

