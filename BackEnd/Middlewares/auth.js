import jwt from 'jsonwebtoken';

export const userAuth = async (req, res, next) => {
    const token = req.cookies.token;
    console.log(token);
    if(!token){
        return res.json("Token not available");
    }
    jwt.verify(token,process.env.SECRET,(err,user)=>{
        if(err){
            return res.json("Invalid Token");
        }
        req.user = user;
        next();
    })
}