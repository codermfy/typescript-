"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MssqlDb = exports.MysqlDb = void 0;
//要是实现泛型接口，类也应该是一个泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
        console.log('在构造函数中连接到数据库');
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDb;
}());
exports.MysqlDb = MysqlDb;
var MssqlDb = /** @class */ (function () {
    function MssqlDb() {
    }
    MssqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MssqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MssqlDb.prototype.get = function (id) {
        var list = [
            { title: 123,
                status: 200 },
            { title: 123322,
                status: 20033 },
        ];
        return list;
    };
    return MssqlDb;
}());
exports.MssqlDb = MssqlDb;
