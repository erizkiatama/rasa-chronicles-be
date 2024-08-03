import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { devConfigs } from './pkg/config/config.dev';
import { prodConfigs } from './pkg/config/config.prod';
import { AuthModule } from './api/auth/auth.module';

const config = process.env.NODE_ENV === 'production' ? prodConfigs : devConfigs;

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [...config],
      isGlobal: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
