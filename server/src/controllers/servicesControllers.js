import { Service } from "../models/Services.js";

export async function createService(title, description, price, category) {
  const service = await Service.findOne({ where: { title } });
  if (service) {
    throw new Error(`El servicio con título ${title} ya existe`);
  }

  const newService = await Service.create({
    title,
    description,
    price,
    category,
  });

  return newService;
}

export async function getAllServices() {
  const services = await Service.findAll();
  return services;
}

export async function getServiceById(id) {
  const service = await Service.findByPk(id);
  if (!service) {
    throw new Error(`No se encontró un servicio con el id ${id}`);
  }
  return service;
}

export async function updateService(id, title, description, price, category) {
  const service = await Service.findByPk(id);
  if (!service) {
    throw new Error(`No se encontró un servicio con el id ${id}`);
  }

  service.title = title || service.title;
  service.description = description || service.description;
  service.price = price || service.price;
  service.category = category || service.category;

  await service.update();
  return service;
}

export async function deleteService(id) {
  const service = await Service.findByPk(id);
  if (!service) {
    throw new Error(`No se encontró un servicio con el id ${id}`);
  }

  await service.destroy();
  return { message: `Servicio con id ${id} fue eliminado exitosamente` };
}
