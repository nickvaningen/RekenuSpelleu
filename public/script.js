
const problem = document.getElementById('Problem');
const answer = document.getElementById('Answerbox')
const feedback = document.getElementById('Feedback');
const level_text = document.getElementById('Level');
const score_text = document.getElementById('Score')
var score = 0;
var correct = 0;
var level = 1;
var first_Number = 0;
var second_Number = 0;
var third_Number = 0;
var forth_Number = 0;



var prob = getProblem();
problem.innerHTML = "Problem:" + "<br>" + prob;
score_text.innerHTML = "Jou score is:" + "<br>" + score;
level_text.innerHTML = "Jou level is:" + "<br>" + level;


function getProblem(){
      let ans = null;
  switch (level) {

    case 1:
      ans = getNumber() + "*" + getNumber();
      break;
    case 2:
      first_Number = getNumber();
      second_Number = getNumber() * first_Number;
      ans = first_Number + "*" + "X" + "= " + second_Number + ". Wat zal X zijn?";
      break;
    case 3:
      ans = getNumber() + "+" + getNumber() + "*" + getNumber();
      break;
    case 4:
      first_Number = getNumber();
      second_Number = getNumber();
      third_Number = getNumber();
      forth_Number = second_Number * third_Number + first_Number;
      ans = first_Number + "+" + second_Number + "*" + "X" + "= " + forth_Number + ".wat moet X zijn? ";
      break;
    default:

  }

  //let ans = getNumber() + "*" + getNumber();
  return ans;
}

function getNumber() {
  return Math.floor(Math.random()*9)+1;
}

addEventListener('keydown',(e)=>{
  if (e.key == "Enter"){
    //console.log(answer.value);



    if (level == 2 || level >= 4){
      if (level == 2) {

        if (answer.value == second_Number / first_Number) {
          feedback.innerHTML = "heeeey hooooy je heb het goed"
          score+= 100;
          correct++;
          }
          else {
          feedback.innerHTML = "nope dat is fout ";
          score-= 50;
          }

      } else {

        if (answer.value == third_Number){
          feedback.innerHTML = "Yeay! je hebt het goed!"
          score+= 100;
          correct++;
          }
          else {
          feedback.innerHTML = "ahhwww. je hebt verkeerd probeer het goede getal te raden.";
          score-= 50;
          }

      }






      }  else {

        if(answer.value == eval(prob)){
          feedback.innerHTML = "lekker bezig je heb het goed"
          score+= 100;
          correct++;
        }
        else {
        feedback.innerHTML = "dat is dus niet goed";
        score-= 50;
        }

      }

      if (correct >= 9 && level != 4){
        level++;
        correct = 0;
      }

    prob = getProblem();
    answer.value = null;
    problem.innerHTML = "Problem:" + "<br>" + prob;
    score_text.innerHTML = "Jou score is:" + "<br>" + score;
    console.log(correct);
    level_text.innerHTML = "Jou level is:" + "<br>" + level;

    }



})
