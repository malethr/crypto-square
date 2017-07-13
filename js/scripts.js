//Business Logic
var message = "";
var cryptonize = function(message){
var punctuation =  message.replace(/[.,'?\/#!$%\^&\*;:{}=\-_`~()]/g,"");
var noSpace = punctuation.replace(/[" "]/g,"");
var lower = noSpace.toLowerCase();
var codeLength= lower.length;
var sqr= Math.sqrt(codeLength);
var column =Math.round(sqr);
var row = "";
  if (column >= sqr) {
    row = column;
  } else {
    row= column + 1;
  };
  var colCut = [];
  for (var i = 0; i < row; i++) {
  colCut.push(lower.slice(column*i, column*(i+1)));
  }
    var holder = "";
    var answer = [];
     for ( var k = 0; k < column; k++) {
       for ( var j = 0; j < row; j++) {
         if (colCut[j][k] === undefined) {
           continue;
         }
         holder += colCut[j][k];
         if (holder.length === 5) {
            answer.push(holder);
            holder = "";
         }
       }
     }
  answer.push(holder);
  alert(answer);
};


// UI Logic
$(document).ready(function () {
  $(".crypto-form").submit(function(event) {
    event.preventDefault();
    message = $("#userText").val();
    var result = cryptonize(message);

    $("#result").show(result);




  });
});
