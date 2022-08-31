import usersSchema from "../schemas/usersPlayersValidation";
import { Response, Request } from "express";


export function validatingUsers(req:Request,res:Response, next){
    const validatingUsers = usersSchema.validate(req.body);
    if(!validatingUsers){
        throw('invalid format');
    }
    next();
}