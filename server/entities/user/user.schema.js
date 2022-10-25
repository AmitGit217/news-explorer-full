import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail.js';
import * as bcrypt from 'bcrypt';
import { INCORRECT_CRED_MESSAGE } from '../../lib/constants.js';

const User = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 30 },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, 'Email is invalid'],
  },
  password: {
    select: false,
    type: String,
    required: true,
  },
});

User.statics.findUserByCredentials = function findUserByCredentials(
  email,
  password
) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error(INCORRECT_CRED_MESSAGE));
      }
      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return Promise.reject(new Error(INCORRECT_CRED_MESSAGE));
        }
        return user;
      });
    });
};

export default mongoose.model('user', User);
