
//ts编译es5

//boolean类型 true false

let flag:boolean=true
flag=false
//数字类型(number)

var a:number=123
console.log(a)
a=12.3
console.log(a)
//字符串(string)

let str:string="你好"
let str1:string="hello"
console.log(str,str1)
//数组类型(array)

//第一种定义方式
let arr:number[]=[1,2,34,5]
console.log(arr)
let arr1:string[]=['php','js','golang']
console.log(arr1)
//第二种定义方法
let arr2:Array<number>=[11,22,33]
console.log(arr2)
let arr3:Array<string>=['php','js','golang']
console.log(arr3)
//第三种
var arr5:any[]=[1,'sd',true]
console.log(arr5)
//元组类型(tuple) 属于数组的一种

let tup:[string,number,boolean]=['ts',3.18,true]
console.log(tup)
//枚举类型

enum Flag{success=1,error=-1}

var f:Flag=Flag.success
console.log(f)
console.log(Flag.error)
//没有赋值默认是索引值
enum Color{red,blue,orange}
var c:Color=Color.blue
console.log(c)
//中间有值，则通过左右关系加减对应的数值
enum Color1{red,blue=5,orange}
var c1:Color1=Color1.orange
console.log(c1) //输出6

//任意类型(any) 用于获取对象Object(例如获取某元素对象)
var ay:any=123;
ay='str';
console.log(ay);

//null和undefined 其他(never类型)数据类型的子类型

// var num:number;
// console.log(num) //报错

var num:undefined;
console.log(num) //输出undefined 

var num1:number | undefined;
num1=123
console.log(num1) //123

var num2:number | undefined;
console.log(num2) //undefined

//一个元素可能是number类型，可能是null 可能是undefined
var num3:number | null | undefined;
console.log(num3) //undefined

//void类型:typescript中的void表示没有任何类型，一般用于
//定义方法的时候方法没有返回值
function run():void{
    console.log('run')
}
run()
//如果有返回值，则在:后面添加返回值类型

//never类型：是其他类型(包括null和undefined)的子类型，代表从不会出现的值，这意味着
//声明never的变量只能被never类型所赋值

var und:undefined;
und=undefined;

var nul:null;
nul=null;


var x:never;

// x=123 //错误写法

// x=(()=>{
//     throw new Error('1111')
// })()

//函数定义-----------------------------------------------------------------------------

//es5定义的方法
//函数声明
// function lsp(){
//     return 'run'
// }
// //函数表达式
// var lsp=function(){
//     return 'run'
// }


//ts中定义函数的方法
function lsp():string{
    return 'lsp'
}
var lsp1=function():string{
    return 'lsp1'
}
//ts中定义方法传参

function getinfo(name:string,age:number):string{
    return `${name}---${age}`
}
console.log(getinfo('张三',18))

var getinfo1=function(name:string,age:number):string{
    return `${name}---${age}`
}
console.log(getinfo1('lisi',100))

//没有返回值的方法 用void

//方法可选参数

//es5里面的方法的实参和形参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数

function getinfo2(name:string,age?:number):string{
    if(age){
    return `${name}---${age}`
    }else{
        return `${name}---年龄保密`
    }
}
console.log(getinfo2('张三',18))
console.log(getinfo2('张三'))

//可选参数必须配置到参数的最后面

//默认参数

function getinfo3(name:string,age:number=20):string{
    if(age){
    return `${name}---${age}`
    }else{
        return `${name}---年龄保密`
    }
}
console.log(getinfo3('zhangsan'))

//剩余参数

function sum(...res:number[]):number{
    return res.reduce((pre,val)=>{
        return pre+val
    },0)
}
console.log(sum(1,3,2,5,4,6))

//函数重载 ！！ 
//ts，通过为同一个函数提供多个函数类型定义来试下多种功能的目的
//ts为了兼容es5 以及es6 重载的写法和java中有区别

//es5 出现同名的方法，下面的会替换上面的写法

//ts中的重载

function getdata(name:string):string;
function getdata(age:number):string;
function getdata(str:any):string{
    if(typeof str==='string'){
        return "name"+str;
    }else{
        return 'age'+str;
    }
}
console.log(getdata('zhangsan'))
console.log(getdata(123))
//console.log(getdata(true)) //编译报错

