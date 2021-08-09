// // Code your solutions in this file

// for (let age = 30; age < 40; age++) {
//   console.log(`I\'m ${age} years old. Happy birthday to Me!`);
//   debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }
//   return gifts;
// }

// wrapGifts(gifts);

// const names = ["Lisa", "Kaitlin", "Jan"];
// const event = "Christmas";

function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return messages;
}

// writeCards(names, holiday);

// To get more acquainted with `while`, your task is to write a function,
// `countDown`, that takes in any positive integer and, starting from that number,
// counts down to zero using `console.log()`. Note that this means that running
// `countdown(10);` would actually log _11_ times:

// ```text
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// ```

function countDown(positiveNumber) {
  while (positiveNumber >= 0) {
    console.log(positiveNumber);
    positiveNumber--;
  }
}
