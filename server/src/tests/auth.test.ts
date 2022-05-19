import request from 'supertest';
import App from '@/app';
import { CreateUserDto } from '@dtos/users.dto';
import AuthRoute from '@routes/auth.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});
// Remove all it.skip when the tests work
describe('Testing Auth', () => {
  describe('[POST] /signup', () => {
    it.skip('response should have the Create userData', () => {
      const userData: CreateUserDto = {
        email: 'example@email.com',
        password: 'password',
      };
      const authRoute = new AuthRoute();
      const app = new App([authRoute]);

      return request(app.getServer()).post('/signup').send(userData);
    });
  });

  describe('[POST] /login', () => {
    // Skip this until authentication is implemented
    it.skip('response should have the Set-Cookie header with the Authorization token', async () => {
      const userData: CreateUserDto = {
        email: 'example1@email.com',
        password: 'password',
      };

      const authRoute = new AuthRoute();
      const app = new App([authRoute]);

      return request(app.getServer())
        .post('/login')
        .send(userData)
        .expect('Set-Cookie', /^Authorization=.+/);
    });
  });

  describe('[POST] /logout', () => {
    it.skip('logout Set-Cookie Authorization=; Max-age=0', () => {
      const authRoute = new AuthRoute();
      const app = new App([authRoute]);

      return request(app.getServer())
        .post('/logout')
        .expect('Set-Cookie', /^Authorization=\;/);
    });
  });
});
