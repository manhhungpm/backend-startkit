import { Injectable } from '@nestjs/common';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

@Injectable()
export class AuthService {
  private readonly users: User[] = [
    {
      id: '1',
      name: 'Hung',
      email: 'hung@gmail.com',
      password: '11',
    },
    {
      id: '2',
      name: 'Kenny',
      email: 'kenny@gmail.com',
      password: '22',
    },
  ];

  validateUserAndPassword(email: string, password: string) {
    const result = this.users.find(
      (users) => users.email === email && users.password === password,
    );

    return result;
  }
}
