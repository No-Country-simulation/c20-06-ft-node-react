

export function verifyRole (allowedRoles){
    return (req, res ,next ) => {
        const role = req.user.role;
        if(!role) return res.status(403).json({ ok : false, message: 'Acces denied, you dont have permissions!'})
        if(allowedRoles.includes(role)){
            next()
        }else{
            return res.status(403).json({ ok : false, message : 'Acces denied, you dont have permissions!'})
        }
    }
}

export function verifyOwnerAccount(req, res, next){
    const {id} = req.params
    const role = req.user.role;
    console.log(id, req.user.id);
    if(id == req.user.id || role == 'admin') {
        return next()
    } else{
         return res.json({ ok : false, message : 'This id does not belong to your account'})
    }
}