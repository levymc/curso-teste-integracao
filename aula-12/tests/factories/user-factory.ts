import prisma from "../../src/database";
import { UserInput } from "../../src/repository";
import { faker } from '@faker-js/faker'

export async function buildUser() {
  const userData: UserInput = buildRandomUser();

  const user = await prisma.user.create({ data: userData });
  return user;
}

export function buildRandomUser(): UserInput{
  return {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
}