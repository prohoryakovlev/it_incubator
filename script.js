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
// function setAlarm(employed, vacation) {
//   return employed && !vacation
// }

// CODEWARS  ( Student's Final Grade)
// function finalGrade(e, p) {
//   if (e > 90 || p > 10) {
//     return 100
//   } else if (e > 75 && p >= 5) {
//     return 90
//   } else if (e > 50 && p >= 2) {
//     return 75
//   } else {
//     return 0
//   }
// }

// CODEWARS  ( For Twins: 1. Types)
// function typeValidation(v, t) {
//   return typeof v === t
// }

// CODEWARS  ( Beginner Series #1 School Paperwork)
// const paperwork = (n, m) => (n < 0 || m < 0 ? 0 : n * m)

// CODEWARS  ( isReallyNaN)
// const isReallyNaN = (val) => {
//   return Number.isNaN(val)
// }

// CODEWARS  ( Sum The Strings)
// function sumStr(a, b) {
//   return (Number(a) + Number(b)).toString()
// }

// CODEWARS  ( Enumerable Magic #25 - Take the First N Elements )
// function take(arr, n) {
//   return arr.slice(0, n)
// }

// CODEWARS  ( Reversing Words in a String )
// const reverse = (string) => string.split(' ').reverse().join(' ')

// CODEWARS  ( The Office IV Find a Meeting Room )
// function meeting(x) {
//   const f = x.indexOf('O')
//   return f > -1 ? f : 'None available!'
// }

// // CODEWARS  ( Is he gonna survive? )
// function hero(bullets, dragons) {
//   return dragons * 2 <= bullets
// }

// CODEWARS  ( N-th Power)
// function index(arr, n) {
//   const el = arr[n]
//   if (!el) return -1
//   return el ** n
// }

// CODEWARS  (Sum Arrays)
// function sum(numbers) {
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i]

//   return sum
// }

// CODEWARS  (Find Multiples of a Number)
// function findMultiples(integer, limit) {
//   const arr = []
//   for (let i = integer; i <= limit; i += integer) {
//     arr.push(i)
//   }
//   return arr
// }

// CODEWARS  (Sum of the first nth term of Series)
// function SeriesSum(n) {
//   if (!n) return '0.00'
//   let sum = 1,
//     j = 4
//   for (let i = 1; i < n; i++) {
//     sum += 1 / j
//     j += 3
//   }
//   return sum.toFixed(2)
// }

// CODEWARS  (Mumbling)
// function accum(s) {
//   let res = ''
//   for (let i = 0; i < s.length; i++) {
//     res +=
//       s[i].toUpperCase() +
//       s[i].toLowerCase().repeat(i) +
//       (i < s.length - 1 ? '-' : '')
//   }
//   return res
// }

// CODEWARS  (Find out whether the shape is a cube)
// var cubeChecker = function (volume, side) {
//   if (volume <= 0 || side <= 0) return false
//   return Math.cbrt(volume) === side
// }

// CODEWARS  (Grasshopper - Personalized Message)
// function greet(name, owner) {
//   if (name === owner) {
//     return 'Hello boss'
//   } else {
//     return 'Hello guest'
//   }
// }

// CODEWARS  (Multiplication table for number)
function multiTable(n) {
  let res = ''
  for (let i = 1; i <= 10; i++) {
    res += `${i} * ${n} = ${i * n}`
    if (i < 10) res += '\n'
  }
  return res
}
