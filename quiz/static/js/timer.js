var startTimer = document.getElementById("start-btn"); //Id of Start button
var startTimeField = document.getElementById("startTimeField");
if (startTimer) {
  startTimer.addEventListener("click", function () {
    startTimer = new Date();
    sessionStorage.setItem("startTimer", startTimer);
    console.log("starting time ", startTimer);
  });
}

var endTimer = document.getElementById("finish-btn"); //Id of Finish button
var endTimeField = document.getElementById("endTimeField");
if (endTimer) {
  endTimer.addEventListener("click", function () {
    endTimer = new Date();
    startTimeField.value = sessionStorage.getItem("startTimer");
    endTimeField.value = endTimer;
    console.log("ending time ", endTimer);
  });
}
function ScoreTest(){
var score= document.getElementById("");
if(finalscore)
{
  if (user_answer == correct_answer) {

     
            correct_user_answers.append(user_answer)
            finalscore=score+1;
            score.value=finalscore;
            console.log("finalscore",score);
  }
}
}
// var score= document.getElementById("show-result-btn");
// var finalscore = document.getElementById("finalscore");
// if(score)
// {
//   score.addEventListener("click", function(){
  
//     // finalscore.value=count;
//     finalscore.value=sessionStorage.getItem("finalscore");
//     finalscore.value=count;
//     console.log("finalscore",finalscore);



//   });
// }
