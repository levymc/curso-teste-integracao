import prisma from "../../src/database"
import { UserInput } from "repository";

export async function createUser (userData: UserInput) {
    return await prisma.user.create({
        data: userData
      });
}

export async function createManyUsers (userData: UserInput) {
    return await prisma.user.createMany({
        data: [{
          ...userData
        }, {
          ...userData, email: "teste2@teste.com.br"
        }]
      });
}