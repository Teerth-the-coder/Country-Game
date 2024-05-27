const countriesList = [
    {
        name: "Afghanistan",
        src: "https://cdn.britannica.com/40/5340-004-B25ED5CF/Flag-Afghanistan.jpg"
    },

    {
        name: "Albania",
        src: "https://cdn.britannica.com/00/6200-050-2E25CE97/Flag-Albania.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Algeria",
        src: "https://cdn.britannica.com/34/3034-050-077DE27D/Flag-Algeria.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Andorra",
        src: "https://cdn.britannica.com/83/5583-050-2F48FD32/Flag-Andorra.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Tuvalu",
        src: "https://cdn.britannica.com/03/3303-050-D72C968A/Flag-Tuvalu.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Antigua and Barbuda",
        src: "https://cdn.britannica.com/04/5104-050-9E557169/Flag-Antigua-and-Barbuda.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Azerbaijan",
        src: "https://cdn.britannica.com/14/4714-050-208C0B4A/Flag-Azerbaijan.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Bahrain",
        src: "https://cdn.britannica.com/67/5767-050-CF112244/Flag-Bahrain.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Belarus",
        src: "https://cdn.britannica.com/01/6401-050-0540EE12/Flag-Belarus.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Belize",
        src: "https://cdn.britannica.com/07/7207-050-9EFE28B7/Flag-Belize.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Brazil",
        src: "https://cdn.britannica.com/47/6847-050-075C3C65/Flag-Brazil.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Canada",
        src: "https://cdn.britannica.com/68/7068-050-54679E29/Flag-Canada.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Chile",
        src: "https://cdn.britannica.com/85/7485-050-2615417F/Flag-Chile.jpg?w=400&h=235&c=crop"
    },

    {
        name: "China",
        src: "https://cdn.britannica.com/90/7490-050-5D33348F/Flag-China.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Cyprus",
        src: "https://cdn.britannica.com/83/7883-050-0E5BCA30/Flag-Cyprus.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Denmark",
        src: "https://cdn.britannica.com/07/8007-050-D4170843/Flag-Denmark.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Domincian Republic",
        src: "https://cdn.britannica.com/14/5114-050-E4DD455C/Flag-Dominican-Republic.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Ecuador",
        src: "https://cdn.britannica.com/49/149-050-7AD40B1F/flag-design-similarities-Ecuador-Colombia-flags-Venezuela.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Egypt",
        src: "https://cdn.britannica.com/85/185-050-6A8E2E8A/Flag-Egypt.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Estonia",
        src: "https://cdn.britannica.com/46/6246-050-F6E15290/Flag-Estonia.jpg?w=400&h=235&c=crop"
    },

    {
        name: "France",
        src: "https://cdn.britannica.com/82/682-050-8AA3D6A6/Flag-France.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Guatemala",
        src: "https://cdn.britannica.com/13/7213-050-B24C9649/Flag-Guatemala.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Greece",
        src: "https://cdn.britannica.com/49/1049-050-3AD6578E/Flag-Greece.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Germany",
        src: "https://cdn.britannica.com/97/897-050-0BFECDA5/Flag-Germany.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Gabon",
        src: "https://cdn.britannica.com/85/7185-050-2DEB57E7/Flag-Gabon.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Hungary",
        src: "https://cdn.britannica.com/55/1455-050-CCDFFCF0/Flag-Hungary.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Honduras",
        src: "https://cdn.britannica.com/16/7216-050-8CC469AB/Flag-Honduras.jpg?w=400&h=235&c=crop"
    },

    {
        name: "India",
        src: "https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Iran",
        src: "https://cdn.britannica.com/22/1722-050-B489CA11/Flag-Iran.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Iceland",
        src: "https://cdn.britannica.com/85/1485-050-2819302A/Flag-Iceland.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Israel",
        src: "https://cdn.britannica.com/53/1753-050-6B7054D1/Flag-Israel.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Japan",
        src: "https://cdn.britannica.com/91/1791-050-270C9B3E/Flag-Japan.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Jamaica",
        src: "https://cdn.britannica.com/20/5120-050-4202E1B8/Flag-Jamaica.jpg?w=400&h=235&c=crop"
    },

    {
        name: "North Korea",
        src: "https://cdn.britannica.com/47/1947-050-68FB6BE0/Flag-North-Korea.jpg?w=400&h=235&c=crop"
    },

    {
        name: "South Korea",
        src: "https://cdn.britannica.com/49/1949-050-39ED83BA/Flag-South-Korea.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Kyrgyzstan",
        src: "https://cdn.britannica.com/41/7241-050-0492C6BF/Flag-Kyrgyzstan.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Kosovo",
        src: "https://cdn.britannica.com/18/114418-050-E12B5707/Flag-Kosovo.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Laos",
        src: "https://cdn.britannica.com/29/4029-050-2707C4AA/Flag-Laos.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Liechtenstein",
        src: "https://cdn.britannica.com/02/2102-050-2976AFDD/Flag-Liechtenstein.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Lidya",
        src: "https://cdn.britannica.com/37/3037-050-AF128FD1/Flag-Libya.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Luxembourg",
        src: "https://cdn.britannica.com/23/2223-050-6771361A/Flag-Luxembourg.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Mali",
        src: "https://cdn.britannica.com/62/5062-050-35FFA3BE/Flag-Mali.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Malta",
        src: "https://cdn.britannica.com/86/2286-050-C9E3A660/Flag-Malta.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Mexico",
        src: "https://cdn.britannica.com/73/2573-050-C825CE68/Flag-Mexico.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Marshall Islands",
        src: "https://cdn.britannica.com/90/3290-050-16A4798B/Flag-of-Marshall-Islands.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Monaco",
        src: "https://cdn.britannica.com/50/2750-050-688E6E49/Flag-Monaco.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Nepal",
        src: "https://cdn.britannica.com/70/2970-050-796F522C/Flag-Nepal.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Kuwait",
        src: "https://cdn.britannica.com/70/5770-050-BD7FAEFD/Flag-Kuwait.jpg?w=300&h=1000"
    },

    {
        name: "Oman",
        src: "https://cdn.britannica.com/73/5773-050-1AA1BA5C/Flag-Oman.jpg?w=400&h=235&c=crop"
    },

    {
        name: "Norway",
        src: "https://cdn.britannica.com/01/3101-050-1BB27B69/Flag-Norway.jpg?w=400&h=235&c=crop"
    },

];

