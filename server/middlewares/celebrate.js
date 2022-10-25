import { celebrate, Joi, Segments } from 'celebrate';

const userValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const articleValidation = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required(),
    title: Joi.string().required(),
    text: Joi.string().required(),
    date: Joi.string().required(),
    source: Joi.string().required(),
    link: Joi.string().required().uri(),
    image: Joi.string().required().uri(),
  }),
});

const celebrateSignin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const celebrateId = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    _id: Joi.string().hex().length(24),
  }),
});

const celebrateJwt = celebrate({
  [Segments.HEADERS]: Joi.object()
    .keys({
      authorization: Joi.string().required(),
    })
    .unknown(),
});

export {
  userValidation,
  articleValidation,
  celebrateId,
  celebrateSignin,
  celebrateJwt,
};
