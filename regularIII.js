function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must capture ALL occurrences of numbers in a string.
     */
    const re = new RegExp('\\d+', 'g');

    // const re = /\d+/g;
    
    /*
     * Do not remove the return statement
     */
    return re;
}