//Business Logic












$(document).ready(function(){
  $(".crypto-form").submit(function(event){
    event.preventDefault();

    var message = $("#userText").val();
    var punctuation = message.replace(/[.,'?\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var removeSpace = punctuation.replace(/\s+/g, '');
    var lowerCase = removeSpace.toLowerCase();
    var codeLength = lowerCase.length;
    var squareRoot = Math.sqrt(codeLength);
    var columns = parseInt(squareRoot.toFixed());
    var rows;
    var codeOutputArray = lowerCase.split("");

    if (columns >= squareRoot) {
        rows = columns;
    } else {
        rows = columns + 1;
    }



    // alert(removeSpace);
    // alert(lowerCase);
    alert(squareRoot);
    alert(columns);
    alert(rows);
    alert(codeOutputArray);




  });
});













// $(document).ready(function(){
//   $(".crypto-form").submit(function(event){
//     event.preventDefault();
//
//     var userInput = $("#userText").val();
//     var result = userInput
//
//     $("#result").text(result);
//   });
// });
