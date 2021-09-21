import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateUserInput, UpdateUserInput } from '../graphQLTypeDefinitions';
import { UserDataService } from './user.dataservice';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userDataService: UserDataService) {}

  @Query()
  public async user(@Args('id') id: string) {
    return (await this.userDataService.getUserById(id)).valueOrNull();
  }

  @Mutation()
  public createUser(@Args('input') input: CreateUserInput) {
    return this.userDataService.createUserAsync(input);
  }

  @Mutation()
  public async updateUser(@Args('input') input: UpdateUserInput) {
    return (await this.userDataService.updateUserAsync(input)).valueOrNull();
  }

  @Mutation()
  public async deleteUser(@Args('id') id: string) {
    return (await this.userDataService.deleteUserAsync(id)).valueOrNull();
  }
}
