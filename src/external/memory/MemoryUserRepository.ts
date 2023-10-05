import User from "../../core/user/model/User";
import UserCollection from "../../core/user/service/UserCollection";

export default class MemoryUserRepository implements UserCollection {
  // constructor(private readonly users: User[]) {}
  private readonly users: User[] = [];

  async getByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) ?? null;
  }
  async create(user: User): Promise<User> {
    const newUser = { ...user, id: Math.random() };
    this.users.push(newUser);
    return newUser;
  }
}
