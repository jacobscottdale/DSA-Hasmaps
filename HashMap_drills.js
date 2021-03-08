const HashMap = require('./HashMap');

HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;
// #1 Create a HashMap Class
const items = [
  { "Hobbit": "Bilbo" },
  { "Hobbit": "Frodo" },
  { "Wizard": "Gandalf" },
  { "Human": "Aragorn" },
  { "Elf": "Legolas" },
  { "Maiar": "The Necromancer" },
  { "Maiar": "Sauron" },
  { "RingBearer": "Gollum" },
  { "LadyOfLight": "Galadriel" },
  { "HalfElven": "Arwen" },
  { "Ent": "Treebeard" }
];

const main = () => {
  lotr = new HashMap();

  for (let i = 0; i < items.length; i++) {

    lotr.set(Object.keys(items[i])[0], Object.values(items[i])[0]);

  }
  console.log(lotr.get('Maiar'));
};

// main();

/*
1. Not all items were hashed, since duplicate keys overwrote the previous key/value pairs

2. 'Sauron' and 'Frodo' respectively. These were the latest values associated with the keys 'Maiar' and 'Hobbit', so they overwrote the previous ones

3. The capacity has expanded to 24 because the MAX_LOAD_RATIO === 0.5, meaning that once the hash map has reached a length equaling half the capacity, a resize is triggered. The SIZE_RATIO === 3, so the resize triples the capacity to 24 (until length equals 12 and the resize changes the capacity to 72)
*/

/* #2
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

Output: 
20
10

Because they are using the same keys, the last value will rewrite the previous value
*/

/* #3 Demonstrate understanding of hash maps
1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length 11 using open addressing and a hash function k mod m, where k is the key and m is the length.

[ 22, 88, undefined, undefined, 4, 15, 28, 17, 59, 31, 10]

2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with collisions resolved by separate chaining. Let the hash table have a length m = 9, and let the hash function be k mod m.

[undefined , [28, 19, 10], 20, 12, undefined, 5, [15, 33], undefined, 17]

*/

// #4 Remove Duplicates

const rmDuplicates = (string) => {
  let stringHash = new HashMap();
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    let char = string.slice(i, i + 1);
    if (!stringHash.get(char)) {
      stringHash.set(char, char);
      newString += char;
    }
  }
  console.log(newString);
};

//rmDuplicates('google all that you think can think of')
// Output: 'Helo'

// #5 Any permutation a palindrome

const anagramPalindrome = (string) => {
  let stringHash = new HashMap();
  string.split('').forEach(char => {
    if (!stringHash.get(char)) {
      stringHash.set(char, 1);
    } else {
      
    }
  });


  
};

anagramPalindrome('abb');

/*
5. Any permutation a palindrome
Write an algorithm to check whether any anagram of some string is a palindrome. Given some string, "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to the anagram "racecar", which itself is a palindrome. In contrast, given the word "north", the algorithm should return false, because there's no anagram for "north" that would be a palindrome.

6. Anagram grouping
Write an algorithm to group a list of words into anagrams. For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].

7. Separate Chaining
Write another hash map implementation as above, but use separate chaining as the collision resolution mechanism.

Test your hash map with the same values from the lotr hash map.
*/