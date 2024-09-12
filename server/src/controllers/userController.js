import { User } from "../models/User.js"

export async function getUsers(){
    try {
        const data = await User.findAll();
        return data
    } catch (error) {
        console.log(error.message);
        throw new Error("Error gettin users")
    }
}

export async function getUserById(id) {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    } catch (error) {
        console.log(error.message);
        throw new Error("Error getting user");
    }
}


export async function createNewUser( {last_name, first_name, phone_number, email, password, role} ) {


    try {
        const data = await User.create( {last_name, first_name, phone_number, email, password, role});
        return data;
    } catch (error) {
        console.log(error.message);
        throw new Error("Error creating user");
    }
}



export async function updateUserById(id, updatedFields) {
    try {
        const [updated] = await User.update(updatedFields, {
            where: { id: id }
        });

        if (!updated) {
            throw new Error("User not found");
        }

        const updatedUser = await User.findByPk(id);
        return updatedUser;
    } catch (error) {
        console.log(error);
        throw new Error("Error updating user");
    }
}

export async function deleteUserById(id) {
    try {
        const deleted = await User.destroy({
            where: { id: id }
        });

        if (!deleted) {
            throw new Error("User not found");
        }

        console.log(`User with ID ${id} deleted`);
        return `User with ID ${id} deleted`;
    } catch (error) {
        console.log(error.message);
        throw new Error("Error deleting user");
    }
}

export async function getUserByEmail(email){
    try {
        const data = await User.findAll({where : { 
            email : email
        }})
        return data
    } catch (error) {
        throw new Error("Error getting email")
    }
}