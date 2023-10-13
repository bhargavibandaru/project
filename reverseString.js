function reverseWordsInString(input) {
  const words = input.split(' '); // Split the input string into an array of words
  const reversedWords = words.map(word => {
    return word.split('').reverse().join(''); // Reverse each word
  });

  const reversedString = reversedWords.join(' '); // Join the reversed words back into a string
  return reversedString;
}

const inputString = "this is bhargavi";
const reversedOutput = reverseWordsInString(inputString);
console.log(reversedOutput); // Outputs: "siht si ivagrahb"
