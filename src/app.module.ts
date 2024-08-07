import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './api/auth/auth.module';

import { devConfigs, prodConfigs } from './pkg/config';
import { UserModule } from './api/user/user.module';
import { PrismaModule } from './pkg/database/prisma.module';

const config = process.env.NODE_ENV === 'production' ? prodConfigs : devConfigs;

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [...config],
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
