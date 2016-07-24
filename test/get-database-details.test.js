/* eslint-disable max-len */
const tape = require('tape');
const getDatabaseDetails = require('../lib/get-database-details');

tape('getDatabaseDetails converts a database url into an object', t => {
  const dbUrl = 'postgres://<username>:<password>@<host>:1234/<database>';

  t.deepEqual(
    getDatabaseDetails(dbUrl),
    {
      username: '<username>',
      password: '<password>',
      host: '<host>',
      port: '1234',
      database: '<database>',
    },
    'returns object with all properties extracted'
  );
  t.end();
});

tape('getDatabaseDetails converts a database url into an object when supplied with realistic data', t => {
  const dbUrl = 'postgres://matt:mattspassword@my.postgres.server.domain.goes.here.com:5432/mattsdatabase';

  t.deepEqual(
    getDatabaseDetails(dbUrl),
    {
      username: 'matt',
      password: 'mattspassword',
      host: 'my.postgres.server.domain.goes.here.com',
      port: '5432',
      database: 'mattsdatabase',
    },
    'returns object with all properties extracted'
  );
  t.end();
});

tape('Throws invalid url error if database url is in incorrect format', t => {
  const dbUrl = '';
  t.throws(() => getDatabaseDetails(dbUrl), /Invalid database url/);
  t.end();
});
