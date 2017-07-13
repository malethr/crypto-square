$(document).ready(function(){
  $(".crypto-form").submit(function(event){
    event.preventDefault();

    var message = $("#userText").val();
    var punctuation = message.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var removeSpace = punctuation.replace(/\s+/g, '');
    var lowerCase = removeSpace.toLowerCase();
    var codeLength = lowerCase.length;
    var squareRoot = Math.sqrt(codeLength);
    var columns = squareRoot.toFixed();
    var rows;

    if (column >= squareRoot) {
        rows = columns
      else{
        rows = columns + 1
      }

    }

    alert(removeSpace);
    alert(lowerCase);
    alert(squareRoot);
    alert(columns);
    alert(row);




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
