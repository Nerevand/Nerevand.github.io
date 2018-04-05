var body = document.body;
var main = document.createElement("div");
main.className = "main";

var topMain = document.createElement("div");
var hintTop = document.createElement("div");
hintTop.className = "hint";
var hintOne = document.createElement("div");
hintOne.className = "hintOne hintBlock";
var hintTwo = document.createElement("div");
hintTwo.className = "hintTwo hintBlock";
var hintThree = document.createElement("div");
hintThree.className = "hintThree hintBlock";

var center = document.createElement("div");
var bot = document.createElement("div");
topMain.className = "topMain";
center.className = "center";
bot.className = "bot";
var centerMain = document.createElement("div");
centerMain.className = "centerMain";
var img = document.createElement("div");
img.className = "image";
var levelList = document.createElement("div");
levelList.className = "levelList";

var levelOne = document.createElement("div");
levelOne.className = "levelOne level";
var stageOne = document.createElement("div");
stageOne.className = "stageOne stage";
var levOne = document.createElement("div");
levOne.className = "levOne lev";

var levelTwo = document.createElement("div");
levelTwo.className = "levelTwo level";
var stageTwo = document.createElement("div");
stageTwo.className = "stageTwo stage";
var levTwo = document.createElement("div");
levTwo.className = "levTwo lev";

var levelThree = document.createElement("div");
levelThree.className = "levelThree level";
var stageThree = document.createElement("div");
stageThree.className = "stageThree stage";
var levThree = document.createElement("div");
levThree.className = "levThree lev";

var levelFour = document.createElement("div");
levelFour.className = "levelFour level";
var stageFour = document.createElement("div");
stageFour.className = "stageFour stage";
var levFour = document.createElement("div");
levFour.className = "levFour lev";

var levelFive = document.createElement("div");
levelFive.className = "levelFive level";
var stageFive = document.createElement("div");
stageFive.className = "stageFive stage";
var levFive = document.createElement("div");
levFive.className = "levFive lev";

var levelSix = document.createElement("div");
levelSix.className = "levelSix level";
var stageSix = document.createElement("div");
stageSix.className = "stageSix stage";
var levSix = document.createElement("div");
levSix.className = "levSix lev";

var levelSeven = document.createElement("div");
levelSeven.className = "levelSeven level";
var stageSeven = document.createElement("div");
stageSeven.className = "stageSeven stage";
var levSeven = document.createElement("div");
levSeven.className = "levSeven lev";

var levelEight = document.createElement("div");
levelEight.className = "levelEight level";
var stageEight = document.createElement("div");
stageEight.className = "stageEight stage";
var levEight = document.createElement("div");
levEight.className = "levEight lev";

var levelNine = document.createElement("div");
levelNine.className = "levelNine level";
var stageNine = document.createElement("div");
stageNine.className = "stageNine stage";
var levNine = document.createElement("div");
levNine.className = "levNine lev";

var levelTen = document.createElement("div");
levelTen.className = "levelTen level";
var stageTen = document.createElement("div");
stageTen.className = "stageTen stage";
var levTen = document.createElement("div");
levTen.className = "levTen lev";

var levelEleven = document.createElement("div");
levelEleven.className = "levelEleven level";
var stageEleven = document.createElement("div");
stageEleven.className = "stageEleven stage";
var levEleven = document.createElement("div");
levEleven.className = "levEleven lev";

var levelTwelve = document.createElement("div");
levelTwelve.className = "levelTwelve level";
var stageTwelve = document.createElement("div");
stageTwelve.className = "stageTwelve stage";
var levTwelve = document.createElement("div");
levTwelve.className = "levTwelve lev";

var levelThirteen = document.createElement("div");
levelThirteen.className = "levelThirteen level";
var stageThirteen = document.createElement("div");
stageThirteen.className = "stageThirteen stage";
var levThirteen = document.createElement("div");
levThirteen.className = "levThirteen lev";

var levelFourteen = document.createElement("div");
levelFourteen.className = "levelFourteen level";
var stageFourteen = document.createElement("div");
stageFourteen.className = "stageFourteen stage";
var levFourteen = document.createElement("div");
levFourteen.className = "levFourteen lev";

var levelFiveteen = document.createElement("div");
levelFiveteen.className = "levelFiveteen level";
var stageFiveteen = document.createElement("div");
stageFiveteen.className = "stageFiveteen stage";
var levFiveteen = document.createElement("div");
levFiveteen.className = "levFiveteen lev";

var insBot = document.createElement("div");
insBot.className = "insBot";
var botQuest = document.createElement("div");
botQuest.className = "botQuest";
var question = document.createElement("div");
question.className = "question";
var paragraph = document.createElement("p");
var botAns = document.createElement("div");
botAns.className = "botAns";
var ansverA = document.createElement("div");
ansverA.className = "ansvers";
var fixedA = document.createElement("div");
fixedA.className = "fixedA";
var parA = document.createElement("p");
var questA = document.createElement("div");
questA.className = "questA";
var ansA = document.createElement("p");
var ansverB = document.createElement("div");
ansverB.className = "ansvers";
var fixedB = document.createElement("div");
fixedB.className = "fixedB";
var parB = document.createElement("p");
var questB = document.createElement("div");
questB.className = "questB";
var ansB = document.createElement("p");
var ansverC = document.createElement("div");
ansverC.className = "ansvers";
var fixedC = document.createElement("div");
fixedC.className = "fixedC";
var parC = document.createElement("p");
var questC = document.createElement("div");
questC.className = "questC";
var ansC = document.createElement("p");
var ansverD = document.createElement("div");
ansverD.className = "ansvers";
var fixedD = document.createElement("div");
fixedD.className = "fixedD";
var parD = document.createElement("p");
var questD = document.createElement("div");
questD.className = "questD";
var ansD = document.createElement("p");

