import { getUsers,getUserById, createNewUser, updateUserById, deleteUserById} from "../controllers/userController.js"



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



export async function createUser(req, res){
    const { username, email, password, role } = req.body;
    try {
        if(!username || !email || !password || !role) return res.status(404).json({ ok : false, message : 'Bad request!'})
        const newUser = await createNewUser(username,email,password,role);
        return res.json({ ok : true, newUser})
    } catch (error) {
        res.json({ ok : false, message : "Error creating users"})
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