function getINFO(name:string):string;
function getINFO(name:string,age:number):string;
function getINFO(name:any,age?:any):any{
    if(age){
        return '我叫'+name+'age:'+age
    }else{
        return '我叫'+name
    }
}
console.log(getINFO('zhangsan'))
console.log(getINFO('zhangsan',100))
// console.log(getINFO(123)) //编译错误
// console.log(getINFO('zhangsan ',true)) //编译错误

//类--------------------------------------------------------------------------------
//es5里的类 用构造函数构建 在原型对象中扩展属性，方法

//es5静态方法
// function Person(){}
// Person.sleep=function(){
//     console.log('sleep')
// }
// Person.sleep()

//es5继承 组合继承等等

//ts中类的定义
class Person{
    name:string; //属性 省略了public ES6中没有这个
    constructor(n:string){
        this.name=n
    }
    run():void{
        console.log(this.name)
    }
    getName():string{
        return this.name
    }
    setName(name:string):void{
        this.name=name
    }
}
var p=new Person('wangwu')
p.run()
console.log(p.getName())
p.setName('lisi')
p.run()
//ts中实现继承 
class Personsup{
    name:string; 
    constructor(n:string){
        this.name=n
    }
    run():string{
        return `${this.name}在运动`
    }
}
class Personsub extends Personsup{
    constructor(name:string){
        super(name);
    }
    work():string{
        return this.name+'在工作'
    }
    //当子类重写了父类中的方法后，子类调用自己的方法，使用super调用父类的方法
    run():string{
        console.log(super.run()) 
        return `${this.name}在运动sub`
    }
}
var w=new Personsub('lisi')
console.log(w.run())
console.log(w)
console.log(w.work())
//3 类里面的修饰符 ts里面定义属性的时候给我们提供了三种修饰符
//public :公有 在类里面，子类，类外边都可以访问
//protected ：在类里面，子类里面都可以访问，类外边不能访问
//private ：只能在类里面访问
//如果属性不加修饰符 默认公有

//静态属性 静态方法
class sp{
    public name:string;
    constructor(name:string){
        this.name=name
    }
    static sex:string='nan'
    static print():void{
        //不能调用实例属性，因为还没被创建出来
        console.log('静态方法'+this.sex)
    }
}
//静态方法
sp.print()
//静态属性
console.log(sp.sex)

//多态：父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现
// class Animal{
//     name:string;
//     constructor(name:string){
//         this.name=name;
//     }
//     eat(){
//         return 'eat something'
//     }
// }
// class Dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         return this.name+'吃狗粮'
//     }
// }
// class Cat extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         return this.name+'吃猫粮'
//     }
// }
//抽象类：它是提供其他类继承的基类，不能直接实例化
//用abstrac关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
//抽象类和抽象方法用来定义标准Animal这个类要求它的子类必须包含eat
// abstract class Animal{
//     name:string;
//     constructor(name:string){
//         this.name=name;
//     }
//     abstract eat():any;
// }
// class Dog extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         return this.name+'吃狗粮'
//     }
// }
// class Cat extends Animal{
//     constructor(name:string){
//         super(name)
//     }
//     eat(){
//         return this.name+'吃猫粮'
//     }
// }

//接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到了一种限制和规范的作用
//接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，他只规定这批类里必须提供某些
//方法，提供这些方法的类就可以满足实际需要，ts中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等

// function printName(){
//     //必须传入对象 firstname secondname
// }

//属性接口
interface FullName{
    firstName:string;
    secondName:string;
}
function printName(name:FullName){
    console.log(name.firstName+'--'+name.secondName)
}
var obj={
    age:20,
    firstName:'zhang',
    secondName:'san'
}
printName(obj)
//参数的顺序可以不一样
printName({
    secondName:'si',
    firstName:'li',
})

//接口 可选属性
interface FullName1{
    firstName:string;
    //该参数可传可不传
    secondName?:string;
}

