
 const dateUtil = {
    getTime: () => {
      if (new Date().getMonth() < 9 && new Date().getDate() > 9) {
        return [
          new Date().getFullYear() +
          "-" +
          "0" +
          (new Date().getMonth() + 1) +
          "-" +
          "01",
          new Date().getFullYear() +
          "-" +
          "0" +
          (new Date().getMonth() + 1) +
          "-" +
          new Date().getDate(),
        ];
      } else if (new Date().getMonth() < 9 && new Date().getDate() < 10) {
        return [
          new Date().getFullYear() +
          "-" +
          "0" +
          (new Date().getMonth() + 1) +
          "-" +
          "01",
          new Date().getFullYear() +
          "-" +
          "0" +
          (new Date().getMonth() + 1) +
          "-" +
          "0" +
          new Date().getDate(),
        ];
      } else if (new Date().getMonth() > 8 && new Date().getDate() < 10) {
        return [
          new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1) +
          "-" +
          "01",
          new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1) +
          "-" +
          "0" +
          new Date().getDate(),
        ];
      } else {
        return [
          new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1) +
          "-" +
          "01",
          new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1) +
          "-" +
          new Date().getDate(),
        ];
      }
    },
    getNowTime: () => {
      const yy = new Date().getFullYear();
      const mm =
        new Date().getMonth() + 1 < 10
          ? "0" + (new Date().getMonth() + 1)
          : new Date().getMonth() + 1;
      const dd =
        new Date().getDate() < 10
          ? "0" + new Date().getDate()
          : new Date().getDate();
      const hh = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours();
      const mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      const ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      return yy + "-" + mm + "-" + dd + " " + hh + ":" + mf + ":" + ss;
    },
    getNowTimeDD: () => {
      //获取现在时间 ‘yyyy-mm-dd’
      const yy = new Date().getFullYear();
      const mm =
        new Date().getMonth() + 1 < 10
          ? "0" + (new Date().getMonth() + 1)
          : new Date().getMonth() + 1;
      const dd =
        new Date().getDate() < 10
          ? "0" + new Date().getDate()
          : new Date().getDate();
      const hh = new Date().getHours();
      const mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      const ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      return yy + "-" + mm + "-" + dd;
    },
    // 转换日期格式（此方法常用在日期控件上）
    dateToString: (date) => {
      if (date === undefined || date === "") {
        return "";
      }
      if (typeof date === "string") {
        return date;
      }
      date.setDate(date.getDate() + 1);
      return date.toISOString().slice(0, 10);
    },
  
    // 格式化日期（此方法常用在json的fastTime的转换）
    formatDate: (date, fmt) => {
      if (date !== undefined && date !== null && date !== "") {
        date = new Date(date);
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + "").substr(4 - RegExp.$1.length)
          );
        }
        const o = {
          "M+": date.getMonth() + 1,
          "d+": date.getDate(),
          "h+": date.getHours(),
          "m+": date.getMinutes(),
          "s+": date.getSeconds(),
        };
        for (const k in o) {
          if (new RegExp(`(${k})`).test(fmt)) {
            const str = o[k] + "";
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length === 1 ? str : ("00" + str).substr(str.length)
            );
          }
        }
        return fmt;
      } else {
        return "";
      }
    },
    startAndendTime: (date) => {
      /*
       eg:   ["2021-11-07 12:00:00", "2021-11-24 12:00:00"]
          => ["2021-11-07 00:00:00", "2021-11-24 24:00:00"]
      */
      let time = [];
      const startTime = date[0].slice(0, 10) + ' 00:00:00';
      const endTime = date[1].slice(0, 10) + ' 24:00:00';
      time = [startTime, endTime]
      return time;
    },
    /**
     * 获取前几天或者后几天
     * @param {*} date  当前时间
     * @param {*} day  +/- day
     * @returns 
     */
    getNextDate: (date, day) => {
      var dd = new Date();
      dd.setDate(dd.getDate() + day);
      var y = dd.getFullYear();
      var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
      var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      return y + "-" + m + "-" + d;
    },
  };
  
export default dateUtil;
  