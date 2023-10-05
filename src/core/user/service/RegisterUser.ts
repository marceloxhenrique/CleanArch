import UseCase from "../../shared/UseCase";
import UserCollection from "./UserCollection";
type Enter = {
  name: string;
  email: string;
  password: string;
};

export default class RegisterUser implements UseCase<Enter, void> {
  constructor(private readonly repository: UserCollection) {}

  async execute(data: Enter): Promise<void> {
    const { name, email, password } = data;

    const UserExist = await this.repository.getByEmail(email);
    if (UserExist) {
      throw new Error("User already exist");
    }

    await this.repository.create({ name, email, password });
  }
}
