import { Response, Request } from "express";
import { gettingRank } from "../repositories/usersRepo";
import { checkingUsers } from "../services/usersServices";

export async function makingTheBattle(req:Request, res:Response){
    const battle = await checkingUsers(req.body.firstUser,req.body.fecondUser);
    res.send(battle);
}

export async function ranking(req:Request, res:Response){
    const rank = await gettingRank();
    res.send(rank);
}