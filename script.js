// task 33
// const lastName = 'Lovelace'
// const secondToLastLetterOfLastName = lastName[lastName.length - 2] // Change this line
// console.log(secondToLastLetterOfLastName)

// task 34
// const myNoun = 'dog'
// const myAdjective = 'big'
// const myVerb = 'ran'
// const myAdverb = 'quickly'

// const wordBlanks =
//   myNoun + ' ' + myNoun + ' ' + myVerb + ' ' + myAdjective + ' ' + myAdverb // Change this line
// console.log(wordBlanks)

// task 35
// Only change code below this line
// const myArray = ['peanut butter', 25]
// console.log(myArray)

// task 36
// Only change code below this line
// const myArray = [
//   ['Prohor', 25],
//   ['Frontend', 'junor'],
// ]
// console.log(myArray)

// task 37
// const myArray = [50, 60, 70]
// const myData = myArray[0]
// console.log(myData)

// task 38
// const myArray = [18, 64, 99]
// myArray[0] = 45
// console.log(myArray)

// task 39
// const myArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14],
// ]
// const myData = myArray[2][1]
// console.log(myData)

// task 44
// const myArray = [
//   ['John', 23],
//   ['cat', 2],
// ]
// myArray.push(['dog', 3])
// console.log(myArray)

// task 45
// const myArray = [
//   ['John', 23],
//   ['cat', 2],
// ]
// const removedFromMyArray = myArray.pop()
// console.log(myArray)
// console.log(removedFromMyArray)

// task 46
// const myArray = [
//   ['John', 23],
//   ['dog', 3],
// ]
// const removedFromMyArray = myArray.shift('shifted off')
// console.log(myArray)
// console.log(removedFromMyArray)

// task 47
// const myArray = [
//   ['John', 23],
//   ['dog', 3],
// ]
// myArray.shift()
// myArray.unshift(['Paul', 35])
// console.log(myArray)

// task 48
// const myList = [
//   ['Prohor', 25],
//   ['Yakovelv', 1997],
//   ['Cheboksary', 2022],
//   ['Frontend', 2021],
//   ['Frehds', 2000],
// ]
// console.log(myList)

// CODEWARS  (Reverse List Order)
// Examples (Input -> Output)
// // * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// // * [9, 2, 0, 7]  -> [7, 0, 2, 9]

// function reverseList(list) {
//   return list.reverse()
// }

// CODEWARS  (Convert a String to a Number!)
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7
// const stringToNumber = str => +str;

// CODEWARS  (Sentence Smash)
// ['hello', 'world', 'this', 'is', 'great']  => 'hello world this is great'
// const smash = (w) => w.join(' ')

// CODEWARS  (Reversed sequence)
// const reverseSeq = (n) => {
//   const arr = []
//   for (let i = n; i > 0; i--) {
//     arr.push(i)
//   }

//   return arr
// }

// CODEWARS  (Convert to Binary)
// function toBinary(n) {
//   return Number(n.toString(2))
// }

// CODEWARS  (Difference of Volumes of Cuboids)
// function findDifference(a, b) {
//   return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2])
// }

// CODEWARS  (Sleigh Authentication)
// function Sleigh() {}
// Sleigh.prototype.authenticate = function (name, password) {
//   return name === 'Santa Claus' && password === 'Ho Ho Ho!'
// }

// CODEWARS  (Convert number to reversed array of digits)
// function digitize(n) {
//   return n.toString().split('').reverse().map(Number)
// }

// CODEWARS  (Keep Hydrated!)
// function litres(time) {
//   return Math.floor(time * 0.5)
// }

// CODEWARS  (Training JS #3: Basic data types--String)
// var a1 = 'A',
//   a2 = 'a',
//   b1 = 'B',
//   b2 = 'b',
//   c1 = 'C',
//   c2 = 'c',
//   d1 = 'D',
//   d2 = 'd',
//   e1 = 'E',
//   e2 = 'e',
//   n1 = 'N',
//   n2 = 'n'

// const Dad = () => d1 + a2 + d2
// const Bee = () => b1 + e2 + e2
// const banana = () => b2 + a2 + n2 + a2 + n2 + a2

// const answer1 = () => 'no'
// const answer2 = () => 'no'
// const answer3 = () => 'yes'

// CODEWARS  (Training JS #4: Basic data types--Array)
// function getLength(arr) {
//   //return length of arr
//   return arr.length
// }
// function getFirst(arr) {
//   //return the first element of arr
//   return arr[0]
// }
// function getLast(arr) {
//   //return the last element of arr
//   return arr[arr.length - 1]
// }
// function pushElement(arr) {
//   var el = 1
//   //push el to arr
//   arr.push(el)
//   return arr
// }
// function popElement(arr) {
//   //pop an element from arr
//   arr.pop(arr)
//   return arr
// }

// CODEWARS  ( Set Alarm)
function setAlarm(employed, vacation) {
  return employed && !vacation
}
