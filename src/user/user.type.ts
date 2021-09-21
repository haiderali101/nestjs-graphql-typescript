import { UserModel } from '../models';
import { Optional, Some } from 'optional-typescript';
import { CreateUserInput, UpdateUserInput } from '../graphQLTypeDefinitions';

export class User {
  constructor(
    public readonly id: Optional<string>,
    public readonly name: Optional<string>,
    public readonly email: Optional<string>,
    public readonly phoneNumber: Optional<string>,
  ) {}

  public static createFromGraphQL(
    input: CreateUserInput | UpdateUserInput,
  ): User {
    return new User(
      Some((<UpdateUserInput>input).id),
      Some(input.name),
      Some(input.email),
      Some(input.phoneNumber),
    );
  }

  public static createFromModel(model: UserModel.User) {
    return new User(
      Some(model.id),
      Some(model.name),
      Some(model.email),
      Some(model.phoneNumber),
    );
  }

  public toModel(): UserModel.User {
    const model = new UserModel.User();

    if (this.id.hasValue) {
      model.id = this.id.valueOrFailure();
    }

    if (this.name.hasValue) {
      model.name = this.name.valueOrFailure();
    }

    if (this.email.hasValue) {
      model.email = this.email.valueOrFailure();
    }

    if (this.phoneNumber.hasValue) {
      model.phoneNumber = this.phoneNumber.valueOrFailure();
    }

    return model;
  }

  public toGraphQL() {
    return {
      id: this.id.valueOrFailure(),
      name: this.name.valueOrUndefined(),
      type: this.email.valueOrFailure(),
      eventId: this.phoneNumber.valueOrFailure(),
    };
  }
}
