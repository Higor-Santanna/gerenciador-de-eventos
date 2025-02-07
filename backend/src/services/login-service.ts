import prismaClient from "../prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserType } from "../types/types";

class LoginService {
    async execute({ email, password }: UserType) {
        if(!email || !password){
            throw new Error("Preencha todos os campos")
        };

        const user = await prismaClient.users.findUnique({
            where: { email }
        });

        if(!user){
            throw new Error("Usuário não encontrado")
        };

        const checkPassword =  await bcrypt.compare(password, user.password);

        if(!checkPassword){
            throw new Error("Senha incorreta")
        };

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET as string,
            { expiresIn: "1h" }
        );

        return { token, user } //alteração
    }
};

export { LoginService }