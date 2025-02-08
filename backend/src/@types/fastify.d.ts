//expande a tipagem do FastifyRequest para incluir um usuário autenticado.
import { FastifyRequest } from "fastify";

declare module "fastify" {
  interface FastifyRequest {
    user?: {
      id: string;
      email: string;
    };
  }
};