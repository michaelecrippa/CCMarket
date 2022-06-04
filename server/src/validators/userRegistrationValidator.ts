import { ValidationError } from '../exceptions/ValidationException';
import { user as UserModel } from '../database/models/User';
import { CreateUserDTO } from '@/dtos/create-user.dto';

import { isNil } from 'lodash';

export class RegistrationValidator {
  constructor(private user: CreateUserDTO) {}

  validate() {
    this.validateInput();
    this.validateEmailUniqueness();
  }

  private validateInput() {
    if (isNil(this.user)) throw new ValidationError('user', 'Invalid signup data provided!');

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
    const emailAlreadyInUse = await UserModel.findOne({ where: { email: this.user.email } });

    if (emailAlreadyInUse) {
      throw new ValidationError('email', 'Email is already in use!');
    }
  }
}