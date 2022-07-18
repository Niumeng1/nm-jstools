<!--
 * @Description: 
 * @Author: 牛猛
 * @Date: 2022-06-15 16:45:55
 * @LastEditTime: 2022-07-18 17:10:46
 * @LastEditors: nm
 * @FilePath: \nm-jstools\README.md
-->
# nm-jstools



[![npm download per month](https://img.shields.io/npm/dm/nm-jstools.svg)](https://www.npmjs.com/package/nm-jstools)
[![npm version](https://img.shields.io/npm/v/nm-jstools.svg)](https://www.npmjs.com/package/nm-jstools)

For like-minded people, please contact QQ, wx:875347807
* Collect general JS algorithms
* Including DOM operation, JS operation and CSS operation

## install
```
npm i -D nm-jstools
```

## use
```
import * as xxx from 'nm-jstools'

xxx.func()
eg: xxx.getTypeOf('007')
```
### func1: check data type
```
/*
* params : any data
* return: data type
*/
xxx.getTypeOf(params)

```


### func2: data unique
```
/*
* params : array / string
* return: Data De duplication
*/
xxx.unique(params)
```
### func3: mobileCheck
```
/*
* params : mobile 
* return: boolean (true/false)
*/
xxx.Validate.mobileCheck(1820035025)
```

### obj: data-make
```
 console.log(xxx.dataMake)

```
### obj: date-make
```
 console.log(xxx.dataMake)
 
```
### fun4: debounce
```
xxx.debounce(fn,200)
```

### throttle
```
xxx.throttle(fn,200)
```