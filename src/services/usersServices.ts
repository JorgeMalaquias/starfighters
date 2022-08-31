import axios from "axios";
import { drawner, loser, registering, winner } from "../repositories/usersRepo";

export async function checkingUsers(firstUser: string, secondUser: string) {
    const response = await axios.get(`https://api.github.com/users/${firstUser}/repos`);
    if (response.data.message) {
        throw (' 1st user not founded');
    }
    const response2 = await axios.get(`https://api.github.com/users/${secondUser}/repos`);
    if (response2.data.message) {
        throw ('2nd user not founded');
    }
    registering(firstUser,secondUser);
    let userOneStars: number = 0;
    let userTwoStars: number = 0;
    for (let i: number = 0; i < response.data.length; i++) {
        userOneStars += response.data[i].stargazers_count;
    }
    for (let i: number = 0; i < response2.data.length; i++) {
        userTwoStars += response2.data[i].stargazers_count;
    }
    if (userOneStars > userTwoStars) {
        winner(firstUser);
        loser(secondUser);
        return ({
            winner: firstUser,
            loser: secondUser,
            draw: false
        })
    }
    if (userOneStars < userTwoStars) {
        loser(firstUser);
        winner(secondUser);
        return ({
            winner: secondUser,
            loser: firstUser,
            draw: false
        })
    }
    if (userOneStars === userTwoStars) {
        drawner(firstUser);
        drawner(secondUser);
        return ({
            winner: null,
            loser: null,
            draw: true
        })
    }
}

