import Elysia from "elysia";
import RegisterUser from "../core/user/service/RegisterUser";

export default class RegisterUserController {
  constructor(readonly server: Elysia, readonly useCase: RegisterUser) {
    server.post("/user", async ({ body }) => {
      const { name, email, password } = body as any;
      await useCase.execute({ name, email, password });
      return {
        status: 200,
        body: {
          message: "User create",
        },
      };
    });
  }
}
