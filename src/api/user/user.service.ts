import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { GetAllUsersResponseDto, UserResponseDto } from './user.dto';

import { PrismaService } from '../../pkg/database/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<GetAllUsersResponseDto> {
    const users: User[] = await this.prisma.user.findMany();

    const response = new GetAllUsersResponseDto();
    response.users = users.map((user: User) => {
      const userDto = new UserResponseDto();
      userDto.id = user.id;
      userDto.name = user.name;
      userDto.nickname = user.nickname;
      userDto.photo = user.photo;
      userDto.shortBio = user.short_bio;
      userDto.description = user.description;
      userDto.instagramLink = user.instagram_link;
      userDto.facebookLink = user.facebook_link;
      userDto.twitterLink = user.twitter_link;

      return userDto;
    });

    return response;
  }
}
