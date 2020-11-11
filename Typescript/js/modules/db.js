"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbUrl = exports.save = exports.huoqushuju = void 0;
var dbUrl = 'xxxxxxxxxxxx';
exports.dbUrl = dbUrl;
function huoqushuju() {
    console.log('获取数据库的数据');
    return [
        {
            title: 123123123
        }
    ];
}
exports.huoqushuju = huoqushuju;
function save() {
    console.log('保存数据库成功');
}
exports.save = save;
function df() {
    console.log('引用exportdefault');
}
exports.default = df;
