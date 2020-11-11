import {MysqlDb} from './dbutils'
class User{
    username:string | undefined;
    password:string | undefined;
}


var UserMysql=new MysqlDb<User>();
export{
    User,UserMysql
}