import { UserModel } from '../domain/user/userModel';
import { UserData } from '../domain/data';

export interface IUpdate extends UserModel {
  user: UserModel;
  name: string;
}

export const updateName = (params: IUpdate) => {
  const {user, name} = params;
  if (typeof name !== typeof '') {
    throw new Error('Name should be a string');
  }
  return UserData({
    ...user,
    name,
  });
};

