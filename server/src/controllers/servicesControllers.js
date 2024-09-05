import { Category } from "../models/Category.js";
import { Service } from "../models/Services.js";

export async function createService(title, description, categories) {
  try {
    const service = await Service.findOne({ where: { title } });
    if (service) {
      throw new Error(`El servicio con título ${title} ya existe`);
    }
  
    const newService = await Service.create({
      title,
      description
    });
    const cats = await Category.findAll({where : { name : categories }})
    if(!cats || cats.length == 0) throw new Error("Name of categories invalid")
    newService.addCategories(cats);
    return newService;
  } catch (error) {
    throw new Error(" Error creating service")
  }
}

export async function getAllServices() {
  const services = await Service.findAll({include: {
    model: Category,
    as: 'categories', 
    attributes: ['name'],
  },
  attributes: ['id', 'title', 'description']});
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

    const homeServices = await Service.bulkCreate([
      { title: 'Plomería', description: 'Servicio de plomería para reparar y mantener tuberías.',  },
      { title: 'Carpintería', description: 'Servicios de carpintería para muebles y estructuras de madera.',  },
      { title: 'Electricidad', description: 'Instalación y reparación de sistemas eléctricos.',  },
      { title: 'Pintura', description: 'Pintura de interiores y exteriores.',  },
      { title: 'Limpieza', description: 'Servicios de limpieza general y especializada.',  },
      { title: 'Cerradura', description: 'Reparación e instalación de cerraduras y sistemas de seguridad.', },
      { title: 'Fontanero', description: 'Reparación y mantenimiento de sistemas de fontanería.',  },
      { title: 'Techista', description: 'Instalación y reparación de techos.',  },
      { title: 'Gasista', description: 'Servicios de instalación y mantenimiento de sistemas de gas.',  },
      { title: 'Albañil', description: 'Construcción y reparación de estructuras de ladrillo y piedra.',  },
      { title: 'Decoración', description: 'Servicios de decoración para interiores y exteriores.',  },
      { title: 'Aberturas', description: 'Instalación y reparación de ventanas y puertas.', },
      { title: 'Durlock', description: 'Instalación y reparación de paneles de durlock.',  },
    ]);
    await Promise.all(
      homeServices.map(async(ser) => {
        await ser.addCategory(homeCategory)
      }
    ))

    const garderServices =await Service.bulkCreate([
      { title: 'Cortador de pasto', description: 'Servicio de corte de césped y mantenimiento de jardines.' },
      { title: 'Poda de árboles', description: 'Poda y mantenimiento de árboles y arbustos.' },
      { title: 'Instalación de riegos', description: 'Instalación de sistemas de riego para jardines y áreas verdes.' },
      { title: 'Mantenimiento de piletas', description: 'Limpieza y mantenimiento de piscinas.' },
    ]);
    await Promise.all(
      garderServices.map(async (ser) => {
        await ser.addCategory(gardenCategory);
      })
    )


    const autoServices = await Service.bulkCreate([
      { title : 'Servicio completo', description: 'Servicio de mantenimiento general para vehículos.' },
      { title : 'Frenos', description: 'Reparación y mantenimiento del sistema de frenos.' },
      { title : 'Cambio de aceites', description: 'Cambio de aceite y filtros para vehículos.' },
      { title : 'Tapicero', description: 'Reparación y mantenimiento de tapicería de vehículos.' },
      { title : 'Auxilio mecánico', description: 'Asistencia mecánica en carretera.' },
    ]);
    await Promise.all(
      autoServices.map(async (ser) => {
        await ser.addCategory(automotiveCategory);
      })
    )

    const healthServices = await Service.bulkCreate([
      { title: 'Peluquería', description: 'Cortes de cabello y servicios de peluquería.', categoryId: healthCategory.id },
      { title: 'Masajes', description: 'Masajes relajantes y terapéuticos.', categoryId: healthCategory.id },
      { title: 'Manicura', description: 'Servicios de manicura y cuidado de uñas.', categoryId: healthCategory.id },
      { title: 'Pedicura', description: 'Servicios de pedicura y cuidado de pies.', categoryId: healthCategory.id },
      { title: 'Kinesiología', description: 'Tratamientos de kinesiología y rehabilitación.', categoryId: healthCategory.id },
    ]);
    await Promise.all(
      healthServices.map(async (ser) => {
        await ser.addCategory(healthCategory)
      })
    )

    return true;
  } catch (error) {
    console.log(error);
    throw new Error("Error generating servcices!")
  }
}