const heart1 = document.getElementById("heart1");
const heart2 = document.getElementById("heart2");
const heart3 = document.getElementById("heart3");
const heart4 = document.getElementById("heart4");
const heart5 = document.getElementById("heart5");

const timerIcon = document.getElementById("icon");
const timerText = document.getElementById("timerP");

const flagImageElement = document.getElementById("flag");

const incorrectGuessesElement = document.getElementById("incorrect-guesses");
const correctGuessesElement = document.getElementById("correct-guesses");
const scoreElement = document.getElementById("score");

const answerBtn1 = document.getElementById("btn1");
const answerBtn2 = document.getElementById("btn2");
const answerBtn3 = document.getElementById("btn3");

const startBtn = document.getElementById("startBtn");
const endBtn = document.getElementById("endBtn");

const evalElement = document.getElementById("eval");

const timerModeBtn = document.getElementById("timerModeBtn");
const livesModeBtn = document.getElementById("livesModeBtn");
const resetModeBtn = document.getElementById("resetModeBtn");

const hintStop = document.getElementById("hintStop")

let livesMode = false;
let lives = 5;

let timerMode = false;
let count = 60;

let gameStarted = false;

let countryStack1 = "";
let countryStack2 = "";
let countryStack3 = "";

let randomNum1 = 0;
let randomNum2 = 0;
let randomNum3 = 0;

let incorrectAmount = 0;
let correctAmount = 0;
let score = 0;

let normalModeAns = "";
let normalModeImgSrc = "";

let control = 0;

answerBtn1.addEventListener("click", clickAnswerBtn1);
answerBtn2.addEventListener("click", clickAnswerBtn2);
answerBtn3.addEventListener("click", clickAnswerBtn3);

startBtn.addEventListener("click", startGame);
endBtn.addEventListener("click", endGame);

timerModeBtn.addEventListener("click", timerModeActivate);
livesModeBtn.addEventListener("click", livesModeActivate);
resetModeBtn.addEventListener("click", reset)

