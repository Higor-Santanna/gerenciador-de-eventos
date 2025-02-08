import Fastify from "fastify";
import cors from "@fastify/cors"; //plugin @fastify/cors para permitir requisições de diferentes origens
import dotenv from "dotenv";
import { registerRoutes } from "./routes/index";

dotenv.config()
const app = Fastify({ logger: true })//Cria a aplicação Fastify.

const start = async () => {

    await app.register(cors);
    await registerRoutes(app);
    try{
        await app.listen({port: 3001})
    } catch(error){
        process.exit(1)
    };
};

start();