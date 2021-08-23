// Business Logic

function numberRoboNumber(number) {
  let numberUserOutput = [];
  for (let i = 0; i <= number; i++) {
    if (i.toString().includes(3)) {
      numberUserOutput.push("Won't you be my neighbor?");
    } else if (i.toString().includes(2)) {
      numberUserOutput.push("Boop !");
    } else if (i.toString().includes(1)) {
      numberUserOutput.push("Beep !");
    } else {
      numberUserOutput.push(i);
    }
 $("#btnReset").click(function() {
            location.reload();
        });
  };
  return numberUserOutput;

};

//User Logic

$(document).ready(function () {
  $("#calculate").submit(function (event) {
    event.preventDefault();
    let number = $("#numberInput").val();
    let output = numberRoboNumber(number);
    $("#numberOutput").text(output);
  });
});