function startGame() {
    gameStarted = true;
    score = 0;
    incorrectAmount = 0;
    correctAmount = 0;
    endBtn.style.display = `block`;
    getFlag();
    startBtn.style.display = `none`;

    if (livesMode == true) {
        heart1.style.display = `block`;
        heart2.style.display = `block`;
        heart3.style.display = `block`;
        heart4.style.display = `block`;
        heart5.style.display = `block`;

        heart1.src = "retroHeart2.jpg";
        heart2.src = "retroHeart2.jpg";
        heart3.src = "retroHeart2.jpg";
        heart4.src = "retroHeart2.jpg";
        heart5.src = "retroHeart2.jpg";

        lives = 5;
    }

    if (timerMode == true) {
        timerIcon.style.display = "block";
        timerText.style.display = "block";

        let count = 60;
        const timer = setInterval(function () {
            count--;
            timerText.innerHTML = count;
            console.log(count);
            if (count === 0) {
                clearInterval(timer);
                console.log("Time's up!");
                evalElement.innerHTML = "Time's Up";
                answerBtn1.disabled = true;
                answerBtn2.disabled = true;
                answerBtn3.disabled = true;
                endGame();
            }
        }, 1000);
    }
}



function endGame() {
    score = 0;
    gameStarted = false;
    incorrectAmount = 0;
    correctAmount = 0;
    startBtn.style.display = `block`;
    endBtn.style.display = `none`;
    flagImageElement.src = "world map.png";
    answerBtn1.innerHTML = "lorem ipsum";
    answerBtn2.innerHTML = "lorem ipsum";
    answerBtn3.innerHTML = "lorem ipsum";
    livesMode = false;
    timerMode = false;
    heart1.style.display = `none`;
    heart2.style.display = `none`;
    heart3.style.display = `none`;
    heart4.style.display = `none`;
    heart5.style.display = `none`;
    incorrectGuessesElement.innerHTML = `Incorrect Guesses: ${incorrectAmount}`;
    correctGuessesElement.innerHTML = `Incorrect Guesses: ${correctAmount}`;
    scoreElement.innerHTML = `Incorrect Guesses: ${score}`;
    flagImageElement.src = "world map.png";
    countryStack1 = "";
    countryStack2 = "";
    countryStack3 = "";
    normalModeAns, normalModeImgSrc = "";
    answerBtn3.style.background = "transparent";
    answerBtn3.style.border = "#001e4d solid 2px";
    answerBtn2.style.background = "transparent";
    answerBtn2.style.border = "#001e4d solid 2px";
    answerBtn1.style.background = "transparent";
    answerBtn1.style.border = "#001e4d solid 2px";
}

function reset() {
    if (gameStarted == true) {
        hintStop.innerHTML = `You Must End The Game Before Reseting Modes`;
    } else {
        livesMode = false;
        timerMode = false;
        console.log("lives Mode = " + livesMode);
    }
}

function livesModeActivate() {
    if (gameStarted == true) {
        hintStop.innerHTML = `You Must End The Game Before Switching Modes`;
        console.log("lives Mode = " + livesMode);
    } else {
        livesMode = true;
        console.log("lives Mode = " + livesMode);
    }
}

    function timerModeActivate() {
    if (gameStarted == true) {
        hintStop.innerHTML = "You Must End The Game Before Switching Modes";
        console.log(timerMode);
    } else { 
        timerMode = true;
        console.log(timerMode);
    }
}

