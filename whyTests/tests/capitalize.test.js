import { strict as assert } from 'assert';
import { capitalize } from '../src/capitalize.js';

assert(capitalize('') === '');
assert(capitalize('hello') === 'Hello');
console.log('Все тесты пройдены!')



// !!! it was before↓
// if (capitalize('hello') !== 'Hello') {
//     throw new Error('Функция работает неверно!');
// }

// if (capitalize('') !== '') {
//     throw new Error('Функция работает неверно!');
// }

// console.log('Все тесты пройдены!')
