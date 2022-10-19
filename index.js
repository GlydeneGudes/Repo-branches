//JavaScript function that accepts a string as a 
//parameter and converts the first letter of each word of the string in upper case.


const UpperFirstLetter = (phrase) => {return phrase.toLowerCase().split(' ').map
				(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}

let result = UpperFirstLetter('the quick brown fox')
console.log(result)