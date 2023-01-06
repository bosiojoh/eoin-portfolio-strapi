// const { parse } = require("pg-connection-string");

// module.exports = ({ env }) => {
//   const { host, port, database, user, password } = parse(env("DATABASE_URL"));

//   return {
//     connection: {
//       client: "postgres",
//       connection: {
//         host,
//         port,
//         database,
//         user,
//         password
//       },
//       debug: false,
//     },
//   };
// };
console.log('being processed')

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env("DATABASE_HOST"),
      port: env("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: 'env("DATABASE_USERNAME")',
      password: env("DATABASE_PASSWORD"),
      ssl: env("DATABASE_SSL", true)
    }
  }
})