/*
 * @Description: 
 * @Author: 牛猛
 * @Date: 2022-06-17 15:58:26
 * @LastEditTime: 2022-06-23 18:09:53
 * @LastEditors: nm
 * @FilePath: \nm-jstools\src\mapbox\index.test.js
 */
import mapboxMake from "./index";
test('get current month 01 - current day',()=>{
    let config = {
        map:{
            addSource(){

            },
            addLayer(){}
        }
    }
    expect(mapboxMake.addLayer(config)).toEqual(['2022-06-01','2022-06-23']);
})