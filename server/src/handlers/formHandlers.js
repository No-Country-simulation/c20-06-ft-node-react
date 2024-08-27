export async function formHandlers(req, res) {
  try {
    res.status(200).json(`hola formulario`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
