import { Module } from '@nestjs/common';
import { UserServiceModule } from './user.service.module';
import { UserResolver } from './user.resolver';

@Module({
  imports: [UserServiceModule],
  providers: [UserResolver],
})
export class UserModule {}
