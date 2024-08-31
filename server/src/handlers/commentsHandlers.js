import {
  getComments,
  updateComment,
  createComment,
  deleteComment,
} from "../controllers/commentsControllers.js";

export async function handleGetAllComments(req, res) {
  try {
    const comments = await getComments();
    res.json({ ok: true, comments });
  } catch (error) {
    res.status(500).json({ ok: false, message: "Error getting comments" });
  }
}

export async function handleCreateComment(req, res) {
  const { userId, providerId, commentText } = req.body;

  try {
    const newComment = await createComment(userId, providerId, commentText);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function handleUpdateComment(req, res) {
  const { id } = req.params;
  const { userId, commentText } = req.body;

  try {
    const updatedComment = await updateComment(userId, id, commentText);
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function handleDeleteComment(req, res) {
  const { id } = req.params;

  try {
    const result = await deleteComment(id);
    res.status(200).json(result);
  } catch (error) {
    if (error.message === "Comment not found") {
      res.status(404).json({ error: error.message });
    } else {
      res.status(400).json({ error: error.message });
    }
  }
}