function getFlag() {
    randomNum1 = Math.floor(Math.random() * countriesList.length);
    randomNum2 = Math.floor(Math.random() * countriesList.length);
    randomNum3 = Math.floor(Math.random() * countriesList.length);

    control = Math.floor(Math.random() * 3) + 1;

    stack1 = countriesList[randomNum1];
    stack2 = countriesList[randomNum2];
    stack3 = countriesList[randomNum3];

    normalModeAns = stack1.name;
    normalModeImgSrc = stack1.src;

    flagImageElement.src = normalModeImgSrc;

    answerBtn1.style.background = `transparent`;
    answerBtn1.style.cursor = `pointer`;
    answerBtn1.disabled = false;

    answerBtn2.style.background = `transparent`;
    answerBtn2.style.cursor = `pointer`;
    answerBtn2.disabled = false;

    answerBtn3.style.background = `transparent`;
    answerBtn3.style.cursor = `pointer`;
    answerBtn3.disabled = false;

    evalElement.innerHTML = "";

    if (control == 1) {
        answerBtn1.innerHTML = normalModeAns;
        answerBtn2.innerHTML = stack2.name;
        answerBtn3.innerHTML = stack3.name;

        if (answerBtn2.innerHTML == normalModeAns) {
            answerBtn2.innerHTML = "Japan";
        }

        if (answerBtn3.innerHTML == normalModeAns) {
            answerBtn3.innerHTML = "Japan";
        }
    }

    if (control == 2) {
        answerBtn1.innerHTML = stack2.name;
        answerBtn2.innerHTML = normalModeAns;
        answerBtn3.innerHTML = stack3.name;

        if (answerBtn1.innerHTML == normalModeAns) {
            answerBtn1.innerHTML = "Japan";
        }

        if (answerBtn3.innerHTML == normalModeAns) {
            answerBtn3.innerHTML = "Japan";
        }
    }

    if (control == 3) {
        answerBtn3.innerHTML = normalModeAns;
        answerBtn2.innerHTML = stack2.name;
        answerBtn1.innerHTML = stack3.name;

        if (answerBtn1.innerHTML == normalModeAns) {
            answerBtn1.innerHTML = "Japan";
        }

        if (answerBtn2.innerHTML == normalModeAns) {
            answerBtn2.innerHTML = "Japan";
        }
    }
}

function clickAnswerBtn1() {
    if (control == 1) {
        score++;
        correctAmount++;
        correctGuessesElement.innerHTML = `Correct Guesses: ${correctAmount}`;
        incorrectGuessesElement.innerHTML = `Incorrect Guesses: ${incorrectAmount}`;
        scoreElement.innerHTML = `Score: ${score}`;

        answerBtn1.style.backgroundColor = `#9aeabc`;
        answerBtn1.style.cursor = `no-drop`;
        answerBtn1.disabled = true;

        answerBtn2.style.cursor = `no-drop`;
        answerBtn2.disabled = true;

        answerBtn3.style.cursor = `no-drop`;
        answerBtn3.disabled = true;

        evalElement.innerHTML = "You Are Correct!";


    } else {
        incorrectAmount++;
        correctGuessesElement.innerHTML = `Correct Guesses: ${correctAmount}`;
        incorrectGuessesElement.innerHTML = `Incorrect Guesses: ${incorrectAmount}`;
        scoreElement.innerHTML = `Score: ${score}`;

        answerBtn1.style.backgroundColor = `#ff9393`;
        answerBtn1.style.cursor = `no-drop`;
        answerBtn1.disabled = true;

        if (livesMode == true) {
            lives--;

            if (lives == 1) {
                heart1.src = "retroHeart2.jpg";
                heart2.src = "retroHeartEmpty.jpg";
                heart3.src = "retroHeartEmpty.jpg";
                heart4.src = "retroHeartEmpty.jpg";
                heart5.src = "retroHeartEmpty.jpg";
            }

            if (lives == 2) {
                heart1.src = "retroHeart2.jpg";
                heart2.src = "retroHeart2.jpg";
                heart3.src = "retroHeartEmpty.jpg";
                heart4.src = "retroHeartEmpty.jpg";
                heart5.src = "retroHeartEmpty.jpg";
            }

            if (lives == 3) {
                heart1.src = "retroHeart2.jpg";
                heart2.src = "retroHeart2.jpg";
                heart3.src = "retroHeart2.jpg";
                heart4.src = "retroHeartEmpty.jpg";
                heart5.src = "retroHeartEmpty.jpg";
            }

            if (lives == 4) {
                heart1.src = "retroHeart2.jpg";
                heart2.src = "retroHeart2.jpg";
                heart3.src = "retroHeart2.jpg";
                heart4.src = "retroHeart2.jpg";
                heart5.src = "retroHeartEmpty.jpg";
            }

            if (lives == 5) {
                heart1.src = "retroHeart2.jpg";
                heart2.src = "retroHeart2.jpg";
                heart3.src = "retroHeart2.jpg";
                heart4.src = "retroHeart2.jpg";
                heart5.src = "retroHeart2.jpg";
            }
        }

        if (control == 2) {
            answerBtn2.style.cursor = `no-drop`;
            answerBtn2.style.backgroundColor = `#9aeabc`;
            answerBtn2.disabled = true;

            answerBtn3.style.cursor = `no-drop`;
            answerBtn3.style.backgroundColor = `#ff9393`;
            answerBtn3.disabled = true;
        }

        if (control == 3) {
            answerBtn2.style.cursor = `no-drop`;
            answerBtn2.style.backgroundColor = `#ff9393`;
            answerBtn2.disabled = true;

            answerBtn3.style.cursor = `no-drop`;
            answerBtn3.style.backgroundColor = `#9aeabc`;
            answerBtn3.disabled = true;
        }

        evalElement.innerHTML = "You Are Wrong!"
    }
    if (livesMode == false) {
        setTimeout(getFlag, 1500);
    } else if (livesMode == true && lives == 0) {
        endGame();
        evalElement.innerHTML = "You Lost";
    } else if (livesMode == true && lives != 0) {
        setTimeout(getFlag, 1500);
    }
}

