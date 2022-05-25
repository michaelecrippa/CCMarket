import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  public userName: string;

  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  //could be integer mapped to static column in the database
  @IsString()
  public sex: string;

  //could be integer mapped to static column in the database
  @IsString()
  public nationality: string;
}
