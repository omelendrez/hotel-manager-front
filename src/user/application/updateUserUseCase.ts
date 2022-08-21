import type { UserModel } from "../domain/user/userModel";
import type { IUpdate } from "./behaviors";
import { updateName } from "./behaviors";

interface IHandler {
  save: (data: UserModel) => void;
}

export const updateNameHandler =
  (handler: IHandler) =>
    async (data: IUpdate) => {
      const newUserData: UserModel = updateName(data);
      await handler.save(newUserData);
    };
