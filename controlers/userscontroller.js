import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import { response } from 'express';

let users = import("../users.json");

export const getUsers = (req,res) => {
    
    res.send(users); 
}

export const createUser = (req,res) =>{

    const user = req.body;
    users.push({...user, id: uuidv4() });
        
    res.send(`User with firstname ${user.firstName} has been added to the database`);
};

export const getUser = (req,res) =>{

    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);

}

export const deleteUser = (req,res) => {
const { id } = req.params;

users = users.filter((user) => user.id != id );
res.send(`User with ID ${id} has been deleted from the database`);

};

export const updateUser = (req,res) => {

    const { id } = req.params;
    const { firstName , lastName , age } = req.body;
    
    const user = users.find((user) => user.id == id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    res.send(`the user with id ${id} has been updated`);
    
 
};

export const checkToken = (req,res,next) =>{

    const token = req.headers["x-access-token"];
    if (token){
        jwt.verify(token,"bigSecret",(err,decoded) =>{
            if (err){
                res.status(401).json({message: "Access denied"});
                return;
            } else {
                req.userID = decoded.userID;
            }
        })
    }else{
        res.status(401).json({message: "Access denied"});
    }
    next();
    
}


