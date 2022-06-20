/*
 * @Description: 
 * @Author: 牛猛
 * @Date: 2022-06-15 16:39:10
 * @LastEditTime: 2022-06-20 13:02:15
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
/**
 * 防抖
 * @param {*} callback 回调函数
 * @param {*} delay 毫秒数 ms
 * @returns 
 */
export function debounce(callback,delay){
    let timer = null
    return function(callback,delay){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            callback()
        },delay)
    }
}
/**
 * 节流
 * @param {*} callback 回调函数
 * @param {*} delay 毫秒数 ms
 * @returns 
 */
export function throttle(callback,delay){
    let valid= true
    return function(callback,delay){
        if(!valid){
            return false;
        }
        valid = false;
        setTimeout(()=>{
            callback()
            valid = true
        },delay)
    }
}

