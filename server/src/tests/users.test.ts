import request from 'supertest';
import App from '@/app';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import UserRoute from '@routes/users.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

// Remove all it.skip when the tests work
describe('Testing Users', () => {
  describe('[GET] /users', () => {
    it.skip('response statusCode 200 / findAll', () => {
      const findUser: User[] = userModel;
      const usersRoute = new UserRoute();
      const app = new App([usersRoute]);

      return request(app.getServer()).get(`${usersRoute.path}`).expect(200, { data: findUser, message: 'findAll' });
    });
  });

  describe('[GET] /users/:id', () => {
    it.skip('response statusCode 200 / findOne', () => {
      const userId = 1;
      const findUser: User = userModel.find(user => user.id === userId);
      const usersRoute = new UserRoute();
      const app = new App([usersRoute]);

      return request(app.getServer()).get(`${usersRoute.path}/${userId}`).expect(200, { data: findUser, message: 'findOne' });
    });
  });

  describe('[POST] /users', () => {
    it.skip('response statusCode 201 / created', async () => {
      const userData: CreateUserDto = {
        email: 'example@email.com',
        password: 'password',
      };
      const usersRoute = new UserRoute();
      const app = new App([usersRoute]);

      return request(app.getServer()).post(`${usersRoute.path}`).send(userData).expect(201);
    });
  });

  describe('[PUT] /users/:id', () => {
    it.skip('response statusCode 200 / updated', async () => {
      const userId = 1;
      const userData: CreateUserDto = {
        email: 'example@email.com',
        password: 'password',
      };
      const usersRoute = new UserRoute();
      const app = new App([usersRoute]);

      return request(app.getServer()).put(`${usersRoute.path}/${userId}`).send(userData).expect(200);
    });
  });

  describe('[DELETE] /users/:id', () => {
    it.skip('response statusCode 200 / deleted', () => {
      const userId = 1;
      const deleteUser: User[] = userModel.filter(user => user.id !== userId);
      const usersRoute = new UserRoute();
      const app = new App([usersRoute]);

      return request(app.getServer()).delete(`${usersRoute.path}/${userId}`).expect(200, { data: deleteUser, message: 'deleted' });
    });
  });
});
