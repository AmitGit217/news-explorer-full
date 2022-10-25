// Status code
const NOT_FOUND = 404;
const INVALID = 400;
const CREATE = 201;
const UNAUTHORIZE_ACTION = 403;

// Messages
const INVALID_DATA_MESSAGE = 'Input invalid';
const DATA_EXIST_MESSAGE = 'Data already exist in the database';
const USER_NOT_FOUND_MESSAGE = 'User with this ID has not been found';
const UNAUTHORIZE_MESSAGE = 'Unauthorized';
const UNAUTHORIZE_ACTION_MESSAGE = 'You can only delete your own articles';
const ARTICLE_NOT_FOUND_MESSAGE =
  'This user has no saved articles or no such an article';
const INCORRECT_CRED_MESSAGE = 'Incorrect email or password';
const CELEBRATE_ERROR = 'Validation failed';
const RESOURCE_NOT_FOUND = 'Requested resource not found';

// Regex
const URL_REGEX =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

export {
  NOT_FOUND,
  CREATE,
  INVALID_DATA_MESSAGE,
  DATA_EXIST_MESSAGE,
  UNAUTHORIZE_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
  INVALID,
  URL_REGEX,
  UNAUTHORIZE_ACTION,
  ARTICLE_NOT_FOUND_MESSAGE,
  UNAUTHORIZE_ACTION_MESSAGE,
  INCORRECT_CRED_MESSAGE,
  CELEBRATE_ERROR,
  RESOURCE_NOT_FOUND,
};