function clickAnswerBtn2() {
    if (control == 2) {
        score++;
        correctAmount++;
        correctGuessesElement.innerHTML = `Correct Guesses: ${correctAmount}`;
        incorrectGuessesElement.innerHTML = `Incorrect Guesses: ${incorrectAmount}`;
        scoreElement.innerHTML = `Score: ${score}`;

        answerBtn2.style.backgroundColor = `#9aeabc`;
        answerBtn2.style.cursor = `no-drop`;
        answerBtn2.disabled = true;

        answerBtn1.style.cursor = `no-drop`;
        answerBtn1.disabled = true;

        answerBtn3.style.cursor = `no-drop`;
        answerBtn3.disabled = true;

        evalElement.innerHTML = "You Are Correct!";

    } else {
        incorrectAmount++;
        correctGuessesElement.innerHTML = `Correct Guesses: ${correctAmount}`;
        incorrectGuessesElement.innerHTML = `Incorrect Guesses: ${incorrectAmount}`;
        scoreElement.innerHTML = `Score: ${score}`;

        answerBtn2.style.backgroundColor = `#ff9393`;
        answerBtn2.style.cursor = `no-drop`;
        answerBtn2.disabled = true;

        if (livesMode == true) {
            lives--;
            if (lives == 1) {
                heart1.src = "retroHeart2.jpg";
                heart2.src = "retroHeartEmpty.jpg";
                heart3.src = "retroHeartEmpty.jpg";
                heart4.src = "retroHeartEmpty.jpg";
                heart5.src = "retroHeartEmpty.jpg";
            }

            if (lives == 1) {
                heart1.src = "retroHeart2.jpg";
                heart2.src = "retroHeartEmpty.jpg";
                heart3.src = "retroHeartEmpty.jpg";
                heart4.src = "retroHeartEmpty.jpg";
                heart5.src = "retroHeartEmpty.jpg";
            }

            if (lives == 2) {
                heart1.src = "retroHeart2.jpg";
                heart2.src = "retroHeart2.jpg";
                heart3.src = "retroHeartEmpty.jpg";
                heart4.src = "retroHeartEmpty.jpg";
                heart5.src = "retroHeartEmpty.jpg";
            }

            if (lives == 3) {
                heart1.src = "retroHeart2.jpg";
                heart2.src = "retroHeart2.jpg";
                heart3.src = "retroHeart2.jpg";
                heart4.src = "retroHeartEmpty.jpg";
                heart5.src = "retroHeartEmpty.jpg";
            }

            if (lives == 4) {
                heart1.src = "retroHeart2.jpg";
                heart2.src = "retroHeart2.jpg";
                heart3.src = "retroHeart2.jpg";
                heart4.src = "retroHeart2.jpg";
                heart5.src = "retroHeartEmpty.jpg";
            }

            if (lives == 5) {
                heart1.src = "retroHeart2.jpg";
                heart2.src = "retroHeart2.jpg";
                heart3.src = "retroHeart2.jpg";
                heart4.src = "retroHeart2.jpg";
                heart5.src = "retroHeart2.jpg";
            }
        }

        if (control == 1) {
            answerBtn1.style.cursor = `no-drop`;
            answerBtn1.style.backgroundColor = `#9aeabc`;
            answerBtn1.disabled = true;

            answerBtn3.style.cursor = `no-drop`;
            answerBtn3.style.backgroundColor = `#ff9393`;
            answerBtn3.disabled = true;
        }

        if (control == 3) {
            answerBtn1.style.cursor = `no-drop`;
            answerBtn1.style.backgroundColor = `#ff9393`;
            answerBtn1.disabled = true;

            answerBtn3.style.cursor = `no-drop`;
            answerBtn3.style.backgroundColor = `#9aeabc`;
            answerBtn3.disabled = true;
        }

        evalElement.innerHTML = "You Are Wrong!"
    }
    if (livesMode == false) {
        setTimeout(getFlag, 1500);
    } else if (livesMode == true && lives == 0) {
        endGame();
        evalElement.innerHTML = "You Lost";
    } else if (livesMode == true && lives != 0) {
        setTimeout(getFlag, 1500);
    }

}

