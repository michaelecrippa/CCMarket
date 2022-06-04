import { UserInput } from '@/services/users.service';
import { ValidationError } from '../exceptions/ValidationException';
import userModel from '@models/users.model';

export class RegistrationValidator {
  constructor(private user: UserInput) {}

  validate() {
    this.validateInput();
    this.validateEmailUniqueness();
  }

  private validateInput() {
    if (this.user.name.length > 255) {
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

    if (this.user.password != this.user.confirmPassword) {
      throw new ValidationError('password', 'Password must match confirmation!');
    }

    if (!this.user.password.match(/^(?=.*\d).{4,12}$/)) {
      throw new ValidationError('password', 'Password must be between 4 and 12 characters and contain a digit!');
    }
  }

  private async validateEmailUniqueness() {
    const matchingEmail = userModel.find(user => user.email == this.user.name);

    if (matchingEmail) {
      throw new ValidationError('email', 'Email is already in use!');
    }
  }
}
