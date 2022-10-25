const user = {
  email: 'valid@email.com',
  name: 'name',
  password: 'password',
};
const userTwo = {
  email: 'validTwo@email.com',
  name: 'nameTwo',
  password: 'password',
};
const invalidEmail = {
  email: 'invalidEmail',
  name: 'name',
  password: 'password',
};
const invalidPassword = {
  email: 'valid@email.com',
  name: 'name',
  password: '',
};
const invalidName = {
  email: 'valid@email.com',
  name: 'n',
  password: 'password',
};
const credentials = {
  email: 'valid@email.com',
  password: 'password',
};
const credentialsTwo = {
  email: 'validTwo@email.com',
  password: 'password',
};

const invalidEmailCredential = {
  email: 'invalid@email.com',
  password: 'password',
};
const invalidPasswordCredential = {
  email: 'valid@email.com',
  password: 'invalidPassword',
};

const syntaxErrorEmail = {
  email: 'vali',
  password: 'password',
};
const syntaxErrorPassword = {
  email: 'valid@email.com',
  password: '',
};

const article = {
  keyword: 'bitcoin',
  title:
    'Former Uber security chief found guilty of covering up massive 2016 data breach',
  text: 'Uber paid two hackers $100,000 in Bitcoin to keep a 2016 data breach quiet, and now a jury has convicted former chief security officer Joe Sullivan on two charges for not reporting the incident to authorities.',
  date: '2022-10-06T00:25:32Z',
  source: 'The Verge',
  link: 'https://www.theverge.com/2022/10/5/23390063/uber-security-chief-convicted-hack-cover-up-bounty-payment',
  image:
    'https://cdn.vox-cdn.com/thumbor/lh2YBh8cWvn3ARrenXxjolBte4o=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23932655/acastro_STK106__01.jpg',
};

const missingKeyword = {
  keyword: '',
  title:
    'Former Uber security chief found guilty of covering up massive 2016 data breach',
  text: 'Uber paid two hackers $100,000 in Bitcoin to keep a 2016 data breach quiet, and now a jury has convicted former chief security officer Joe Sullivan on two charges for not reporting the incident to authorities.',
  date: '2022-10-06T00:25:32Z',
  source: 'The Verge',
  link: 'https://www.theverge.com/2022/10/5/23390063/uber-security-chief-convicted-hack-cover-up-bounty-payment',
  image:
    'https://cdn.vox-cdn.com/thumbor/lh2YBh8cWvn3ARrenXxjolBte4o=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23932655/acastro_STK106__01.jpg',
};

const missingTitle = {
  keyword: 'bitcoin',
  title: '',
  text: 'Uber paid two hackers $100,000 in Bitcoin to keep a 2016 data breach quiet, and now a jury has convicted former chief security officer Joe Sullivan on two charges for not reporting the incident to authorities.',
  date: '2022-10-06T00:25:32Z',
  source: 'The Verge',
  link: 'https://www.theverge.com/2022/10/5/23390063/uber-security-chief-convicted-hack-cover-up-bounty-payment',
  image:
    'https://cdn.vox-cdn.com/thumbor/lh2YBh8cWvn3ARrenXxjolBte4o=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23932655/acastro_STK106__01.jpg',
};

const missingText = {
  keyword: 'bitcoin',
  title:
    'Former Uber security chief found guilty of covering up massive 2016 data breach',
  text: '',
  date: '2022-10-06T00:25:32Z',
  source: 'The Verge',
  link: 'https://www.theverge.com/2022/10/5/23390063/uber-security-chief-convicted-hack-cover-up-bounty-payment',
  image:
    'https://cdn.vox-cdn.com/thumbor/lh2YBh8cWvn3ARrenXxjolBte4o=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23932655/acastro_STK106__01.jpg',
};

const missingDate = {
  keyword: 'bitcoin',
  title:
    'Former Uber security chief found guilty of covering up massive 2016 data breach',
  text: 'Uber paid two hackers $100,000 in Bitcoin to keep a 2016 data breach quiet, and now a jury has convicted former chief security officer Joe Sullivan on two charges for not reporting the incident to authorities.',
  date: '',
  source: 'The Verge',
  link: 'https://www.theverge.com/2022/10/5/23390063/uber-security-chief-convicted-hack-cover-up-bounty-payment',
  image:
    'https://cdn.vox-cdn.com/thumbor/lh2YBh8cWvn3ARrenXxjolBte4o=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23932655/acastro_STK106__01.jpg',
};

