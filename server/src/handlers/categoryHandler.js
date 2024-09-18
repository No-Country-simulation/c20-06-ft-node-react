import { getAll, generateInitialCategories } from "../controllers/categoryControllers.js";


export async function getAllCategories(req, res) {
  try {
    const data = await getAll();
    console.log(data);
    return res.json({ ok: true, categories: data });
  } catch (error) {
    // console.log(error);
    return res.json({ ok: false, message: "Error getting categories" })
  }
}

export async function generateCategories(req, res) {
  try {
    const data = await generateInitialCategories();
    console.log(data);
    return res.json({ ok: true, message: 'Categories created succesfully!' });
  } catch (error) {
    return res.json({ ok: false, message: "Error generating categories" });
  }
}