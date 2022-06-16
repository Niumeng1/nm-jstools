/*
 * @Description: 
 * @Author: 牛猛
 * @Date: 2022-06-15 16:39:10
 * @LastEditTime: 2022-06-16 14:47:27
 * @LastEditors: nm
 * @FilePath: \nm-jstools\src\utils.js
 */

/**
     * 获取数据类型
     * @param params 
     * @returns 'String','Number'...
     */
export  function getTypeOf(params){
    let type = Object.prototype.toString.call(params)
    return type.match(/\[\w+\W(\w+)\]$/)[1]
}

 /**
     * 数组，字符串去重
     * @param Array,String
     * @returns 
     */
export  function unique(params){
    console.log(params)
    if (getTypeOf(params) === 'Array') {
        return [...new Set(params)]
    }
    if (getTypeOf(params) === 'String') {
        let obj = {}
        let str = ''
        for(let i = 0, len = params.length; i < len; i++) {
            if (obj[params[i]]) {
                str += params[i]
                obj[params[i]] = true
            }
        }
        return str
    }
    
}

