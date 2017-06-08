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
  {question: "Q1", answer: ["1A1", "1A2", "1A3"], correctAnswer: 0, correct: "CORRECT", is_img: true},
  {question: "Q2", answer: ["2A1", "2A2", "2A3"], correctAnswer: 0, correct: "CORRECT"},
  {question: "Q3", answer: ["3A1", "3A2", "3A3"], correctAnswer: 0, correct: "CORRECT"},
  {question: "Q4", answer: ["4A1", "4A2", "4A3"], correctAnswer: 0, correct: "CORRECT"},
  {question: "Q5", answer: ["5A1", "5A2", "5A3"], correctAnswer: 1, correct: "CORRECT"},
  {question: "Q6", answer: ["6A1", "6A2", "6A3"], correctAnswer: 1, correct: "CORRECT"},
  {question: "Q7", answer: ["7A1", "7A2", "7A3"], correctAnswer: 1, correct: "CORRECT"},
  {question: "Q8", answer: ["8A1", "8A2", "8A3"], correctAnswer: 1, correct: "CORRECT"},
  {question: "Q9", answer: ["9A1", "9A2", "9A3"], correctAnswer: 2, correct: "CORRECT"},
  {question: "Q10", answer: ["10A1", "10A2", "10A3"], correctAnswer: 2, correct: "CORRECT"},
  {question: "Q11", answer: ["11A1", "11A2", "11A3"], correctAnswer: 2, correct: "CORRECT"},
  {question: "Q12", answer: ["12A1", "12A2", "12A3"], correctAnswer: 2, correct: "CORRECT"},
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
    countDownTimer();

    if ($(this).hasClass('correct')) {
      if (currentPlayer === player1) {
        player1.score += 1;

        $('.player1scoreboard').text(player1.score);

      } else {
        player2.score += 1;

        $('.player2scoreboard').text(player2.score);

      }
      // switchTurns();
        switchTurns();
      newQuestion();
    } else {
      alert('Wrong Answer!');
      switchTurns();
      newQuestion();
    }
  });
}
//start button
function countDownTimer() {
var seconds = 4;

// Update the count down every 1 second
var countDown = setInterval(function() {


    // Output the result in an element with id="demo"
    document.getElementById("clock").innerHTML = seconds + "s ";
    seconds--;

    // If the count down is over, write some text
    if (seconds < 0) {
        clearInterval(countDown);

        document.getElementById("clock").innerHTML = "EXPIRED";
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
  alert("player1 score:" + player1.score + ", player2 score:" + player2.score)
  winner();
}
}


setButtons();

function winner(){
  if(player1.score > player2.score){
    alert("Player 1 wins!");
  } else {
    alert("Player 2 wins!");
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
