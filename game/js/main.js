var stage = 1;
var answer;
var check = true;
var quest;
var money = 0;
var levelBack = document.getElementsByClassName('level');
let valueOne = true;
let valueTwo = true;
let valueThree = true;

function bacg(n) {
    let x = 15;
    let i = 15 - n;
    while (x - n >= 0) {
        if (n === 1) {
            levelBack[i].style.backgroundColor = '#FFFF00'; // жовтий   
        } else {
            levelBack[i + 1].style.backgroundColor = '#31ff25'; // оранж
            levelBack[i].style.backgroundColor = '#FFFF00'; // жовтий
        }
        x--;
    }
}

function ansverClear() {
    ansverA.style.backgroundColor = "#43B554";
    ansverB.style.backgroundColor = "#43B554";
    ansverC.style.backgroundColor = "#43B554";
    ansverD.style.backgroundColor = "#43B554";
}

function backgClear() {
    for (let i = 0; i < 15; i++) {
        levelBack[i].style.backgroundColor = '#fff';
    }
    valueOne = true;
    valueTwo = true;
    valueThree = true;
    hintOne.style.backgroundColor = "#fff";
    hintTwo.style.backgroundColor = "#fff";
    hintThree.style.backgroundColor = "#fff";
}

function win() {
    let audio = new Audio();
    audio.src = 'audio/win.mp3';
    audio.play();
    audio.volume = 0.2;
}

function million() {
    let audio = new Audio();
    audio.src = 'audio/million.mp3';
    audio.play();
    audio.volume = 0.3;
}

function start() {
    let audio = new Audio();
    audio.src = "audio/start.mp3";
    audio.play();
    audio.volume = 0.2;
}

function lose() {
    let audio = new Audio();
    audio.src = 'audio/lose.mp3';
    audio.play();
    audio.volume = 0.2;
}

function stageUp() {
    switch (stage) {
        case 1:
            firstStageQuestion.question();
            quest = nameQuest.name;
            firstStageAnswer.answers();
            answer = questAnswers;
            money = 0;
            backgClear();
            bacg(stage);
            break;

        case 2:
            secondStageQuestion.question();
            quest = nameQuest.name;
            secondStageAnswer.answers();
            answer = questAnswers;
            money = 0;
            bacg(stage);
            break;

        case 3:
            thirdStageQuestion.question();
            quest = nameQuest.name;
            thirdStageAnswer.answers();
            answer = questAnswers;
            money = 0;
            bacg(stage);
            break;

        case 4:
            fourStageQuestion.question();
            quest = nameQuest.name;
            fourStageAnswer.answers();
            answer = questAnswers;
            money = 0;
            bacg(stage);
            break;

        case 5:
            fiveStageQuestion.question();
            quest = nameQuest.name;
            fiveStageAnswer.answers();
            answer = questAnswers;
            money = 0;
            bacg(stage);
            break;

        case 6:
            sixStageQuestion.question();
            quest = nameQuest.name;
            sixStageAnswer.answers();
            answer = questAnswers;
            money = 1000;
            bacg(stage);
            break;

        case 7:
            sevenStageQuestion.question();
            quest = nameQuest.name;
            sevenStageAnswer.answers();
            answer = questAnswers;
            money = 1000;
            bacg(stage);
            break;

        case 8:
            eightStageQuestion.question();
            quest = nameQuest.name;
            eightStageAnswer.answers();
            answer = questAnswers;
            money = 1000;
            bacg(stage);
            break;

        case 9:
            nineStageQuestion.question();
            quest = nameQuest.name;
            nineStageAnswer.answers();
            answer = questAnswers;
            money = 1000;
            bacg(stage);
            break;

        case 10:
            tenStageQuestion.question();
            quest = nameQuest.name;
            tenStageAnswer.answers();
            answer = questAnswers;
            money = 1000;
            bacg(stage);
            break;

        case 11:
            elevenStageQuestion.question();
            quest = nameQuest.name;
            elevenStageAnswer.answers();
            answer = questAnswers;
            money = 32000;
            bacg(stage);
            break;

        case 12:
            twelveStageQuestion.question();
            quest = nameQuest.name;
            twelveStageAnswer.answers();
            answer = questAnswers;
            money = 32000;
            bacg(stage);
            break;

        case 13:
            thirteenStageQuestion.question();
            quest = nameQuest.name;
            thirteenStageAnswer.answers();
            answer = questAnswers;
            money = 32000;
            bacg(stage);
            break;

        case 14:
            fourteenStageQuestion.question();
            quest = nameQuest.name;
            fourteenStageAnswer.answers();
            answer = questAnswers;
            money = 32000;
            bacg(stage);
            break;

        case 15:
            fifteenStageQuestion.question();
            quest = nameQuest.name;
            fifteenStageAnswer.answers();
            answer = questAnswers;
            money = 32000;
            bacg(stage);
            break;

        case 16:
            money = 1000000;
            million();
            setTimeout(function() {
                let again = confirm(`Наші вітання! Ви виграли ${money} грн.  Бажаєте зіграти ще раз?`);
                if (again) {
                    stage = 1;
                    stageUp();
                } else {
                    stage = 17;
                    stageUp();
                }
            }, 20000);
            break;

        case 17:
            alert(`Гру закінчено!`);
            answer = nothingAnswer;
            quest = nothingQuestion.question;
            break;

        default:
            ansverClear();
            alert(`Нажаль, Ви програли! Ваш виграш становить ${money} грн`);
            let tryAnain = confirm("Бажаєте зіграти ще раз?");
            if (tryAnain) {
                stage = 1;
                stageUp();
            } else {
                stage = 17;
                stageUp();
            }
            break;
    }
    start();
    sec = 0;
    paragraph.innerHTML = quest;
    ansA.innerHTML = answer.first.name;
    ansB.innerHTML = answer.second.name;
    ansC.innerHTML = answer.thrird.name;
    ansD.innerHTML = answer.four.name;
}
stageUp();

