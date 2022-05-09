export const capitalize = (text = 42) => {
    if (text === '') {
        return '';
    }
    const firstChar = text[0].toUpperCase();
    const restSubstring = text.slice(1);
    return `${firstChar}${restSubstring}`;
};
