import { User } from "../models/User.js"

export async function getAllUsers(){
    try {
        const data = await User.findAll();
        console.log(data);
        return data
    } catch (error) {
        console.log(error.message);
        throw new Error("Error gettin users")
    }
}

export async function createNewUser(username, email, password, role){
    try {
        const data = await User.create({username, email, password, role})
        console.log(data);
        return data
    } catch (error) {
        console.log(error.message);
        throw new Error("Error creating user")
    }
}