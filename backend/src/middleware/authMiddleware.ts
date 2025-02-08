import { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";

//Responsável por autenticar o usuário
const authMiddleware = async (request: FastifyRequest, reply: FastifyReply) => {
    const authHeader = request.headers.authorization; //obtém o cabeçalho Authorization, onde o token JWT é enviado.

    if(!authHeader){
        return reply.status(401).send({ error: "Token não fornecido" });
    }

    const [, token] = authHeader.split(" "); //separa Bearer do token.

    try {
        const decoded = jwt.verify(token,  process.env.JWT_SECRET as string) as { id: string; email: string }; //Decodifica e verifica o token, se for válido retorna os dados do usuário
        request.user = decoded;
    } catch (err) {
        return reply.status(401).send({ error: "Token inválido" });
    }
};

export { authMiddleware }