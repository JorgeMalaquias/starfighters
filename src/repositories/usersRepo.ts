import connection from "../database/database";


export async function registering(firstUser:string,secondUser:string) {
    const {rows:exist} = await connection.query(`SELECT * FROM fighters WHERE name = $1`,[firstUser]);
    if(exist.length===0){
        await connection.query(`INSERT INTO fighters (username,wins,losses,draws) VALUES ($1,0,0,0)`,[firstUser]);
    }
    const {rows:exist2} = await connection.query(`SELECT * FROM fighters WHERE name = $1`,[secondUser]);
    if(exist2.length===0){
        await connection.query(`INSERT INTO fighters (username,wins,losses,draws) VALUES ($1,0,0,0)`,[secondUser]);
    }
}

export async function winner(name:string){
    const {rows:user} = await connection.query(`SELECT * FROM fighters WHERE name = $1`,[name]);
    await connection.query(`UPDATE fighters SET wins=$1 WHERE name=$2`,[Number(user[0].wins)+1,name]);
}
export async function loser(name:string){
    const {rows:user} = await connection.query(`SELECT * FROM fighters WHERE name = $1`,[name]);
    await connection.query(`UPDATE fighters SET losses=$1 WHERE name=$2`,[Number(user[0].losses)+1,name]);
}
export async function drawner(name:string){
    const {rows:user} = await connection.query(`SELECT * FROM fighters WHERE name = $1`,[name]);
    await connection.query(`UPDATE fighters SET draws=$1 WHERE name=$2`,[Number(user[0].draws)+1,name]);
}

export async function gettingRank(){
    const {rows:users} = await connection.query(`SELECT * FROM fighters ORDER BY wins DESC`);
    return users;
}