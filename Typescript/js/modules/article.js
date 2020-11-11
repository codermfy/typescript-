"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleMssql = exports.Article = void 0;
var dbutils_1 = require("./dbutils");
var Article = /** @class */ (function () {
    function Article() {
    }
    return Article;
}());
exports.Article = Article;
var ArticleMssql = new dbutils_1.MssqlDb();
exports.ArticleMssql = ArticleMssql;
