// console.log(__dirname);
// console.log(__filename);

// var time = 0;

// var timer = setInterval(() => {
//   time += 4;
//   console.log(time + " ini akan muncul pada 2 detik");
//   if (time > 5) {
//     clearInterval(timer);
//   }
// }, 1000
// );

var hayi = function(arr) {
  return "there are " + arr.length + " element in this array";
};

var pop = function(a, b) {
  return `this is me tetete ${a + b}`;
};

let mie = (a, b) => {
  return `aye aye ${a * b}`;
};

module.exports = {
  hayi,
  pop,
  mie
};
