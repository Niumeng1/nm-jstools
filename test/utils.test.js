/*
 * @Description: 
 * @Author: 牛猛
 * @Date: 2022-06-16 10:23:45
 * @LastEditTime: 2022-06-16 11:52:59
 * @LastEditors: nm
 * @FilePath: \nm-jstools\test\utils.test.js
 */

import {getTypeOf,unique} from '../src/utils'
test('1 to number', () => {
    expect(getTypeOf(1)).toBe('Number');
  });

  test("['1','2','3','2'] to ['1','2','3']", () => {
    expect(unique(['1','2','3','2'])).toEqual(['1','2','3']);
  });