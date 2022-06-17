/*
 * @Description: 
 * @Author: 牛猛
 * @Date: 2022-06-17 15:49:46
 * @LastEditTime: 2022-06-17 17:38:46
 * @LastEditors: nm
 * @FilePath: \nm-jstools\src\data-make\index.test.js
 */

import dataMake from "./index"

test('verification data is null',()=>{
    expect(dataMake.isNull(null)).toBe(true);
})