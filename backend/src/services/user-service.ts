import prismaClient from "../prisma";
import { UserType } from "../types/types";
import bcrypt from "bcryptjs";

class GetUserService {
    async execute(){
        const getUser = await prismaClient.users.findMany();
        return getUser;
    }
};

class CreateUserService{
    async execute({nameUser, email, password}: UserType){
        if(!nameUser || !email || !password){
            throw new Error("Preencha todos os campos")
        };

        const userExists = await prismaClient.users.findUnique({
            where: { email }
        });

        if (userExists) {
            throw new Error("E-mail já cadastrado!");
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await prismaClient.users.create({
            data: {
                nameUser,
                email,
                password: hashPassword
            }
        });
        
        return user
    }
}

export { GetUserService, CreateUserService }