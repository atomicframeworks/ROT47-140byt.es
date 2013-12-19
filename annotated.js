function r(
    a, 	// Input text
    b   // Will be undefined at first ++undefined results in NaN which is falsy. Subsequently b will be the index of match which will test true so the character will be rotated
){
    return ++b ?                                                            // Will return a.replace when used by itself. When used as a replacement function it will return the new charater due to the fact that b is being set.
        String.fromCharCode((a=a.charCodeAt()+47, a > 126 ? a - 94 : a))    // Rotate character index by adding 47. If the result is > 126 (the max) loop to the beginning by subtracting 94
        : a.replace(/[^ ]/g, r)                                             // Replace everything but whitespace using this function (r)
}