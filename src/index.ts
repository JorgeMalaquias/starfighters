import express from "express";
import "express-async-errors";
import cors from 'cors';
import routes from "./routes/index";

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(5000,()=>{
    console.log('working on port 5000');
})