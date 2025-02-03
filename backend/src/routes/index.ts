import { FastifyInstance } from "fastify";
import { eventRoutes } from "./events-routes";
import { userRoutes } from "./user-routes";
import { authRoutes } from "./auth-routes";

export async function registerRoutes(fastify: FastifyInstance) {
    await fastify.register(eventRoutes);
    await fastify.register(userRoutes);
    await fastify.register(authRoutes);
};