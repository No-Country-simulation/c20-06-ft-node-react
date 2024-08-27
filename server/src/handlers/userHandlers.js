import { getAllUsers, createNewUser } from "../controllers/userController.js"



export async function getUsers(req, res) {
    try {
        const data = await getAllUsers();
        res.json({ ok : true, users : data})
    } catch (error) {
        res.json({ ok : false, message : "Error getting users"})
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