import { Module } from '@nestjs/common';
import { UserDataService } from './user.dataservice';

@Module({
  providers: [UserDataService],
  exports: [UserDataService],
})
export class UserServiceModule {}
