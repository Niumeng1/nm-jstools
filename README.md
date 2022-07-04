<!--
 * @Description: 
 * @Author: 牛猛
 * @Date: 2022-06-15 16:45:55
 * @LastEditTime: 2022-06-20 13:05:15
 * @LastEditors: nm
 * @FilePath: \nm-jstools\README.md
-->
# nm-jstools
[![CircleCI](https://circleci.com/gh/SortableJS/Vue.Draggable.svg?style=shield)](https://circleci.com/gh/SortableJS/Vue.Draggable)
[![Coverage](https://codecov.io/gh/SortableJS/Vue.Draggable/branch/master/graph/badge.svg)](https://codecov.io/gh/SortableJS/Vue.Draggable)
[![codebeat badge](https://codebeat.co/badges/7a6c27c8-2d0b-47b9-af55-c2eea966e713)](https://codebeat.co/projects/github-com-sortablejs-vue-draggable-master)
[![GitHub open issues](https://img.shields.io/github/issues/SortableJS/Vue.Draggable.svg)](https://github.com/SortableJS/Vue.Draggable/issues?q=is%3Aopen+is%3Aissue)
[![npm download](https://img.shields.io/npm/dt/vuedraggable.svg)](https://www.npmjs.com/package/vuedraggable)
[![npm download per month](https://img.shields.io/npm/dm/nm-jstools.svg)](https://www.npmjs.com/package/m-jstools)
[![npm version](https://img.shields.io/npm/v/vuedraggable.svg)](https://www.npmjs.com/package/vuedraggable)
[![MIT License](https://img.shields.io/github/license/SortableJS/Vue.Draggable.svg)](https://github.com/SortableJS/Vue.Draggable/blob/master/LICENSE)
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