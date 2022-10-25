import mongoose from 'mongoose';
import { URL_REGEX } from '../../lib/constants.js';

const Article = new mongoose.Schema({
  keyword: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: String, required: true },
  source: { type: String, required: true },
  link: {
    type: String,
    required: true,
    validate: {
      validator: (value) => URL_REGEX.test(value),
      message: (props) => `${props.value} is not a valid URL`,
    },
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (value) => URL_REGEX.test(value),
      message: (props) => `${props.value} is not a valid URL`,
    },
  },
  owner: {
    ref: 'user',
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    select: false,
  },
});

export default mongoose.model('article', Article);
