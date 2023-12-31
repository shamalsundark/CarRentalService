
const jwt = require("jsonwebtoken");

module.exports = function varifyTocken(req,res,next){
    const auth = req.headers["authorization"];
    const token = auth && auth.split(" ")[1];

    if(!token){
        return res.status(403).json({error:"No token provided"});
    }
    jwt.verify(token,process.env.ADMIN_ACCESS_TOKEN_SECRET,(err,decode)=>{
        if(err){
            return res.status(401).json({error:"unauthorized"});
        }
           req.username = decode.username;
           next()
    })
}