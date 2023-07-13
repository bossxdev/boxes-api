"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: "postgres",
    host: "localhost",
    username: "root",
    password: "12345678",
    port: 5432,
    database: "db_boxs",
    synchronize: true,
    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: ["dist/migrations/*{.ts,.js}"],
    migrationsTableName: "migrations_typeorm",
    migrationsRun: true,
    cli: {
        migrationsDir: "migrations",
    },
};
//# sourceMappingURL=orm.config.js.map