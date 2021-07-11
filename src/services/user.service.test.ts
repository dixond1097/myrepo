import { v4 as uuidv4 } from 'uuid';
import User from '../models/user';
import UserDAO from '../repositories/user.repository';
import userService from './user.service';

describe('Within User Service Module', () => {
  describe('login', () => {
    test('should sucessfully login', async () => {
      const username = 'test password';
      const password = 'test password';
      const mockUser = new User(username, password, 'Customer', 'some address', '54684631', uuidv4());
      jest.spyOn(UserDAO, 'getByUsername').mockResolvedValueOnce(mockUser);
      await expect(userService.login(username, password)).resolves.toBe(mockUser);
    });
  });
});
