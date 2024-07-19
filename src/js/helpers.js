/**
 * Transforms a string to Capital Case.
 *
 * @param {string} text - The string to transform.
 * @return {string} The transformed string in Capital Case.
 */
export const CapitalCase = function(text) {
    /**
     * Capitalizes the first letter of a string.
     *
     * @param {string} str - The string to capitalize.
     * @return {string} The capitalized string.
     *
     * @example
     * const str = 'hello';
     * const capitalizedStr = capitalize(str);
     * console.log(capitalizedStr); // Output: 'Hello'
     */
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    // Split the string into an array of words.
    const words = text.split(' ');

    // Capitalize the first letter of each word and join them back together.
    return words.map(capitalize).join(' ');
};
