function showAnswers(){
  var $answerChoices = $('#answerChoices');
  $(answerChoices).append("<button class='answerButton' data-answerid='a'>" + questions[randomQuestion].answers.a + "</button>");
  $(answerChoices).append("<button class='answerButton' data-answerid='b'>" + questions[randomQuestion].answers.b + "</button>");
  $(answerChoices).append("<button class='answerButton' data-answerid='c'>" + questions[randomQuestion].answers.c + "</button>");
  $(answerChoices).append("<button class='answerButton' data-answerid='d'>" + questions[randomQuestion].answers.d + "</button>");
  $(".answerButton").click(function(){
        console.log("You clicked answer: " + $(this).data("answerid"));
        checkAnswers($(this).data("answerid"))
  });
};
showAnswers();

  function checkAnswers(answerLetter){
    var player1 = 0;

    if (answerLetter === questions[randomQuestion].correctAnswer){
      alert("Correct answer!");
      return true;
      player1++;

    }else{
      alert("Wrong answer.");
      return false;
    }
    return player1;