const missingSource = {
  keyword: 'bitcoin',
  title:
    'Former Uber security chief found guilty of covering up massive 2016 data breach',
  text: 'Uber paid two hackers $100,000 in Bitcoin to keep a 2016 data breach quiet, and now a jury has convicted former chief security officer Joe Sullivan on two charges for not reporting the incident to authorities.',
  date: '2022-10-06T00:25:32Z',
  source: '',
  link: 'https://www.theverge.com/2022/10/5/23390063/uber-security-chief-convicted-hack-cover-up-bounty-payment',
  image:
    'https://cdn.vox-cdn.com/thumbor/lh2YBh8cWvn3ARrenXxjolBte4o=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23932655/acastro_STK106__01.jpg',
};

const missingLink = {
  keyword: 'bitcoin',
  title:
    'Former Uber security chief found guilty of covering up massive 2016 data breach',
  text: 'Uber paid two hackers $100,000 in Bitcoin to keep a 2016 data breach quiet, and now a jury has convicted former chief security officer Joe Sullivan on two charges for not reporting the incident to authorities.',
  date: '2022-10-06T00:25:32Z',
  source: 'The Verge',
  link: '',
  image:
    'https://cdn.vox-cdn.com/thumbor/lh2YBh8cWvn3ARrenXxjolBte4o=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23932655/acastro_STK106__01.jpg',
};

const missingImage = {
  keyword: 'bitcoin',
  title:
    'Former Uber security chief found guilty of covering up massive 2016 data breach',
  text: 'Uber paid two hackers $100,000 in Bitcoin to keep a 2016 data breach quiet, and now a jury has convicted former chief security officer Joe Sullivan on two charges for not reporting the incident to authorities.',
  date: '2022-10-06T00:25:32Z',
  source: 'The Verge',
  link: 'https://www.theverge.com/2022/10/5/23390063/uber-security-chief-convicted-hack-cover-up-bounty-payment',
  image: '',
};

const invalidLink = {
  keyword: 'bitcoin',
  title:
    'Former Uber security chief found guilty of covering up massive 2016 data breach',
  text: 'Uber paid two hackers $100,000 in Bitcoin to keep a 2016 data breach quiet, and now a jury has convicted former chief security officer Joe Sullivan on two charges for not reporting the incident to authorities.',
  date: '2022-10-06T00:25:32Z',
  source: 'The Verge',
  link: 'theverge.com/2022/10/5/23390063/uber-security-chief-convicted-hack-cover-up-bounty-payment',
  image:
    'https://cdn.vox-cdn.com/thumbor/lh2YBh8cWvn3ARrenXxjolBte4o=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23932655/acastro_STK106__01.jpg',
};

const invalidImage = {
  keyword: 'bitcoin',
  title:
    'Former Uber security chief found guilty of covering up massive 2016 data breach',
  text: 'Uber paid two hackers $100,000 in Bitcoin to keep a 2016 data breach quiet, and now a jury has convicted former chief security officer Joe Sullivan on two charges for not reporting the incident to authorities.',
  date: '2022-10-06T00:25:32Z',
  source: 'The Verge',
  link: 'https://www.theverge.com/2022/10/5/23390063/uber-security-chief-convicted-hack-cover-up-bounty-payment',
  image:
    'humbor/lh2YBh8cWvn3ARrenXxjolBte4o=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23932655/acastro_STK106__01.jpg',
};

const userNotFoundToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTUyMGNhMmQ0N2NmNWNkNTBkZTYwMCIsImlhdCI6MTY2NjUyMzMzOH0._BPk-cs_aYzal6GZUa_cYeJSfAFNa9IN78X1CEPQnfk';

const undefinedArticle = '63552e61590ed5aebc7aee99';

const invalidArticleId = '63552e61590ed5aebc7';

export {
  user,
  invalidEmail,
  invalidPassword,
  invalidName,
  credentials,
  invalidEmailCredential,
  invalidPasswordCredential,
  article,
  missingKeyword,
  missingTitle,
  missingText,
  missingDate,
  missingSource,
  missingImage,
  missingLink,
  invalidLink,
  invalidImage,
  userNotFoundToken,
  undefinedArticle,
  invalidArticleId,
  userTwo,
  credentialsTwo,
  syntaxErrorEmail,
  syntaxErrorPassword,
};
