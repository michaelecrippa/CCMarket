import { RegistrationValidator } from '../../../validators/userRegistrationValidator';
import { ValidationError } from '../../../exceptions/ValidationException';
import { CreateUserDTO } from '../../../dtos/createUser.dto';

test('Validate undefined input throws', () => {
  const validator = new RegistrationValidator(undefined);
  expect(validator).toBeDefined();

  expect(() => validator.validate()).toThrowError(ValidationError);
});

test('Validate empty username throws', () => {
  const userInput = new CreateUserDTO();

  let validator = new RegistrationValidator(userInput);
  expect(validator).toBeDefined();

  expect(() => validator.validate()).toThrowError(ValidationError);
  userInput.userName = '';
  validator = new RegistrationValidator(userInput);
  expect(() => validator.validate()).toThrowError(ValidationError);
});

test('Validate empty email throws', () => {
  const userInput = new CreateUserDTO();
  userInput.userName = 'testUsername';

  let validator = new RegistrationValidator(userInput);
  expect(validator).toBeDefined();
  expect(() => validator.validate()).toThrowError(ValidationError);

  userInput.email = '';
  validator = new RegistrationValidator(userInput);
  expect(() => validator.validate()).toThrowError(ValidationError);
});

test('Validate empty password throws', () => {
  const userInput = new CreateUserDTO();
  userInput.userName = 'testUsername';
  userInput.email = 'email@email.com';

  let validator = new RegistrationValidator(userInput);
  expect(validator).toBeDefined();
  expect(() => validator.validate()).toThrowError(ValidationError);

  userInput.password = '';
  validator = new RegistrationValidator(userInput);
  expect(() => validator.validate()).toThrowError(ValidationError);
});

test('Validate too long username throws', () => {
  // eslint-disable-next-line prettier/prettier
  const tooLongUsername = 'lK82B8nKpLRpf4yBZppXfvcGu7Nhv7tIbvGetovbTXqGqaCUiQ4oY3CSgLq3DV1EXA2cbYe1TgvSISddQXu5THkIfAur5Q7XD849KGLnLHDB1qFRFPNLXkIKfo1fEFjaYjg1zorgmf5ap7DHjgltIEIJnSzKfRUzotDkJ4EERmnUK6tYBjWkky7VYgIlivdovJjeHCbvjajYkbXxfVL2mEvTHWMiYdw3RRZGdj7yCBvTG7bBNxmdebXpL47qvyOL';
  const userInput = <CreateUserDTO>{
    userName: tooLongUsername,
    email: 'email@email.com',
    password: 'somePassword',
  };

  const validator = new RegistrationValidator(userInput);
  expect(validator).toBeDefined();
  expect(() => validator.validate()).toThrowError(ValidationError);
});

test('Validate too long email throws', () => {
  // eslint-disable-next-line prettier/prettier
  const tooLongEmail = 'lK82B8n@KpLRpf4yBZppX.fvcGu7Nhv7tIbvGetovbTXqGqaCUiQ4oY3CSgLq3DV1EXA2cbYe1TgvSISddQXu5THkIfAur5Q7XD849KGLnLHDB1qFRFPNLXkIKfo1fEFjaYjg1zorgmf5ap7DHjgltIEIJnSzKfRUzotDkJ4EERmnUK6tYBjWkky7VYgIlivdovJjeHCbvjajYkbXxfVL2mEvTHWMiYdw3RRZGdj7yCBvTG7bBNxmdebXpL47qvyOL';
  const userInput = <CreateUserDTO>{
    userName: 'username',
    email: tooLongEmail,
    password: 'somePassword',
  };

  const validator = new RegistrationValidator(userInput);
  expect(validator).toBeDefined();
  expect(() => validator.validate()).toThrowError(ValidationError);
});

test('Validate invalid password throws', () => {
  // eslint-disable-next-line prettier/prettier
  const tooLongPassword = 'lK82B8nKpLRpf4yBZppXfvcGu7Nhv7tIbvGetovbTXqGqaCUiQ4oY3CSgLq3DV1EXA2cbYe1TgvSISddQXu5THkIfAur5Q7XD849KGLnLHDB1qFRFPNLXkIKfo1fEFjaYjg1zorgmf5ap7DHjgltIEIJnSzKfRUzotDkJ4EERmnUK6tYBjWkky7VYgIlivdovJjeHCbvjajYkbXxfVL2mEvTHWMiYdw3RRZGdj7yCBvTG7bBNxmdebXpL47qvyOL';
  const userInput = <CreateUserDTO>{
    userName: 'username',
    email: 'email@emai.com',
    password: tooLongPassword,
  };

  let validator = new RegistrationValidator(userInput);
  expect(validator).toBeDefined();
  expect(() => validator.validate()).toThrowError(ValidationError);

  const tooShortPassword = 'abc';
  userInput.password = tooShortPassword;

  validator = new RegistrationValidator(userInput);
  expect(() => validator.validate()).toThrowError(ValidationError);

  const passwordWithoutADigit = 'abcdepass';
  userInput.password = passwordWithoutADigit;

  validator = new RegistrationValidator(userInput);
  expect(() => validator.validate()).toThrowError(ValidationError);
});

//TODO
//test('Validate email already in use throws', () => {})
