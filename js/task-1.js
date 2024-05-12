'use strict'
console.log("-----1st task-----");

function slugify(title) {
  /// return split to lower case
  //divide split to words
  //connect words  by "-";
  slug = title.split(" ");
  //return 
  return slug.join("-").toLowerCase();
}
console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

console.log("-----1st task end-----");