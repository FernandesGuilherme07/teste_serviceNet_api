import mongoose from 'mongoose';

import config from '../config/db';

async function Database() {
  await mongoose.connect(`${config.url}`);
  try {
    return console.log('DB Connected.');
  } catch (e) {
    return console.log({ connection_db_error: e });
  }
}

export default Database;
