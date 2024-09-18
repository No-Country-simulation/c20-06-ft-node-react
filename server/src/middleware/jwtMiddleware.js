import jwt from 'jsonwebtoken';

export const VerifyToken = async (req, res, next) => {
    const { token } = req.cookies;
    if(!token) return res.status(401).json({ok : false, message : 'Token not provided'});

    const data = jwt.verify(token, "SECRET-WORD");
    req.user = data;
    next()
} 

