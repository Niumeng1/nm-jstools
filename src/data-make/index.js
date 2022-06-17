/*
 * @Description: 基础数据处理
 * @Author: 牛猛
 * @Date: 2022-06-17 15:46:21
 * @LastEditTime: 2022-06-17 15:56:11
 * @LastEditors: nm
 * @FilePath: \nm-jstools\src\data-make\index.js
 */
//生成uuid
 function uuid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
//判断是否为空
 function isNull(params){
    return params === null || params === undefined || params === ''
}

export  {uuid,isNull}