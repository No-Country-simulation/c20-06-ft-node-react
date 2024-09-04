import { Category } from "../models/Category.js";
import { Service } from "../models/Services.js";

export async function createService(title, description, category) {
  const service = await Service.findOne({ where: { title } });
  if (service) {
    throw new Error(`El servicio con título ${title} ya existe`);
  }

  const newService = await Service.create({
    title,
    description,
    category,
  });

  return newService;
}

export async function getAllServices() {
  const services = await Service.findAll({include : [{ model :Category, as : 'category'}]});
  return services;
}

export async function getServiceById(id) {
  const service = await Service.findByPk(id, {include : [{ model :Category, as : 'category'}]});
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

export async function generateBasicServices() {
  try {
    const homeCategory = await Category.findOne({ where: { name: 'Hogar' } });
    const gardenCategory = await Category.findOne({ where: { name: 'Jardín' } });
    const automotiveCategory = await Category.findOne({ where: { name: 'Automotriz' } });
    const healthCategory = await Category.findOne({ where: { name: 'Salud y Bienestar' } });

    if (!homeCategory || !gardenCategory || !automotiveCategory || !healthCategory) {
      throw new Error('Una o más categorías no se encontraron.');
    }

    await Service.bulkCreate([
      { title: 'Plomería', description: 'Servicio de plomería para reparar y mantener tuberías.', categoryId: homeCategory.id },
      { title: 'Carpintería', description: 'Servicios de carpintería para muebles y estructuras de madera.', categoryId: homeCategory.id },
      { title: 'Electricidad', description: 'Instalación y reparación de sistemas eléctricos.', categoryId: homeCategory.id },
      { title: 'Pintura', description: 'Pintura de interiores y exteriores.', categoryId: homeCategory.id },
      { title: 'Limpieza', description: 'Servicios de limpieza general y especializada.', categoryId: homeCategory.id },
      { title: 'Cerradura', description: 'Reparación e instalación de cerraduras y sistemas de seguridad.', categoryId: homeCategory.id },
      { title: 'Fontanero', description: 'Reparación y mantenimiento de sistemas de fontanería.', categoryId: homeCategory.id },
      { title: 'Techista', description: 'Instalación y reparación de techos.', categoryId: homeCategory.id },
      { title: 'Gasista', description: 'Servicios de instalación y mantenimiento de sistemas de gas.', categoryId: homeCategory.id },
      { title: 'Albañil', description: 'Construcción y reparación de estructuras de ladrillo y piedra.', categoryId: homeCategory.id },
      { title: 'Decoración', description: 'Servicios de decoración para interiores y exteriores.', categoryId: homeCategory.id },
      { title: 'Aberturas', description: 'Instalación y reparación de ventanas y puertas.', categoryId: homeCategory.id },
      { title: 'Durlock', description: 'Instalación y reparación de paneles de durlock.', categoryId: homeCategory.id },
    ]);

    await Service.bulkCreate([
      { title: 'Cortador de pasto', description: 'Servicio de corte de césped y mantenimiento de jardines.', categoryId: gardenCategory.id },
      { title: 'Poda de árboles', description: 'Poda y mantenimiento de árboles y arbustos.', categoryId: gardenCategory.id },
      { title: 'Instalación de riegos', description: 'Instalación de sistemas de riego para jardines y áreas verdes.', categoryId: gardenCategory.id },
      { title: 'Mantenimiento de piletas', description: 'Limpieza y mantenimiento de piscinas.', categoryId: gardenCategory.id },
    ]);

    await Service.bulkCreate([
      { title : 'Servicio completo', description: 'Servicio de mantenimiento general para vehículos.', categoryId: automotiveCategory.id },
      { title : 'Frenos', description: 'Reparación y mantenimiento del sistema de frenos.', categoryId: automotiveCategory.id },
      { title : 'Cambio de aceites', description: 'Cambio de aceite y filtros para vehículos.', categoryId: automotiveCategory.id },
      { title : 'Tapicero', description: 'Reparación y mantenimiento de tapicería de vehículos.', categoryId: automotiveCategory.id },
      { title : 'Auxilio mecánico', description: 'Asistencia mecánica en carretera.', categoryId: automotiveCategory.id },
    ]);

    await Service.bulkCreate([
      { title: 'Peluquería', description: 'Cortes de cabello y servicios de peluquería.', categoryId: healthCategory.id },
      { title: 'Masajes', description: 'Masajes relajantes y terapéuticos.', categoryId: healthCategory.id },
      { title: 'Manicura', description: 'Servicios de manicura y cuidado de uñas.', categoryId: healthCategory.id },
      { title: 'Pedicura', description: 'Servicios de pedicura y cuidado de pies.', categoryId: healthCategory.id },
      { title: 'Kinesiología', description: 'Tratamientos de kinesiología y rehabilitación.', categoryId: healthCategory.id },
    ]);

    return true;
  } catch (error) {
    console.log(error);
    throw new Error("Error generating servcices!")
  }
}