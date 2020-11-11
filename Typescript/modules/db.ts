var dbUrl='xxxxxxxxxxxx';

function huoqushuju():any[]{
    console.log('获取数据库的数据')
    return [
        {
            title:123123123
        }
    ]
}

function save(){
    console.log('保存数据库成功')
}
function df(){
    console.log('引用exportdefault')
}
export{huoqushuju,save,dbUrl}
export default df