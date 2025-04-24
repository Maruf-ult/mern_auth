import jwt from 'jsonwebtoken';

const userAuth = async (req,res,next)=>{
   
     const {token} = req.cookies;
     console.log(token)

     if(!token){
          return res.json({success:false,message:"Not authorized login again"})
     }
     try {

         const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);
         console.log(tokenDecode.id)
         if(tokenDecode.id){
          req.userId = tokenDecode.id;
          console.log(req.userId);
         } else{
          return res.json({success:false,message:"Not authorized. login agian"})
         }

         next();

     } catch (error) {
          return res.json({success:false,message:error.message})
     }
}

export default userAuth;