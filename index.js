const sentence = prompt('Enter a Sentence: ');
const oldWord = prompt('Enter the word you want to replace');
const newWord = prompt('Enter the word you want to replace with');
const subString = prompt ('Enter the substring you want to check')
const wordCount = sentence.split(' ').length

const replaceWord = sentence.replace(oldWord, newWord);

const checkSubstring = sentence.includes(replaceWord)

const ans  = `Sentence: ${sentence}<br>Number of words in this sentence: ${wordCount}<br>After replacement of words: ${replaceWord}<br>Is the word in this sentence? ${checkSubstring}`

document.getElementById('out').innerHTML = ans
