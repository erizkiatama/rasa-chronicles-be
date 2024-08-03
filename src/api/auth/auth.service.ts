import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}

  login(username: string, password: string) {
    if (
      username !== this.configService.get('admin.username') ||
      password !== this.configService.get('admin.password')
    ) {
      throw new UnauthorizedException('username or password is incorrect');
    }

    return { msg: 'success' };
  }
}
