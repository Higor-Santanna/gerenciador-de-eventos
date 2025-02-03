import { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";

const authMiddleware = async (request: FastifyRequest, reply: FastifyReply) => {
    const authHeader = request.headers.authorization;

    if(!authHeader){
        return reply.status(401).send({ error: "Token não fornecido" });
    }

    const [, token] = authHeader.split(" ");

    try {
        const decoded = jwt.verify(token,  process.env.JWT_SECRET as string) as { id: string; email: string };
        request.user = decoded;
    } catch (err) {
        return reply.status(401).send({ error: "Token inválido" });
    }
};

export { authMiddleware }