//example1
// interface Config{
//     type:string;
//     url:string;
//     data?:string;
//     dataType:string;
// }
// function ajax(config:Config){
//     var xhr=new XMLHttpRequest();
//     xhr.open(config.type,config.url)
//     xhr.send(config.data)
//     xhr.onreadystatechange=function(){
//         if(xhr.readyState==4&&xhr.status==200){
//             console.log('success')
//             if(config.dataType=='json'){
//                 console.log(JSON.parse(xhr.responseText))
//             }else{
//                 console.log(xhr.responseText)
//             }
//         }
//     }
// }
// ajax({
//     type:'get',
//     url:'http://a.itying.com/api/productlist',
//     dataType:'json'
// })

//函数类型接口：对方法传入的参数以及返回值进行约束  批量约束

//加密的函数类型接口

interface encrypt{
    (key:string,value:string):string;
}
var md5:encrypt=function(key:string,value:string):string{
    //模拟操作
    return key+value;
}

console.log(md5('name','zhangsan'))

var sha1:encrypt=function(key:string,value:string):string{
    //模拟操作
    return key+'-------------'+value;
}
console.log(sha1('name','zhangsan'))

//可索引接口：数组、对象的约束（不常用）

interface UserArr{
    //索引值为数字类型，元素值为string类型
    [index:number]:string
}
var array:UserArr=['123321','1233213'];
console.log(array[0])

interface UserObj{
    [index:string]:string
}

var object:UserObj={name:'zhangsan'}
console.log(typeof Object.keys(object)[0],typeof object[Object.keys(object)[0]])

//类类型接口：对类的约束 和 抽象类有点相似

interface dongwu{
    name:string;
    eat(str:string):void
}

class Gou implements dongwu{
    name:string;
    constructor(name:string){
        this.name=name
    }
    //可传可不传，要传必须符合接口规范
    eat(){
        console.log(this.name+'chishi')
    }
}
var gouzi=new Gou('xjj')
gouzi.eat()

//接口扩展：接口可以继承接口

interface Dongwu{
    eat():void
}
interface people extends Dongwu{
    work():void
}
class Programmer{
    public name:string;
    constructor(name:string){
        this.name=name
    }
    coding(code:string){
        console.log(this.name+code)
    }
}
class Web extends Programmer implements people{
    constructor(name:string){
        super(name)
    }
    eat(){
        console.log(this.name+'chi')
    }
    work(){
        console.log(this.name+'dadaima')
    }
}
var web=new Web('xiaoli')
web.eat()
web.work()
web.coding('写TS代码')

//泛型-------------------------------------------------------------------------------
//泛型就是解决类 接口 方法的复用性，以及对不特定的数据类型的支持
//可以支持不特定的数据类型

function getdt<T>(value:T):T{
    return value
}

console.log(getdt<number>(123))
console.log(getdt<string>('123'))

class MinClass<T>{
    public list:T[]=[];
    add(num:T){
        this.list.push(num)
    }
    minval():T{
        let min=this.list[0]
        for(let x of this.list){
            if(x<min){
                min=x
            }
        }
        return min
    }
}
var m1=new MinClass<number>();
m1.add(1)
m1.add(3)
m1.add(2)
m1.add(5)
console.log(m1.minval())

var m2=new MinClass<string>()
m2.add('f')
m2.add('b')
m2.add('n')
m2.add('x')
console.log(m2.minval())

//1.泛型接口

// interface configfn{
//     <T>(value:T):T;
// }

// var gtdata:configfn=function<T>(value:T):T{
//     return value
// }

// console.log(gtdata<string>('zhangsan'))
// console.log(gtdata<number>(7766985))

//2.泛型接口

interface configfn<T>{
    (value:T):T
}
function gtdata<T>(value:T):T{
    return value
}
var mygtdata:configfn<string>=gtdata

console.log(mygtdata('zs'))
console.log(gtdata<string>('ww'))

//定义一个user的类，这个类的作用就是映射数据库字段
//然后定义一个mysqDb的类，这个类操作数据库
//然后把user类作为参数传入的mysqlDb中

// class User{
//     username:string | undefined;
//     password:string | undefined;

// }

// class MysqlDb{
//     add(user:User):boolean{
//         console.log(user)
//         return true;
//     }
// }

