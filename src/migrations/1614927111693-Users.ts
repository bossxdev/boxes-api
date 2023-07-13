import { MigrationInterface, QueryRunner } from "typeorm";
import { genSaltSync, hashSync } from "bcrypt";

export class Users1614927111693 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("INSERT INTO role(id,name) VALUES(1,'Admin')");
    await queryRunner.query("INSERT INTO role(id,name) VALUES(2,'User')");
    await queryRunner.query("INSERT INTO role(id,name) VALUES(3,'Customer')");

    const user: any = "inpangxm@gmail.com";
    const password: string = this.hashPassword("12345678");
    await queryRunner.query(
      "INSERT INTO users(name,lastname,email,password,roleid) VALUES('Admin', 'Supervisor', '" +
        user +
        "', '" +
        password +
        "',1)"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}

  public hashPassword(password: string): string {
    return hashSync(password, genSaltSync());
  }
}
