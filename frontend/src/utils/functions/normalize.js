const NormalizeText = (text) => text
  .normalize("NFD") // Normaliza el texto
  .replace(/[\u0300-\u036f]/g, "") // Elimina los acentos
  .toLowerCase(); // Convierte a minúsculas

export default NormalizeText