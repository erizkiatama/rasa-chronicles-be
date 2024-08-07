export class GetAllUsersResponseDto {
  users: UserResponseDto[];
}

export class UserResponseDto {
  id: number;
  name: string;
  nickname: string;
  photo: string;
  shortBio: string;
  description: string;
  instagramLink: string;
  facebookLink: string;
  twitterLink: string;
}
