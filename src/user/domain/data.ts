import { UserModel } from "./user/userModel";

export const UserData = (userData: UserModel) =>
  Object.freeze(userData);