// var u=new User();
// u.username='zhangsan'
// u.password='123456'

// var db=new MysqlDb();
// db.add(u)



//操作数据库的泛型类
// class MysqlDb<T>{
//     add(info:T):boolean{
//         console.log(info)
//         return true;
//     }
//     update(info:T,id:number):boolean{
//         console.log(info)
//         console.log(id)
//         return true
//     }
// }

// class User{
//     username:string | undefined;
//     password:string | undefined;
// }
// class Article{
//     title:string | undefined;
//     desc:string | undefined;
//     status:string | undefined;
//     constructor(params:{
//         title:string | undefined;
//         desc:string | undefined;
//         status?:string | undefined;
//     }){
//         this.title=params.title
//         this.desc=params.desc
//         this.status=params.status
//     }
// }
//定义一个操作数据库的库 支持Mysql Mssql mongoDb

//Mysql Mssql mongoDb 功能一样，都有add update delete get 方法

//注意：约束统一的规范，以及代码重用

// interface DBI<T>{
//     add(info:T):boolean;
//     update(info:T,id:number):boolean;
//     delete(id:number):boolean;
//     get(id:number):any[];
// }
// //要是实现泛型接口，类也应该是一个泛型类
// class MysqlDb<T> implements DBI<T>{
//     constructor(){
//         console.log('在构造函数中连接到数据库')
//     }
//     add(info: T): boolean {
//         console.log(info);
//         return true
//     }
//     update(info: T, id: number): boolean {
//         throw new Error("Method not implemented.")
//     }
//     delete(id: number): boolean {
//         throw new Error("Method not implemented.")
//     }
//     get(id: number):any[] {
//         throw new Error("Method not implemented.")
//     }
// }
// class MssqlDb<T> implements DBI<T>{
//     add(info: T): boolean {
//         console.log(info);
//         return true
//     }
//     update(info: T, id: number): boolean {
//         throw new Error("Method not implemented.")
//     }
//     delete(id: number): boolean {
//         throw new Error("Method not implemented.")
//     }
//     get(id: number):any[] {
//         var list=[
//             {title:123,
//             status:200},
//             {title:123322,
//             status:20033},
//         ]
//         return list
//     }

// }
// import {MysqlDb,MssqlDb} from './modules/dbutils'
// class User{
//     username:string | undefined;
//     password:string | undefined;
// }
// var u=new User();
// u.username='zhangsan'
// u.password='123456'

// var oMysql=new MysqlDb<User>();

// oMysql.add(u)

// var oMssql=new MssqlDb<User>();
// oMssql.add(u)
// console.log(oMssql.get(1))

//模块
// import {huoqushuju as get,save,dbUrl} from './modules/db';
// import anyname from './modules/db'
// console.log(get())
// save()
// console.log(dbUrl)
// anyname()

//将数据库封装成模块，再使用
// import {User,UserMysql} from './modules/user'

// var u=new User();
// u.username='zhangsan'
// u.password='1234321'
// UserMysql.add(u)

// import {Article,ArticleMssql} from './modules/article'

// console.log(ArticleMssql.get(12))

//命名空间：内部模块。用于组织代码，避免命名冲突
//可以通过export 将命名空间引出，再用import引入 
//例如 export namespace A{
    // ...
// }
namespace A{
    export class dg{
        name:string;
        constructor(name:string){
            this.name=name
        }
        wang(){
            console.log(this.name)
        }
    }
}

var dogg=new A.dg('xjj')
dogg.wang()
//装饰器是一种特殊类型的声明，它可以被附加到类声明，方法，属性，和参数上，可以修改类的行为
//能扩展类的属性和方法

//普通装饰器
// function logClass(params:any){
//     //params就是当前类
//     console.log(params);
//     params.prototype.apiUrl='动态扩展的属性'
//     params.prototype.run=function(){
//         console.log('我是一个方法')
//     }
// }
// @logClass
// class HttpClient{
//     constructor(){

//     }
//     getData(){

//     }
// }
// var http:any=new HttpClient()
// console.log(http.apiUrl)
// http.run()

