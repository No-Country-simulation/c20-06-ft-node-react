import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
  generateBasicServices,
} from "../controllers/servicesControllers.js";

export async function createServiceHandler(req, res) {
  try {
    const { title, description, category } = req.body;
    const newService = await createService(title, description, category);
    res.status(201).json(newService);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getAllServicesHandler(req, res) {
  try {
    const services = await getAllServices();
    res.status(200).json({ok : true, services});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getServiceByIdHandler(req, res) {
  try {
    const { id } = req.params;
    const service = await getServiceById(id);
    res.status(200).json(service);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

export async function updateServiceHandler(req, res) {
  try {
    const { id } = req.params;
    const { title, description, price, category } = req.body;
    const updatedService = await updateService(
      id,
      title,
      description,
      price,
      category
    );
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteServiceHandler(req, res) {
  try {
    const { id } = req.params;
    const result = await deleteService(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

export async function generateServices(req, res){
  try {
    const data = await generateBasicServices();
    if(data){
      return res.json({ ok : true, message : "Services generated sucesfully"});
    }
  } catch (error) {
    // console.log(error);
    return res.json({ ok : false, message : 'Error '})
  }
}