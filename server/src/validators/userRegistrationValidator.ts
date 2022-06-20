import { ValidationError } from '../exceptions/ValidationException';
import { CreateUserDTO } from '@/dtos/createUser.dto';

import UserService from '@/services/users.service';

import { isEmpty, isNil } from 'lodash';

export class RegistrationValidator {
  private readonly userService: UserService;
  constructor(private user: CreateUserDTO) {
    this.userService = new UserService();
  }

  validate() {
    this.validateInput();
    this.validateEmailUniqueness();
  }

  private validateInput() {
    if (isNil(this.user)) {
      throw new ValidationError('user', 'Invalid signup data provided!');
    }

    if (isEmpty(this.user.userName)) {
      throw new ValidationError('userName', 'Username cannot be emtpy!');
    }

    if (isEmpty(this.user.email)) {
      throw new ValidationError('email', 'Email cannot be emtpy!');
    }

    if (isEmpty(this.user.password)) {
      throw new ValidationError('password', 'Password cannot be emtpy');
    }

    if (this.user.userName.length > 255) {
      throw new ValidationError('name', 'Username must be shorter than 256 characters!');
    }

    if (this.user.email.length > 255) {
      throw new ValidationError('email', 'Email must be shorter than 256 characters!');
    }

    const emailRegexPattern =
      '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';
    if (!this.user.email.match(emailRegexPattern)) {
      throw new ValidationError('email', 'Email must be in xxxx@xxx.xxx format');
    }

    if (!this.user.password.match(/^(?=.*\d).{4,12}$/)) {
      throw new ValidationError('password', 'Password must be between 4 and 12 characters and contain a digit!');
    }
  }

  private async validateEmailUniqueness() {
    const emailAlreadyInUse = await this.userService.getUser(this.user.email);

    if (emailAlreadyInUse) {
      throw new ValidationError('email', 'Email is already in use!');
    }
  }
}
