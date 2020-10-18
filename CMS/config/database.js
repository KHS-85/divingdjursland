/////////////////////////////////////////////////
// For google app engine deployment           //
///////////////////////////////////////////////
// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
//         database: env('DATABASE_NAME'),
//         username: env('DATABASE_USERNAME'),
//         password: env('DATABASE_PASSWORD'),
//       },
//       options: {},
//     },
//   },
// });


/////////////////////////////////////////////////
// For local host testing (on my HDD)         //
///////////////////////////////////////////////
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});