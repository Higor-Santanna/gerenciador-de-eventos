import "@fastify/jwt";
import { FastifyRequest } from "fastify";

declare module "fastify" {
  interface FastifyRequest {
    user?: {
      id: string;
      email: string;
    };
  }
}
