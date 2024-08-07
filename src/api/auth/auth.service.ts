import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { AuthResponseDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private config: ConfigService,
    private jwt: JwtService,
  ) {}

  async login(username: string, password: string): Promise<AuthResponseDto> {
    if (username !== this.config.get('admin.username') || password !== this.config.get('admin.password')) {
      throw new UnauthorizedException('username or password is incorrect');
    }

    const response = new AuthResponseDto();
    response.accessToken = await this.signToken();

    return response;
  }

  async signToken(): Promise<string> {
    return this.jwt.signAsync(
      {
        sub: 'super-admin',
        verified: true,
      },
      {
        expiresIn: this.config.get('app.jwt.expiryTime'),
        secret: this.config.get('app.jwt.secret'),
      },
    );
  }
}
