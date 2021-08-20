// Business Logic

//JavaScript Demo: Statement - If...Else

// function testNum(a) {
//   let result;
//   if (a > 0) {
//     result = 'positive';
//   } else {
//     result = 'NOT positive';
//   }
//   return result;
// }
// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement
function numberRoboNumber(number) {
  let numberUserOutput = [];
  for (let i = 0; i <= number; i++) {
    if (i.toString().includes(3)) {
      numberUserOutput.push("Won't you be my neighbor?");
    } else if (i.toString().inclues(2)) {
      numberUserOutput.push("Boop !");
    } else if (i.toString().includes(1)) {
      numberUserOutput.push("Beep !");
    } else {
      numberUserOutput.push(i);
    }
  };
  return numberUserOutput;
};

//User Logic

$(document).ready(function () {
  $("#calculate").submit(function (event) {
    event.preventDefault();
    let number = $("#numberInput").val();
    let output = numberRoboNumber(number);
    $("numberOutput").text(output);
  });
});