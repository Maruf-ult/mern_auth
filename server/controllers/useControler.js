import userModel from "../models/userModel.js";

export const getUserData  = async  (req,res) =>{

     try {
          const { userId } = req;
          if(!userId){
               return res.json({success:false,message:'userId is required'})
              }
          
          const user = await userModel.findById(userId);
          if(!user){
               return res.json({success:false,message:'user not found'})
          }

     return res.json({
          success:true,
          userData:{
               name: user.name,
               isAccountverified: user.isAccountverified
          }
     })

     } catch (error) {
          console.error("Error fetching user data:", error);

          return res.json({success:false,message:error.message})
     }
}