ansverA.onmouseover = function() {
    ansverA.style.backgroundColor = "#3B9648";
}
ansverA.onmouseout = function() {
    ansverA.style.backgroundColor = "#43B554";
}
ansverB.onmouseover = function() {
    ansverB.style.backgroundColor = "#3B9648";
}
ansverB.onmouseout = function() {
    ansverB.style.backgroundColor = "#43B554";
}
ansverC.onmouseover = function() {
    ansverC.style.backgroundColor = "#3B9648";
}
ansverC.onmouseout = function() {
    ansverC.style.backgroundColor = "#43B554";
}
ansverD.onmouseover = function() {
    ansverD.style.backgroundColor = "#3B9648";
}
ansverD.onmouseout = function() {
    ansverD.style.backgroundColor = "#43B554";
}
document.body.style.height = document.documentElement.clientHeight + "px";

parA.innerHTML = "A:";
parB.innerHTML = "B:";
parC.innerHTML = "C:";
parD.innerHTML = "D:";

hintOne.innerHTML = "50/50";
hintTwo.innerHTML = "&#9742;";
hintThree.innerHTML = "&#128276;";

stageOne.innerHTML = "1 &diams;";
levOne.innerHTML = "100";

stageTwo.innerHTML = "2 &diams;";
levTwo.innerHTML = "200";

stageThree.innerHTML = "3 &diams;";
levThree.innerHTML = "300";

stageFour.innerHTML = "4 &diams;";
levFour.innerHTML = "500";

stageFive.innerHTML = "5 &diams;";
levFive.innerHTML = "1 000";

stageSix.innerHTML = "6 &diams;";
levSix.innerHTML = "2 000";

stageSeven.innerHTML = "7 &diams;";
levSeven.innerHTML = "4 000";

stageEight.innerHTML = "8 &diams;";
levEight.innerHTML = "8 000";

stageNine.innerHTML = "9 &diams;";
levNine.innerHTML = "16 000";

stageTen.innerHTML = "10 &diams;";
levTen.innerHTML = "32 000";

stageEleven.innerHTML = "11 &diams;";
levEleven.innerHTML = "64 000";

stageTwelve.innerHTML = "12 &diams;";
levTwelve.innerHTML = "125 000";

stageThirteen.innerHTML = "13 &diams;";
levThirteen.innerHTML = "250 000";

stageFourteen.innerHTML = "14 &diams;";
levFourteen.innerHTML = "500 000";

stageFiveteen.innerHTML = "15 &diams;";
levFiveteen.innerHTML = "1 000 000";

body.appendChild(main);
main.appendChild(topMain);
topMain.appendChild(hintTop);
hintTop.appendChild(hintOne);
hintTop.appendChild(hintTwo);
hintTop.appendChild(hintThree);
main.appendChild(center);
center.appendChild(centerMain);
centerMain.appendChild(img);
centerMain.appendChild(levelList);

levelList.appendChild(levelFiveteen);
levelFiveteen.appendChild(stageFiveteen);
levelFiveteen.appendChild(levFiveteen);

levelList.appendChild(levelFourteen);
levelFourteen.appendChild(stageFourteen);
levelFourteen.appendChild(levFourteen);

levelList.appendChild(levelThirteen);
levelThirteen.appendChild(stageThirteen);
levelThirteen.appendChild(levThirteen);

levelList.appendChild(levelTwelve);
levelTwelve.appendChild(stageTwelve);
levelTwelve.appendChild(levTwelve);

levelList.appendChild(levelEleven);
levelEleven.appendChild(stageEleven);
levelEleven.appendChild(levEleven);

levelList.appendChild(levelTen);
levelTen.appendChild(stageTen);
levelTen.appendChild(levTen);

levelList.appendChild(levelNine);
levelNine.appendChild(stageNine);
levelNine.appendChild(levNine);

levelList.appendChild(levelEight);
levelEight.appendChild(stageEight);
levelEight.appendChild(levEight);

levelList.appendChild(levelSeven);
levelSeven.appendChild(stageSeven);
levelSeven.appendChild(levSeven);

levelList.appendChild(levelSix);
levelSix.appendChild(stageSix);
levelSix.appendChild(levSix);

levelList.appendChild(levelFive);
levelFive.appendChild(stageFive);
levelFive.appendChild(levFive);

levelList.appendChild(levelFour);
levelFour.appendChild(stageFour);
levelFour.appendChild(levFour);

levelList.appendChild(levelThree);
levelThree.appendChild(stageThree);
levelThree.appendChild(levThree);

levelList.appendChild(levelTwo);
levelTwo.appendChild(stageTwo);
levelTwo.appendChild(levTwo);

levelList.appendChild(levelOne);
levelOne.appendChild(stageOne);
levelOne.appendChild(levOne);

main.appendChild(bot);
bot.appendChild(insBot);
insBot.appendChild(botQuest);
botQuest.appendChild(question);
question.appendChild(paragraph);
insBot.appendChild(botAns);
botAns.appendChild(ansverA);
ansverA.appendChild(fixedA);
fixedA.appendChild(parA);
ansverA.appendChild(questA);
questA.appendChild(ansA);
botAns.appendChild(ansverB);
ansverB.appendChild(fixedB);
fixedB.appendChild(parB);
ansverB.appendChild(questB);
questB.appendChild(ansB);
botAns.appendChild(ansverC);
ansverC.appendChild(fixedC);
fixedC.appendChild(parC);
ansverC.appendChild(questC);
questC.appendChild(ansC);
botAns.appendChild(ansverD);
ansverD.appendChild(fixedD);
fixedD.appendChild(parD);
ansverD.appendChild(questD);
questD.appendChild(ansD);