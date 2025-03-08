import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.models';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
// import { UseGuards } from '@nestjs/common';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }

  //   @UseGuards(GqlAuthGuard)
  @Query(() => [User], { name: 'users' })
  async getUsers() {
    return this.usersService.getUsers();
  }
}
