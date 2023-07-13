import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
  type: "postgres",
  host: "localhost",
  username: "root",
  password: "12345678",
  port: 5432,
  database: "db_boxs",
  synchronize: true,
  entities: ["dist/**/*.entity{.ts,.js}"],
  // ssl: {
  //   rejectUnauthorized: false,
  //   ca: fs.readFileSync("ca-certificate.crt").toString(),
  // },
  migrations: ["dist/migrations/*{.ts,.js}"],
  migrationsTableName: "migrations_typeorm",
  migrationsRun: true,
  cli: {
    migrationsDir: "migrations",
  },
};

//Osiris
// export const config: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: '127.0.0.1',
//   username: 'root',
//   password: '12345678',
//   port: 5433,
//   database: 'db_digiboxs',
//   synchronize: true,
//   entities: ['dist/**/*.entity{.ts,.js}'],
//   // ssl: {
//   //   rejectUnauthorized: false,
//   //   ca: fs.readFileSync('ca-certificate.crt').toString(),
//   // },
//   migrations: ['dist/migrations/*{.ts,.js}'],
//   migrationsTableName: 'migrations_typeorm',
//   // migrationsRun: true,
//   cli: {
//     migrationsDir: 'migrations',
//   },
// };

// export const config: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: '127.0.0.1',
//   username: 'root',
//   password: '12345678',
//   port: 5432,
//   database: 'db_digiboxs',
//   synchronize: true,
//   entities: ['dist/**/*.entity{.ts,.js}'],
//   // ssl: {
//   //   rejectUnauthorized: false,
//   //   ca: fs.readFileSync('ca-certificate.crt').toString(),
//   // },
//   migrations: ['dist/migrations/*{.ts,.js}'],
//   migrationsTableName: 'migrations_typeorm',
//   // migrationsRun: false,
//   cli: {
//     migrationsDir: 'migrations',
//   },
// };
