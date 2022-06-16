<!--
 * @Description: 
 * @Author: 牛猛
 * @Date: 2022-06-15 16:45:55
 * @LastEditTime: 2022-06-16 15:05:35
 * @LastEditors: nm
 * @FilePath: \nm-jstools\README.md
-->
# nm-jstools
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