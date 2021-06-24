'use strict'

/**SetInterval */

function printNumber(from, to) {
   let start = Math.round(from)
   let step = setInterval(() => {
      console.log(start);
      if (start == Math.round(to)) {
         clearInterval(step);
      }
      start++;
   }, 2000);
}

/**SetTimeout */

// function printNumber(from, to) {
//    let start = Math.round(from);

//    function counting() {
//       console.log(start);
//       if (start == Math.round(to)) {
//          clearInterval(step);
//       }
//       start++;
//    }

//    counting();
//    let step = setInterval(counting, 2000)
// }


printNumber(2.5, 8)