ansverA.onclick = function() {
    for (let i = 0; i < 1000; i++) {
        setTimeout(function() {
            ansverA.style.backgroundColor = "orange";
        }, i);
    }

    if (answer.first.value) {
        check = true;
        stage++;
        win();
        setTimeout(function() {
            ansverA.style.backgroundColor = "#007A21";
        }, 1200);
        setTimeout(function() {
            ansverA.style.backgroundColor = "#43B554";
        }, 1400);
        setTimeout(function() {
            ansverA.style.backgroundColor = "#007A21";
        }, 1600);
        setTimeout(function() {
            ansverA.style.backgroundColor = "#43B554";
        }, 1800);
        setTimeout(function() {
            ansverA.style.backgroundColor = "#007A21";
        }, 2000);
        setTimeout(function() {
            ansverA.style.backgroundColor = "#43B554";
        }, 2200);
    } else {
        setTimeout(function() {
            ansverA.style.backgroundColor = "red";
        }, 1200);
        setTimeout(function() {
            if (answer.first.value) {
                ansverA.style.backgroundColor = "#007A21";
            } else if (answer.second.value) {
                ansverB.style.backgroundColor = "#007A21";
            } else if (answer.thrird.value) {
                ansverC.style.backgroundColor = "#007A21";
            } else if (answer.four.value) {
                ansverD.style.backgroundColor = "#007A21";
            }
        }, 1200);
        check = false;
        stage = 0;
    }
    setTimeout(function() {
        stageUp();
    }, 2300);
}
ansverB.onclick = function() {
    for (let i = 0; i < 1000; i++) {
        setTimeout(function() {
            ansverB.style.backgroundColor = "orange";
        }, i);
    }
    if (answer.second.value) {
        check = true;
        stage++;
        win();
        setTimeout(function() {
            ansverB.style.backgroundColor = "#007A21";
        }, 1200);
        setTimeout(function() {
            ansverB.style.backgroundColor = "#43B554";
        }, 1400);
        setTimeout(function() {
            ansverB.style.backgroundColor = "#007A21";
        }, 1600);
        setTimeout(function() {
            ansverB.style.backgroundColor = "#43B554";
        }, 1800);
        setTimeout(function() {
            ansverB.style.backgroundColor = "#007A21";
        }, 2000);
        setTimeout(function() {
            ansverB.style.backgroundColor = "#43B554";
        }, 2200);
    } else {
        setTimeout(function() {
            ansverB.style.backgroundColor = "red";
        }, 1200);
        lose();
        setTimeout(function() {
            if (answer.first.value) {
                ansverA.style.backgroundColor = "#007A21";
            } else if (answer.second.value) {
                ansverB.style.backgroundColor = "#007A21";
            } else if (answer.thrird.value) {
                ansverC.style.backgroundColor = "#007A21";
            } else if (answer.four.value) {
                ansverD.style.backgroundColor = "#007A21";
            }
        }, 1200);
        check = false;
        stage = 0;
    }
    setTimeout(function() {
        stageUp();
    }, 2300);
}
ansverC.onclick = function() {
    for (let i = 0; i < 1000; i++) {
        setTimeout(function() {
            ansverC.style.backgroundColor = "orange";
        }, i);
    }
    if (answer.thrird.value) {
        check = true;
        stage++;
        win();
        setTimeout(function() {
            ansverC.style.backgroundColor = "#007A21";
        }, 1200);
        setTimeout(function() {
            ansverC.style.backgroundColor = "#43B554";
        }, 1400);
        setTimeout(function() {
            ansverC.style.backgroundColor = "#007A21";
        }, 1600);
        setTimeout(function() {
            ansverC.style.backgroundColor = "#43B554";
        }, 1800);
        setTimeout(function() {
            ansverC.style.backgroundColor = "#007A21";
        }, 2000);
        setTimeout(function() {
            ansverC.style.backgroundColor = "#43B554";
        }, 2200);
    } else {
        setTimeout(function() {
            ansverC.style.backgroundColor = "red";
        }, 1200);
        lose();
        setTimeout(function() {
            if (answer.first.value) {
                ansverA.style.backgroundColor = "#007A21";
            } else if (answer.second.value) {
                ansverB.style.backgroundColor = "#007A21";
            } else if (answer.thrird.value) {
                ansverC.style.backgroundColor = "#007A21";
            } else if (answer.four.value) {
                ansverD.style.backgroundColor = "#007A21";
            }
        }, 1200);
        check = false;
        stage = 0;
    }
    setTimeout(function() {
        stageUp();
    }, 2300);
}
ansverD.onclick = function() {
    for (let i = 0; i < 1000; i++) {
        setTimeout(function() {
            ansverD.style.backgroundColor = "orange";
        }, i);
    }
    if (answer.four.value) {
        check = true;
        stage++;
        win();
        setTimeout(function() {
            ansverD.style.backgroundColor = "#007A21";
        }, 1200);
        setTimeout(function() {
            ansverD.style.backgroundColor = "#43B554";
        }, 1400);
        setTimeout(function() {
            ansverD.style.backgroundColor = "#007A21";
        }, 1600);
        setTimeout(function() {
            ansverD.style.backgroundColor = "#43B554";
        }, 1800);
        setTimeout(function() {
            ansverD.style.backgroundColor = "#007A21";
        }, 2000);
        setTimeout(function() {
            ansverD.style.backgroundColor = "#43B554";
        }, 2200);
    } else {
        setTimeout(function() {
            ansverD.style.backgroundColor = "red";
        }, 1200);
        lose();
        setTimeout(function() {
            if (answer.first.value) {
                ansverA.style.backgroundColor = "#007A21";
            } else if (answer.second.value) {
                ansverB.style.backgroundColor = "#007A21";
            } else if (answer.thrird.value) {
                ansverC.style.backgroundColor = "#007A21";
            } else if (answer.four.value) {
                ansverD.style.backgroundColor = "#007A21";
            }
        }, 1200);
        check = false;
        stage = 0;
    }
    setTimeout(function() {
        stageUp();
    }, 2300);
}
hintOne.onclick = function() {
    let hint = Math.floor(Math.random() * 101);

    if ((answer.first.value) && (hint < 33) && (valueOne)) {
        ansA.innerHTML = answer.first.name;
        ansB.innerHTML = " ";
        ansC.innerHTML = answer.thrird.name;
        ansD.innerHTML = " ";
    } else if ((answer.first.value) && ((hint > 34) && (hint < 67)) && (valueOne)) {
        ansA.innerHTML = answer.first.name
        ansB.innerHTML = answer.second.name;
        ansC.innerHTML = " ";
        ansD.innerHTML = " ";
    } else if ((answer.first.value) && (hint > 68) && (valueOne)) {
        ansA.innerHTML = answer.first.name;
        ansB.innerHTML = " ";
        ansC.innerHTML = " ";
        ansD.innerHTML = answer.four.name;
    } else if ((answer.second.value) && (hint < 33) && (valueOne)) {
        ansA.innerHTML = " ";
        ansB.innerHTML = answer.second.name;
        ansC.innerHTML = answer.thrird.name;
        ansD.innerHTML = " ";
    } else if ((answer.second.value) && ((hint > 34) && (hint < 67)) && (valueOne)) {
        ansA.innerHTML = " ";
        ansB.innerHTML = answer.second.name;
        ansC.innerHTML = " ";
        ansD.innerHTML = answer.four.name;
    } else if ((answer.second.value) && (hint > 68) && (valueOne)) {
        ansA.innerHTML = answer.first.name;
        ansB.innerHTML = answer.second.name;
        ansC.innerHTML = " ";
        ansD.innerHTML = " ";
    } else if ((answer.thrird.value) && (hint < 33) && (valueOne)) {
        ansA.innerHTML = " ";
        ansB.innerHTML = " ";
        ansC.innerHTML = answer.thrird.name;
        ansD.innerHTML = answer.four.name;
    } else if ((answer.thrird.value) && ((hint > 34) && (hint < 67)) && (valueOne)) {
        ansA.innerHTML = " ";
        ansB.innerHTML = answer.second.name;
        ansC.innerHTML = answer.thrird.name;
        ansD.innerHTML = " ";
    } else if ((answer.thrird.value) && (hint > 68) && (valueOne)) {
        ansA.innerHTML = answer.first.name;
        ansB.innerHTML = " ";
        ansC.innerHTML = answer.thrird.name;
        ansD.innerHTML = " ";
    } else if ((answer.four.value) && (hint < 33) && (valueOne)) {
        ansA.innerHTML = " ";
        ansB.innerHTML = " ";
        ansC.innerHTML = answer.thrird.name;
        ansD.innerHTML = answer.four.name;
    } else if ((answer.four.value) && ((hint > 34) && (hint < 67)) && (valueOne)) {
        ansA.innerHTML = " ";
        ansB.innerHTML = answer.second.name;
        ansC.innerHTML = " ";
        ansD.innerHTML = answer.four.name;
    } else if ((answer.four.value) && (hint > 68) && (valueOne)) {
        ansA.innerHTML = answer.first.name;
        ansB.innerHTML = " ";
        ansC.innerHTML = " ";
        ansD.innerHTML = answer.four.name;
    }
    valueOne = false;
    hintOne.style.backgroundColor = "red";
}

