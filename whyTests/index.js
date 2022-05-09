import { capitalize } from '../src/capitalize';

if (capitalize('hello') !== 'Hello') {
    throw new Error('Функция работает неверно!');
}

if (capitalize('') !== '') {
    throw new Error('Функция работает неверно!');
}

console.log('Все тесты пройдены!')


const capitalize = (text) => {
    if (text === '') {
        return '';
    }
    const firstChar = text[0].toUpperCase();
    const restSubstring = text.slice(1);
    return `${firstChar}${restSubstring}`;
};