//装饰器工厂（可传参）
// function logClass(params:string){
//     return function(target:any){
//         console.log(params)
//         console.log(target)
//         target.prototype.apiUrl=params
//     }
// }
// @logClass('http://www.itying.com/api')
// class HttpClient{
//     constructor(){

//     }
//     getData(){
                          
//     }
// }
// var http:any=new HttpClient()
// console.log(http.apiUrl)

/*
    1.类装饰器
    下面是一个重载函数的例子
    类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一参数
    如果类装饰器返回一个值，他会使用提供的构造函数来替换类的声明
*/
// function logClass(target:any){
//     console.log(target)
//     return class extends target{
//         apiUrl:any='updated'
//         getdata(){
//             super.getdata()
//             console.log(this.apiUrl+'?????????????????')
//         }
//         getanother(){
//             console.log('another')
//         }
//     }
// }
// @logClass
// class HttpClient{
//     public apiUrl:string | undefined;
//     constructor(){
//         this.apiUrl='apiurlllll'
//     }
//     getdata(){
//         console.log(this.apiUrl)
//     }
// }

// var http:any=new HttpClient()
// console.log(http.apiUrl)
// http.getdata()
// http.getanother()
/*
    属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
    1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
    2.成员的名字
*/
// function logProperty(params:any){
//     return function(target:any,attr:any){
//         console.log(target)
//         console.log(attr)
//         //在原型对象上定义了一个url，如果对象本身没找到url，就用原型对象上的
//         target[attr]=params
//     }
// }
// class HttpClient{
//     @logProperty('http://www.itying.com/api')
//     public url:any | undefined;
//     constructor(){
//         // this.url='waht'
//     }
//     getdata(){ 
//         console.log(this.url)
//     }
// }
// var http:any=new HttpClient()
// http.getdata()
// console.log(http)

/*
    方法装饰器
    它会被应用到方法的属性描述符上，可以用来实现，修改或替换方法定义

    方法装饰会在运行时传入下列3个参数：
    1 对于静态成员来说时类的构造函数，对于实例成员来说是类的原型对象
    2.成员的名字
    3 成员的属性描述符
*/

// function logMethod(params:any){
//     return function(target:any,methodname:any,desc:any){
//         console.log(target)
//         console.log(methodname)
//         console.log(desc)
//         //扩展属性
//         target.apiurl='xxxx';
//         target.run=function(){
//             console.log('方法。。。。')
//         }
//         //修改装饰器的方法 把装饰器方法里面传入的所有参数改为string类型
//         var oldmethod=desc.value
//         desc.value=function(...args:any[]){
//             args=args.map(value=> String(value))
//             console.log(args,'这里是修改的方法')

//             oldmethod.apply(this,args)
//         }
//     }
// }

// class HttpClient{
    
//     public url:any | undefined;
//     constructor(){
//         this.url='我是原来getdata方法'
//     }
//     @logMethod('params参数值')
//     getdata(...args:any[]){ 
//         console.log(args,'这是apply传来的参数')
//         console.log(this.url)
//     }
// }
// var http:any=new HttpClient()
// console.log(http.apiurl)
// http.run()
// http.getdata(123,'xxxx')

/*
    方法参数装饰器
    参数装饰器表达式在运行时当作函数被调用，可以使用参数装饰器为类的原型添加一些元素数据，3个参数：
    1 对于静态成员来说时类的构造函数，对于实例成员来说是类的原型对象
    2.方法的名字
    3.参数在函数参数列表中的索引
*/

// function logParams(params:any){
//     return function(target:any,methodName:any,paramsIndex:any){
//         console.log(target)
//         console.log(methodName)
//         console.log(paramsIndex)
//     }
// }

// class HttpClient{
    
//     public url:any | undefined;
//     constructor(){

//     }
    
//     getdata(uuid:any, @logParams('uuidxxx') uid:any ){ 
//         console.log(uuid,uid)
//     }
// }

// var http:any=new HttpClient()
// http.getdata(123123,33321)

//装饰器执行顺序

//属性》方法》方法参数》类
//如果有多个同样的装饰器，则是从后往前，从右往左（方法参数装饰器）