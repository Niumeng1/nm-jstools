/*
 * @Description: 
 * @Author: 牛猛
 * @Date: 2022-07-12 09:52:00
 * @LastEditTime: 2022-07-12 10:04:29
 * @LastEditors: nm
 * @FilePath: \nm-jstools\src\socket\socket.test.js
 */
import{WBS}  from './index'
test('create socket conn ',()=>{
   let socket = new WBS({ip:'ws://121.40.165.18:8800',
   messageHandler:e=>{
    console.log(e)
   }
            })
            let parms = {
                id:1
            };
    expect(socket.sendMessage(parms)).toMatch('')
})