function clickAnswerBtn3() {
    if (control == 3) {
        score++;
        correctAmount++;
        correctGuessesElement.innerHTML = `Correct Guesses: ${correctAmount}`;
        incorrectGuessesElement.innerHTML = `Incorrect Guesses: ${incorrectAmount}`;
        scoreElement.innerHTML = `Score: ${score}`;

        answerBtn3.style.backgroundColor = `#9aeabc`;
        answerBtn3.style.cursor = `no-drop`;
        answerBtn3.disabled = true;

        answerBtn2.style.cursor = `no-drop`;
        answerBtn2.disabled = true;

        answerBtn1.style.cursor = `no-drop`;
        answerBtn1.disabled = true;

        evalElement.innerHTML = "You Are Correct!";
    } else {
        incorrectAmount++;
        correctGuessesElement.innerHTML = `Correct Guesses: ${correctAmount}`;
        incorrectGuessesElement.innerHTML = `Incorrect Guesses: ${incorrectAmount}`;
        scoreElement.innerHTML = `Score: ${score}`;

        if (livesMode == true) {
            lives--;

            if (lives == 1) {
                heart1.src = "retroHeart2.jpg";
                heart2.src = "retroHeartEmpty.jpg";
                heart3.src = "retroHeartEmpty.jpg";
                heart4.src = "retroHeartEmpty.jpg";
                heart5.src = "retroHeartEmpty.jpg";
            }

            if (lives == 2) {
                heart1.src = "retroHeart2.jpg";
                heart2.src = "retroHeart2.jpg";
                heart3.src = "retroHeartEmpty.jpg";
                heart4.src = "retroHeartEmpty.jpg";
                heart5.src = "retroHeartEmpty.jpg";
            }

            if (lives == 3) {
                heart1.src = "retroHeart2.jpg";
                heart2.src = "retroHeart2.jpg";
                heart3.src = "retroHeart2.jpg";
                heart4.src = "retroHeartEmpty.jpg";
                heart5.src = "retroHeartEmpty.jpg";
            }

            if (lives == 4) {
                heart1.src = "retroHeart2.jpg";
                heart2.src = "retroHeart2.jpg";
                heart3.src = "retroHeart2.jpg";
                heart4.src = "retroHeart2.jpg";
                heart5.src = "retroHeartEmpty.jpg";
            }

            if (lives == 5) {
                heart1.src = "retroHeart2.jpg";
                heart2.src = "retroHeart2.jpg";
                heart3.src = "retroHeart2.jpg";
                heart4.src = "retroHeart2.jpg";
                heart5.src = "retroHeart2.jpg";
            }
        }

        answerBtn3.style.backgroundColor = `#ff9393`;
        answerBtn3.style.cursor = `no-drop`;
        answerBtn3.disabled = true;


        if (control == 2) {
            answerBtn2.style.cursor = `no-drop`;
            answerBtn2.style.backgroundColor = `#9aeabc`;
            answerBtn2.disabled = true;

            answerBtn1.style.cursor = `no-drop`;
            answerBtn1.style.backgroundColor = `#ff9393`;
            answerBtn1.disabled = true;
        }

        if (control == 1) {
            answerBtn2.style.cursor = `no-drop`;
            answerBtn2.style.backgroundColor = `#ff9393`;
            answerBtn2.disabled = true;

            answerBtn1.style.cursor = `no-drop`;
            answerBtn1.style.backgroundColor = `#9aeabc`;
            answerBtn1.disabled = true;
        }

        evalElement.innerHTML = "You Are Wrong!"
    }
    if (livesMode == false) {
        setTimeout(getFlag, 1500);
    } else if (livesMode == true && lives == 0) {
        endGame();
        evalElement.innerHTML = "You Lost";
    } else if (livesMode == true && lives != 0) {
        setTimeout(getFlag, 1500);
    }

}
