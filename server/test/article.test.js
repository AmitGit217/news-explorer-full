import supertest from 'supertest';
import mongoose from 'mongoose';
import server from '../server';
import {
  article,
  credentials,
  credentialsTwo,
  invalidArticleId,
  invalidImage,
  invalidLink,
  missingDate,
  missingImage,
  missingKeyword,
  missingLink,
  missingSource,
  missingText,
  missingTitle,
  undefinedArticle,
  user,
  userNotFoundToken,
  userTwo,
} from './cases.js';

import {
  ARTICLE_NOT_FOUND_MESSAGE,
  CELEBRATE_ERROR,
  UNAUTHORIZE_ACTION_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
} from '../lib/constants';

const req = supertest(server);

afterAll((done) => {
  mongoose.connection.dropDatabase();
  mongoose.connection.close();
  done();
});

let token;
let articleId;

let tokenTwo;
let articleIdTwo;
describe('Article action', () => {
  it('Creating user...', async () => {
    const res = await req.post('/signup').send(user);
    return res;
  });
  it('Getting token...', async () => {
    const res = await req.post('/signin').send(credentials);
    token = res.body.token;
  });

  it('Should return 201 status code with article data', async () => {
    const res = await req
      .post('/articles')
      .send(article)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(201);
    expect(res.body.keyword).toBe(article.keyword);
    expect(res.body.title).toBe(article.title);
    expect(res.body.text).toBe(article.text);
    expect(res.body.link).toBe(article.link);
    expect(res.body.image).toBe(article.image);
    expect(res.body.date).toBe(article.date);
    expect(res.body.source).toBe(article.source);
    expect(res.body.owner).toBe(undefined);
    articleId = res.body._id;
  });

  it('Should return 400 status code for missing keyword', async () => {
    const res = await req
      .post('/articles')
      .send(missingKeyword)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(400);
    expect(res.body.message).toBe(CELEBRATE_ERROR);
  });
  it('Should return 400 status code for missing title', async () => {
    const res = await req
      .post('/articles')
      .send(missingTitle)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(400);
    expect(res.body.message).toBe(CELEBRATE_ERROR);
  });

  it('Should return 400 status code for missing text', async () => {
    const res = await req
      .post('/articles')
      .send(missingText)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(400);
    expect(res.body.message).toBe(CELEBRATE_ERROR);
  });

  it('Should return 400 status code for missing date', async () => {
    const res = await req
      .post('/articles')
      .send(missingDate)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(400);
    expect(res.body.message).toBe(CELEBRATE_ERROR);
  });

  it('Should return 400 status code for missing source', async () => {
    const res = await req
      .post('/articles')
      .send(missingSource)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(400);
    expect(res.body.message).toBe(CELEBRATE_ERROR);
  });

  it('Should return 400 status code for missing link', async () => {
    const res = await req
      .post('/articles')
      .send(missingLink)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(400);
    expect(res.body.message).toBe(CELEBRATE_ERROR);
  });

  it('Should return 400 status code for missing image', async () => {
    const res = await req
      .post('/articles')
      .send(missingImage)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(400);
    expect(res.body.message).toBe(CELEBRATE_ERROR);
  });

  it('Should return 400 status code for invalid link', async () => {
    const res = await req
      .post('/articles')
      .send(invalidLink)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(400);
    expect(res.body.message).toBe(CELEBRATE_ERROR);
  });

  it('Should return 400 status code for invalid image', async () => {
    const res = await req
      .post('/articles')
      .send(invalidImage)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(400);
    expect(res.body.message).toBe(CELEBRATE_ERROR);
  });

  it('Should return 200 status code with articles', async () => {
    const res = await req
      .get('/articles')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    const currentArticle = res.body[0];
    expect(currentArticle.keyword).toBe(article.keyword);
    expect(currentArticle.title).toBe(article.title);
    expect(currentArticle.text).toBe(article.text);
    expect(currentArticle.link).toBe(article.link);
    expect(currentArticle.image).toBe(article.image);
    expect(currentArticle.date).toBe(article.date);
    expect(currentArticle.source).toBe(article.source);
    expect(currentArticle.owner).toBe(undefined);
  });

  it('Should return 404 status code with error message for invalid token and undefined user id', async () => {
    const res = await req
      .get('/articles')
      .set('Authorization', `Bearer ${userNotFoundToken}`);
    expect(res.status).toBe(404);
    expect(res.body.message).toBe(ARTICLE_NOT_FOUND_MESSAGE);
  });

  it('Should return 404 status code with error message for undefined article', async () => {
    const res = await req
      .delete(`/articles/${undefinedArticle}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(404);
    expect(res.body.message).toBe(ARTICLE_NOT_FOUND_MESSAGE);
  });

  it('Should return 404 status code with error message for invalid article id', async () => {
    const res = await req
      .delete(`/articles/${invalidArticleId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(400);
    expect(res.body.message).toBe(CELEBRATE_ERROR);
  });

  describe('Other user interaction', () => {
    it('Creating second user...', async () => {
      const res = await req.post('/signup').send(userTwo);
      return res;
    });
    it('Getting second token...', async () => {
      const res = await req.post('/signin').send(credentialsTwo);
      tokenTwo = res.body.token;
    });
    it('Should return 403 status for trying deleting other people article', async () => {
      const res = await req
        .delete(`/articles/${articleId}`)
        .set('Authorization', `Bearer ${tokenTwo}`);
      expect(res.status).toBe(403);
      expect(res.body.message).toBe(UNAUTHORIZE_ACTION_MESSAGE);
    });
  });
  it('Should return 200 status code with the deleted article', async () => {
    const res = await req
      .delete(`/articles/${articleId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    const currentArticle = res.body;
    expect(currentArticle.keyword).toBe(article.keyword);
    expect(currentArticle.title).toBe(article.title);
    expect(currentArticle.text).toBe(article.text);
    expect(currentArticle.link).toBe(article.link);
    expect(currentArticle.image).toBe(article.image);
    expect(currentArticle.date).toBe(article.date);
    expect(currentArticle.source).toBe(article.source);
    expect(currentArticle.owner).toBe(undefined);
  });

  it('Should return 404 status code for empty articles array', async () => {
    const res = await req
      .get('/articles')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(404);
    expect(res.body.message).toBe(ARTICLE_NOT_FOUND_MESSAGE);
  });
});
