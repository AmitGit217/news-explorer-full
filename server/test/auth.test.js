import supertest from 'supertest';
import mongoose from 'mongoose';
import server from '../server';

import {
  user,
  invalidEmail,
  invalidName,
  invalidPassword,
  credentials,
  invalidEmailCredential,
  invalidPasswordCredential,
  syntaxErrorEmail,
  syntaxErrorPassword,
} from './cases.js';
import {
  CELEBRATE_ERROR,
  DATA_EXIST_MESSAGE,
  INCORRECT_CRED_MESSAGE,
  RESOURCE_NOT_FOUND,
  UNAUTHORIZE_MESSAGE,
} from '../lib/constants';

const req = supertest(server);

afterAll((done) => {
  mongoose.connection.dropDatabase();
  mongoose.connection.close();
  done();
});

let token;

describe('Initial app settings', () => {
  it('Should response with 401 status code for unauthorized request', async () => {
    const res = await req.get('/');
    expect(res.status).toBe(401);
    expect(res.body.message).toBe(UNAUTHORIZE_MESSAGE);
  });

  describe('Auth /signup', () => {
    it('Should return 201 status code with user data', async () => {
      const res = await req.post('/signup').send(user);
      expect(res.status).toBe(201);
      expect(res.body.email).toBe(user.email);
      expect(res.body.name).toBe(user.name);
      expect(res.body.password).toBe(undefined);
    });

    it('Should return 400 status code with error message for invalid email', async () => {
      const res = await req.post('/signup').send(invalidEmail);
      expect(res.status).toBe(400);
      expect(res.body.message).toBe(CELEBRATE_ERROR);
    });

    it('Should return 400 status code with error message for invalid name', async () => {
      const res = await req.post('/signup').send(invalidName);
      expect(res.status).toBe(400);
      expect(res.body.message).toBe(CELEBRATE_ERROR);
    });

    it('Should return 400 status code with error message for invalid password', async () => {
      const res = await req.post('/signup').send(invalidPassword);
      expect(res.status).toBe(400);
      expect(res.body.message).toBe(CELEBRATE_ERROR);
    });

    it('Should return 409 status code with error message for existing email', async () => {
      const res = await req.post('/signup').send(user);
      expect(res.status).toBe(409);
      expect(res.body.message).toBe(DATA_EXIST_MESSAGE);
    });
  });

  describe('Auth /signin', () => {
    it('Should return 200 status code with user data & JWT', async () => {
      const res = await req.post('/signin').send(credentials);
      expect(res.status).toBe(200);
      expect(res.body.user.email).toBe(user.email);
      expect(res.body.user.name).toBe(user.name);
      expect(res.body.token).toBeDefined();
      token = res.body.token;
    });

    it('Should return 401 status code with error message for invalid email credential', async () => {
      const res = await req.post('/signin').send(invalidEmailCredential);
      expect(res.status).toBe(401);
      expect(res.body.message).toBe(INCORRECT_CRED_MESSAGE);
    });

    it('Should return 401 status code with error message for invalid password credential', async () => {
      const res = await req.post('/signin').send(invalidPasswordCredential);
      expect(res.status).toBe(401);
      expect(res.body.message).toBe(INCORRECT_CRED_MESSAGE);
    });
  });

  it('Should return 400 status code with error message for invalid email credential', async () => {
    const res = await req.post('/signin').send(syntaxErrorEmail);
    expect(res.status).toBe(400);
    expect(res.body.message).toBe(CELEBRATE_ERROR);
  });

  it('Should return 400 status code with error message for invalid password credential', async () => {
    const res = await req.post('/signin').send(syntaxErrorPassword);
    expect(res.status).toBe(400);
    expect(res.body.message).toBe(CELEBRATE_ERROR);
  });
});

it('Should response with 404 status code for undefined route', async () => {
  const res = await req
    .get('/undefined-route')
    .set('Authorization', `Bearer ${token}`);
  expect(res.status).toBe(404);
  expect(res.body.message).toBe(RESOURCE_NOT_FOUND);
});