hintTwo.onclick = function() {
    let rand = Math.floor(Math.random() * 10);
    let num = 100 / stage + 100 + rand;
    if ((answer.first.value) && (num > 113) && (valueTwo)) {
        alert("Ну я думаю, що правильна відповідь це A");
    } else if ((answer.second.value) && (num > 113) && (valueTwo)) {
        alert("Ну я думаю, що правильна відповідь це B");
    } else if ((answer.thrird.value) && (num > 113) && (valueTwo)) {
        alert("Ну я думаю, що правильна відповідь це C");
    } else if ((answer.four.value) && (num > 113) && (valueTwo)) {
        alert("Ну я думаю, що правильна відповідь це D");
    } else if ((answer.first.value) && (num < 113) && (valueTwo)) {
        alert("Важке запитання. Нажаль я не знаю відповіді");
    } else if ((answer.second.value) && (num < 113) && (valueTwo)) {
        alert("Важке запитання. Нажаль я не знаю відповіді");
    } else if ((answer.thrird.value) && (num < 113) && (valueTwo)) {
        alert("Важке запитання. Нажаль я не знаю відповіді");
    } else if ((answer.four.value) && (num < 113) && (valueTwo)) {
        alert("Важке запитання. Нажаль я не знаю відповіді");
    }
    valueTwo = false;
    hintTwo.style.backgroundColor = "red";
}

hintThree.onclick = function() {
    let num = Math.floor(Math.random() * 10) + 30;
    let testOne = Math.floor(Math.random() * 10) + 20;
    let testTwo = Math.floor(Math.random() * 10) + 20;
    let testThree = 100 - num - testOne - testTwo;

    if ((answer.first.value) && (valueThree)) {
        alert(`Зал вважає, що: \n A: ${num}%, \n B: ${testOne}%, \n C: ${testTwo}%, \n D: ${testThree}%.`);
    } else if ((answer.second.value) && (valueThree)) {
        alert(`Зал вважає, що: \n A: ${testThree}%, \n B: ${num}%, \n C: ${testOne}%, \n D: ${testTwo}%.`);
    } else if ((answer.thrird.value) && (valueThree)) {
        alert(`Зал вважає, що: \n A: ${testTwo}%, \n B: ${testThree}%, \n C: ${num}%, \n D: ${testOne}%.`);
    } else if ((answer.four.value) && (valueThree)) {
        alert(`Зал вважає, що: \n A: ${testOne}%, \n B: ${testTwo}%, \n C: ${testThree}%, \n D: ${num}%.`);
    }
    valueThree = false;
    hintThree.style.backgroundColor = "red";
}