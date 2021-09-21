import { Injectable } from '@nestjs/common';
import { UserModel } from '../models';
import { User } from './user.type';
import {
  createOneAsync,
  deleteByIdAsync,
  findOneAsync,
  updateByIdAsync,
} from 'typeorm-event-functions';
import { CreateUserInput, UpdateUserInput } from '../graphQLTypeDefinitions';

@Injectable()
export class UserDataService {
  private readonly baseValues = {
    target: UserModel.User,
    createFromModel: User.createFromModel,
  };

  public createUserAsync(user: CreateUserInput): Promise<User> {
    const model = new this.baseValues.target();
    model.name = user.name;
    model.email = user.email;
    model.phoneNumber = user.phoneNumber;

    return createOneAsync({
      ...this.baseValues,
      elementToCreate: User.createFromModel(model).toModel(),
    });
  }

  public deleteUserAsync(userId: string) {
    return deleteByIdAsync({
      ...this.baseValues,
      id: userId,
    });
  }

  public getUserById(userId: string) {
    return findOneAsync({
      ...this.baseValues,
      condition: { id: userId },
    });
  }

  public updateUserAsync(user: UpdateUserInput) {
    const model = new this.baseValues.target();
    if (user.name) model.name = user.name;
    if (user.email) model.email = user.email;
    if (user.phoneNumber) model.phoneNumber = user.phoneNumber;

    return updateByIdAsync({
      ...this.baseValues,
      elementToUpdate: User.createFromModel(model).toModel(),
      id: user.id,
    });
  }
}
