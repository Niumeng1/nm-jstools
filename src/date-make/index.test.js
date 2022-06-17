/*
 * @Description: 
 * @Author: 牛猛
 * @Date: 2022-06-17 15:58:26
 * @LastEditTime: 2022-06-17 17:28:39
 * @LastEditors: nm
 * @FilePath: \nm-jstools\src\date-make\index.test.js
 */
import dateUtil from "./index";
test('get current month 01 - current day',()=>{
    expect(dateUtil.getTime()).toEqual(['2022-06-01','2022-06-17']);
})