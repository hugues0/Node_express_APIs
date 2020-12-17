
import jwt from 'jsonwebtoken';
const users = import("../users.json");



export const auth = (req,res) => {

    const user = users.find(usr => usr.username === req.body.username);
    if (user){
        if(user.password === req.body.password){
            const token = jwt.sign({userID: user.id},"bigSecret");
            res.status(200).json({token})
        }else{
        res.status(401).json({message:"Access denied"});
        }
    } else{
        res.status(401).json({message: "Access denied"});
    }
    

}; 

