import { Comment } from "../models/Comments.js";
import { ServiceProvider } from "../models/ServiceProviders.js";
import { User } from "../models/User.js";
// import { ServiceProvider } from "../models/serviceProviders.js";


export async function getComments(){
    try {
        const comments = await Comment.findAll();
        console.log(comments);
        return comments;
        
    } catch (error) {
        console.log(error.message);
        throw new Error ("Error al obtener comentarios");
        
    }
}


export async function updateComment(userId, commentId, newCommentText) {
    try {
      const comment = await Comment.findOne({ where: { id: commentId } });
  
      if (!comment) {
        throw new Error('Comentario no encontrado');
      }
  
      if (comment.userId !== userId) {
        throw new Error('Usuario no autorizado');
      }
  
      comment.comment = newCommentText;
      await comment.save();
  
      return comment;
    } catch (error) {
      throw new Error(error.message);
    }
  }





  export async function createComment(userId, providerId, commentText) {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error('Usuario no encontrado');
      }
  
      const serviceProvider = await ServiceProvider.findByPk(providerId);
      if (!serviceProvider) {
        throw new Error('Service Provider no encontrado');
      }
  
      const newComment = await Comment.create({
        comment: commentText,
        userId: userId,
        providerId: providerId
      });
  
      return newComment;
    } catch (error) {
      throw new Error(error.message);
    }
  }




  export async function deleteComment(commentId) {
    try {
      // Encontrar el comentario por su ID
      const comment = await Comment.findOne({ where: { id: commentId } });
  
      if (!comment) {
        throw new Error('El comentario no existe');
      }
  
      // Eliminar el comentario
      await comment.destroy();
  
      return { message: 'Comentario eliminado' };
    } catch (error) {
      throw new Error(error.message);
    }
  }
  