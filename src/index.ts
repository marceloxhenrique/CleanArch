import { Elysia } from "elysia";
import MemoryUserRepository from "./external/memory/MemoryUserRepository";
import RegisterUser from "./core/user/service/RegisterUser";
import RegisterUserController from "./adapters/RegisterUserController";

const app = new Elysia();

// routes register
const repositoryUser = new MemoryUserRepository();
const registerUser = new RegisterUser(repositoryUser);
new RegisterUserController(app, registerUser);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
