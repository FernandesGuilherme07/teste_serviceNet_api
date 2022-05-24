import 'dotenv/config';

const {
  DB_DATABASE,
  DB_HOSTNAME,
  DB_PORT,
  DB_CONNECTION,
} = process.env;

export default {
  // with MongoDB atlas:
  // url: process.env.DB_CONNECTION,

  // with docker-compose:
  url: `mongodb://${DB_HOSTNAME}:${DB_PORT}/${DB_DATABASE}`,
};
