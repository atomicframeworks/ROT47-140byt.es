var f = function(
    a // input text 
){
    // Replace all everything but whitespace
    return a.replace(/[^ ]/g, function(b){
        // Rotate character index by adding 47
		b = b.charCodeAt() + 47;
		// If the result is > 126 (the max) loop to the beginning (the subset of character is 94)
		b > 126 ? b -= 94 : 0;
		// Return the new character from it's code
		return String.fromCharCode(b)
	})
}