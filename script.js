//JavaScript function that 
//returns a passed string with letters in alphabetical order.

function alphabet(str123)
 	 {
		return str123.split('').sort().join('')
  	 }
console.log(alphabet("webmaster"))