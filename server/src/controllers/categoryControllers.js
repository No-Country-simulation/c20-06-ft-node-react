import { Category } from "../models/Category.js";

export async function getAll() {
    try {
        const data = await Category.findAll();
        return data
    } catch (error) {
        console.log(error);
        throw new Error("Error getting categories")
    }
}

export async function generateInitialCategories(){
    try {
        const data = await Category.bulkCreate([
            { name: 'Hogar' },
            { name: 'Jardín' },
            { name: 'Automotriz' },
            { name: 'Salud y Bienestar' },
            { name: 'Mascotas' },
            { name: 'Mudanzas' },
        ])
        return data;
    } catch (error) {
        throw new Error("Error generating categories")
    }
}