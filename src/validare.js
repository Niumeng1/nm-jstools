/*
 * @Description: 
 * @Author: 牛猛
 * @Date: 2022-06-16 09:58:48
 * @LastEditTime: 2022-06-16 09:58:53
 * @LastEditors: nm
 * @FilePath: \nm-jstools\src\validare.js
 */
const Validate = {
    /**
     * 手机号校验
     */
    mobileCheck: (mobile) => {
        let reg = /^[1][3,4,5,7,8][0-9]{9}$/
        return reg.test(mobile)
    }
}

export default Validate