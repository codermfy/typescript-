interface DBI<T>{
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[];
}
//要是实现泛型接口，类也应该是一个泛型类
class MysqlDb<T> implements DBI<T>{
    constructor(){
        console.log('在构造函数中连接到数据库')
    }
    add(info: T): boolean {
        console.log(info);
        return true
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.")
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.")
    }
    get(id: number):any[] {
        throw new Error("Method not implemented.")
    }
}
class MssqlDb<T> implements DBI<T>{
    add(info: T): boolean {
        console.log(info);
        return true
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.")
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.")
    }
    get(id: number):any[] {
        var list=[
            {title:123,
            status:200},
            {title:123322,
            status:20033},
        ]
        return list
    }

}

export {MysqlDb,MssqlDb}
