import {MssqlDb} from './dbutils'
class Article{
    title:string | undefined;
    desc:string | undefined;
}


var ArticleMssql=new MssqlDb<Article>();
export{
    Article,ArticleMssql
}