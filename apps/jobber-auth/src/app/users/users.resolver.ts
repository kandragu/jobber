import { Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.models';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  async getUsers() {
    //todo
  }
}
