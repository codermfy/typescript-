"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMysql = exports.User = void 0;
var dbutils_1 = require("./dbutils");
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var UserMysql = new dbutils_1.MysqlDb();
exports.UserMysql = UserMysql;
