"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users1614927111693 = void 0;
const bcrypt_1 = require("bcrypt");
class Users1614927111693 {
    async up(queryRunner) {
        await queryRunner.query("INSERT INTO role(id,name) VALUES(1,'Admin')");
        await queryRunner.query("INSERT INTO role(id,name) VALUES(2,'User')");
        await queryRunner.query("INSERT INTO role(id,name) VALUES(3,'Customer')");
        const user = "inpangxm@gmail.com";
        const password = this.hashPassword("12345678");
        await queryRunner.query("INSERT INTO users(name,lastname,email,password,roleid) VALUES('Admin', 'Supervisor', '" +
            user +
            "', '" +
            password +
            "',1)");
    }
    async down(queryRunner) { }
    hashPassword(password) {
        return bcrypt_1.hashSync(password, bcrypt_1.genSaltSync());
    }
}
exports.Users1614927111693 = Users1614927111693;
//# sourceMappingURL=1614927111693-Users.js.map