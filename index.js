var readLineSync = require('readline-sync');
var chalk = require('chalk');
var userName = readLineSync.question('What is your name ??');
console.log(`Hi ${userName} ,How well do you know me??`)

var questions=[
  {
    question:'What is my fav ' +chalk.blue('Super hero')+': ',
    answer:'Iron Man'
  },
  {
    question:'What is my fav '+chalk.green('food') +': ',
    answer:'biryani'
  },
  {
    question:'Where do i live: ',
    answer:'bangalore'
  },
  {
    question:'what do i study: ',
    answer:'Computer Science'
  },
  {
    question:'Who is my fav teacher: ',
    answer:'Christina'
  },
]
var highScore=[{
  name:'Susan',
  score:'3'
},{
  name:'Sujatha',
  score:'3'
}]
var score=0
function askQuestion(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer===answer){
    console.log('you are right')
    score++;
  }else{
    console.log('you are wrong the correct answer is :',answer)
  }
  console.log('You have scored :',score)
}
for(var i=0;i<questions.length;i++){
  askQuestion(questions[i].question,questions[i].answer);
}
console.log('----check out high score ------');
for(var i=0;i<highScore.length;i++){
  if(score>highScore[i].score){
    console.log(chalk.red("You have the highest score !!! Congrats !!!"))
    console.log('Score: ',score, ' by :',userName)
  }
  console.log('Score: ',highScore[i].score, ' by :',highScore[i].name)
}