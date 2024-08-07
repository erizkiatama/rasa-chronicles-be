import { Controller, Get } from '@nestjs/common';
import { GetAllUsersResponseDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  getAllUsers(): Promise<GetAllUsersResponseDto> {
    return this.userService.findAll();
  }
}
