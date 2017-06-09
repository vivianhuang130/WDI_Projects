function startGameButton() {
  $(".start").hide();
  countDownTimer();
}
var player1 = {
  name: "Player 1",
  score: 0
}
var player2 ={
  name: "Player 2",
  score: 0
}
var currentPlayer = player1

function switchTurns() {
  if(currentPlayer == player1) {
  currentPlayer = player2;
  alert("Player 2's turn")

  } else {
    currentPlayer = player1;
    alert("Player 1's turn")
  }
}


var questions = [
  // {question: "6 + 12 / 4 + 2", answer: ["11", "3", "4.7"], correctAnswer: 0},
  {question: "6 + 2 / 2 * 3", answer: ["9", "12", "1.33"], correctAnswer: 0},
  {question: "In HTML, anchor tags create ", answer: ["links", "blocks of text", "a title for the document"], correctAnswer: 0},
  {question: "In CSS, which font property is used to adjust the thickness of the selected text ", answer: ["font-weight", "font-style", "text-transform"], correctAnswer: 0},
  {question: "Inline elements", answer: ["are the same as block elements", "cannot have height or width assigned", "tells the web browser what type of HTML the page uses"], correctAnswer: 1},
  {question: "CSS is an acronym for", answer: ["Cascading Sheets Style", "Cascading Style Sheets", "Cascade Styling Sheets"], correctAnswer: 1},
  {question: "tag for adding an image or video", answer: ["H1 {color: red}", "<img src=", "{img(url): }"], correctAnswer: 1},
  {question: "Clears are used when we want to ", answer: ["turn on floating", "turn off floating", "change the font-size"], correctAnswer: 1},
  {question: "Which answer is not a falsey value? ", answer: ["null", "0", "All number except 0"], correctAnswer: 2},
  {question: "While Loops can run indefinitely when the condition remains", answer: ["false", "neutral", "true"], correctAnswer: 2},
  {question: "What is an Array?", answer: ["similar to a local scope", "A loop", "An ordered list of values"], correctAnswer: 2},
  {question: "Which of the following answers is an object?", answer: ["{color= purple};", "{color- purple};", "{color: purple};"], correctAnswer: 2},
]
var randomGenQuestions = Math.floor(Math.random() * questions.length);


function startGameQuestion(){
  randomGenQuestions = Math.floor(Math.random() * questions.length);
  console.log(randomGenQuestions);
  return questions[randomGenQuestions];

}
var currentQuestion = startGameQuestion();


// setting the current question
$("#question-text").text(currentQuestion.question);

// displaying the initial possible answers
function setButtons() {
  var correctIndex = currentQuestion.correctAnswer;
  for (var i = 0; i < currentQuestion.answer.length; i++) {

    var question = currentQuestion.answer[i];
    var $btn = $("<button>", {class: 'btn', id: i, text: question});

    // adding class "correct" if question is the correct answer
    if (correctIndex === i) {
      $btn.addClass('correct');
    }

    $btn.appendTo($('#answers'))
  }

  $('.btn').on('click', function() {


    if ($(this).hasClass('correct')) {
      if (currentPlayer === player1) {
        player1.score += 1;

        $('.player1scoreboard').text(player1.score);
        $( ".cup1" ).animate({ "top": "-=50px" }, "slow" )
        newQuestion()
        switchTurns()

      } else {
        player2.score += 1;

        $('.player2scoreboard').text(player2.score);
        $( ".cup2" ).animate({ "top": "-=50px" }, "slow" )
        newQuestion()
        switchTurns()

      }
      //   switchTurns();
      // newQuestion();
    } else {
      alert('Wrong Answer!');
      // switchTurns();
      // newQuestion();
    }
  });
}
//start button
function countDownTimer() {
var seconds = 6;

// Update the count down every 1 second
var countDown = setInterval(function() {


    // Output the result in an element with id="demo"
    document.getElementById("clock").innerHTML = seconds + "s ";
    seconds--;

    // If the count down is over, write some text
    if (seconds < 0) {

        newQuestion()
        switchTurns()
        document.getElementById("clock").innerHTML = " ";
        // seconds = 4
        countDownTimer()
    }
}, 1000);


}
function newQuestion(){
questions.splice(randomGenQuestions, 1);
if(questions.length > 0){
//regeneration the new currentQuestion
currentQuestion = startGameQuestion()
  //reset the question-text div
$("#question-text").text(currentQuestion.question);
  //delete the old button and create the new button
  $("#answers").empty();
  setButtons()

} else {
  alert("Player 1 score:" + player1.score + ", player 2 score:" + player2.score)
  winner();
  clearInterval(countDown)
}
}


setButtons();

function winner(){
  if(player1.score > player2.score){
    alert("Player 1 wins!");
  } else if (player1.score < player2.score){
    alert("Player 2 wins!");
  } else {
    alert("It's a tie!")
  }
}



// function countDownTimer(){
//
//
//   var seconds = 4;
//
//   // Update the count down every 1 second
//   var countDown = setInterval(function() {
//
//
//       // Output the result in an element with id="demo"
//       $("#clock").html(seconds + 's');
//         seconds--;
//
//
//       // If the count down is over, write some text
//       if (seconds < 0) {
//           clearInterval(countDown);
//           $("#clock").html("Time's up!");
//       }
//   }, 1000);
//
//
//
// }
// have a timer
//timer at 0, end game
//display who won

// $(".btn").click(function(){
//   alert('clicked');
//   if($(this).attr("id")==currentQuestion.correctAnswer){
//     $("#question-text").text(questions.correct); // HELP how to show text in question-text div
//     switchTurns();
//     newQuestion();
//     //add animation
//     //grab css selector and change css
//     //point ++ .text player.score=+1
//   } else {
//     console.log("you're wrong");
//   }
// });

// $('.btn').on('click', function() {
//   alert('clicked');
//   if($(this).attr("id")==currentQuestion.correctAnswer){
//     $("#question-text").text(questions.correct); // HELP how to show text in question-text div
//     switchTurns();
//     newQuestion();
//     //add animation
//     //grab css selector and change css
//     //point ++ .text player.score=+1
//   } else {
//     console.log("you're wrong");
//   }
// });

// move on to the next question
// function newQuestion(){
// questions.splice(randomGenQuestions, 1);
// if(questions.length > 0){
// //regeneration the new currentQuestion
// currentQuestion = startGameQuestion()
//   //reset the question-text div
// $("#question-text").text(currentQuestion.question);
//   //delete the old button and create the new button
//   $("#answers").empty();
//   setButtons()
//
// } else {
//   alert("player1 score:" + player1.score + ", player2 score:" + player2.score)
// }
// }
//
//
// setButtons();







// console.log(currentQuestion);
// $("#answers").text(currentQuestion.answer);




//take the array of answers and target the buttons
//make the answers different
// function correct (val){
//   $.each(val, function(key, value) {
//     currentQuestion = randomGenQuestions;
//   console.log(key + ": " + value);
// });
// }
// correct(questions);

//link answer to user input
//if answer and user input are the same
//increment 1 to that user
