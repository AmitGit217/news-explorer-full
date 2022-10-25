import supertest from 'supertest';
import mongoose from 'mongoose';
import server from '../server';
import { user, credentials } from './cases.js';
import { UNAUTHORIZE_MESSAGE } from '../lib/constants';

const req = supertest(server);

afterAll((done) => {
  mongoose.connection.dropDatabase();
  mongoose.connection.close();
  done();
});

let token;

describe('User', () => {
  it('Creating user...', async () => {
    const res = await req.post('/signup').send(user);
    return res;
  });

  it('Getting token...', async () => {
    const res = await req.post('/signin').send(credentials);
    token = res.body.token;
  });
});

describe('User /users/me', () => {
  it('Should return 200 status code with current user data', async () => {
    const res = await req
      .get('/users/me')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(user.name);
    expect(res.body.email).toBe(user.email);
  });

  it('Should return 401 status code with error message for missing JWT', async () => {
    const res = await req.get('/users/me');
    expect(res.status).toBe(401);
    expect(res.body.message).toBe(UNAUTHORIZE_MESSAGE);
  });
});
