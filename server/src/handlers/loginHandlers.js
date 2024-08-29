export async function loginHandlers(req, res) {
  try {
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
