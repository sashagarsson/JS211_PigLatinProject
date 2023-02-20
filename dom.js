  
const pigLatin = () => {

  let word = document.getElementById('user-input').value

  // var that is trimmed and lowercase
  word = word.trim().toLowerCase()
  // 1. if word begins with a vowel adds "yay"
  // 2. if word begins with a consonant splices off beginning, returns word with new ending.
  // 3. if word begins with two consonant splices off beginning, returns word with new ending.
  // 4. if multiple words, create array of words, loop over them, and creates a new array with the new words.  
  
  // array of vowels to compare to the word
  let vowels = ['a', 'e', 'i', 'o', 'u']
  

  for(let letter = 0; letter < word.length; letter++){
    // loop through the letters in the word and find the first vowel
    // does the first letter show up in the vowels array?

    if (vowels.includes(word[0])) {
      
      return document.getElementById('display-element').innerHTML = word + "yay"
    }
    else if (vowels.includes(word[1])) {
  
      return document.getElementById('display-element').innerHTML = word.slice(1) + word.slice(0,1) + "ay"

    }
    else  {

      return document.getElementById('display-element').innerHTML = word.slice(2) + word.slice(0,2) + "ay"

    }

  }
 

}


  
  
  
  
  