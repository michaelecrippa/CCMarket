import { IsString } from 'class-validator';
import { LoginUserDTO } from './loginUser.dto';

export class CreateUserDTO extends LoginUserDTO {
  @IsString()
  public userName: string;

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
