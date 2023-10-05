export default interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  createIn?: Date;
  updatedIn?: Date;
}
