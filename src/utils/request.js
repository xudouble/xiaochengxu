// 封装一个通用的调接口的方法
let request=(path)=>{
    let  url='https://www.zhengzhicheng.cn/api/public/v1/'+path;
    return new Promise (function(resolve,reject){
        mpvue.request({
            url:url,
            success:function(res){
                resolve(res)
            }
        })
    })
}

export default request