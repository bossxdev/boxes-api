import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Users1614927111693 implements MigrationInterface {
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
    hashPassword(password: string): string;
}
