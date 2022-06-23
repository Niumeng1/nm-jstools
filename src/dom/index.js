/*
 * @Description: 
 * @Author: 牛猛
 * @Date: 2022-06-22 16:54:01
 * @LastEditTime: 2022-06-22 16:56:32
 * @LastEditors: nm
 * @FilePath: \nm-jstools\src\dom\index.js
 */
const domUtil = {
    setStyle:(event,parentNum,style)=>{
        let trs = event.target.parentElement.parentElement.parentElement.children;
        for (let i = 0; i < trs.length; i++) {
          console.log(trs[i]);
          trs[i].style.background = "#ffffff";
          trs[i].style.color = "#000000";
        }
        event.target.parentElement.parentElement.style.background = "#0089ff";
        event.target.parentElement.parentElement.style.color = "#ffffff";
    },
}

export default domUtil;