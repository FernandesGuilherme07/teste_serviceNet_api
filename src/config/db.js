import 'dotenv/config';

const {
  DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME,
} = process.env;

export default {
  // With MongoDB atlas
  // url: process.env.DB_CONNECTION,

  // With Docker
  url: `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
};
