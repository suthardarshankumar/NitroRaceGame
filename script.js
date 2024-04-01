let blueBus, brownTruck, bus, cragoTruck, greyCar, lightBlueCar, lightvCar, pickupTruck, redSportCar, whiteCar, yellowBus, yellowishCar, playerCar;

// Assigning DOM elements to variables
blueBus = document.getElementById("blueBus");
brownTruck = document.getElementById("brownTruck");
bus = document.getElementById("bus");
cragoTruck = document.getElementById("cragoTruck");
greyCar = document.getElementById("greyCar");
lightBlueCar = document.getElementById("lightBlueCar");
lightvCar = document.getElementById("lightvCar");
pickupTruck = document.getElementById("pickupTruck");
redSportCar = document.getElementById("redSportCar");
whiteCar = document.getElementById("whiteCar");
yellowBus = document.getElementById("yellowBus");
yellowishCar = document.getElementById("yellowishCar");
playerCar = document.getElementById("playerCar");
let startBtn = document.getElementById("startBtn");
let restart = document.getElementById("restart");
let pauseBtn = document.getElementById("pauseBtn");
let resumeBtn = document.getElementById("resumeBtn");
let alertBox = document.getElementById("alertBox");
let scoreBox = document.getElementById("scoreBox")
let scoreNum = document.getElementById("scoreNum")

// declare all car, bus, and truck position values in variables
let playerCarLeft = 170;
let playerCarTop = 650;
let blueBusTop = -3260;
let brownTruckTop = -3060;
let busTop = -2660;
let cragoTruckTop = -2310;
let greyCarTop = -2060;
let lightBlueCarTop = -1860;
let lightvCarTop = -1610;
let pickupTruckTop = -1210;
let redSportCarTop = -1210;
let whiteCarTop = -860;
let yellowBusTop = -410;
let yellowishCarTop = -120;

let blueBusLeft = 280;
let brownTruckLeft = 60;
let busLeft = 200;
let cragoTruckLeft = 40;
let greyCarLeft = 280;
let lightBlueCarLeft = 80;
let lightvCarLeft = 160;
let pickupTruckLeft = 50;
let redSportCarLeft = 280;
let whiteCarLeft = 150;
let yellowBusLeft = 250;
let yellowishCarLeft = 50;

let blueBusPass = false;
let brownTruckPass = false;
let busPass = false;
let cragoTruckPass = false;
let greyCarPass = false;
let lightBlueCarPass = false;
let lightvCarPass = false;
let pickupTruckPass = false;
let redSportCarPass = false;
let whiteCarPass = false;
let yellowBusPass = false;
let yellowishCarPass = false;

let id;

//find screen height, score
let screenHeight = window.innerHeight;
let score = 0;
let speedOfGame = 5;
let speedCount = 0;

window.addEventListener("keydown", playerCarMove);

function playerCarMove(event) {
    if (event.code == "ArrowLeft") {
        playerCarMoveLeft();
    } else if (event.code == "ArrowRight") {
        playerCarMoveRight();
    } else if (event.code == "ArrowUp") {
        playerCarMoveUp();
    } else if (event.code == "ArrowDown") {
        playerCarMoveDown();
    } else {

    }
}

function playerCarMoveLeft() {
    playerCarLeft -= 30;
    playerCar.style.left = `${playerCarLeft}px`;
}

function playerCarMoveRight() {
    playerCarLeft += 30;
    playerCar.style.left = `${playerCarLeft}px`;
}

function playerCarMoveUp() {
    playerCarTop -= 30;
    playerCar.style.top = `${playerCarTop}px`;
}

function playerCarMoveDown() {
    playerCarTop += 30;
    playerCar.style.top = `${playerCarTop}px`;
}

// this function increase a speed of car
function checkSpeed() {
    if (score > 36) {
        speedOfGame += 3;
    } else if (score > 24) {
        speedOfGame += 3;
    } else if (score > 12) {
        speedOfGame += 3;
    } else {

    }
}

// all car move code and also work for the repeat path of cars

function blueBusMove() {
    blueBusTop += speedOfGame;
    blueBus.style.top = `${blueBusTop}px`;

    if (blueBusTop > 2900) {
        blueBusTop = -500;
        checkSpeed();
        blueBusPass = false;
    }

    if (blueBusTop > screenHeight) {
        if (!blueBusPass) {
            score += 1;
            scoreNum.innerHTML = score;
            blueBusPass = true;
        }
    }
}

function brownTruckMove() {
    brownTruckTop += speedOfGame;
    brownTruck.style.top = `${brownTruckTop}px`;

    if (brownTruckTop > 2900) {
        brownTruckTop = -500;
        checkSpeed();
        brownTruckPass = false;
    }
    if (brownTruckTop > screenHeight) {
        if (!brownTruckPass) {
            score += 1;
            scoreNum.innerHTML = score;
            brownTruckPass = true;
        }
    }
}

function busMove() {
    busTop += speedOfGame;
    bus.style.top = `${busTop}px`;

    if (busTop > 2900) {
        busTop = -500;
        checkSpeed();
        busPass = false;
    }
    if (busTop > screenHeight) {
        if (!busPass) {
            score += 1;
            scoreNum.innerHTML = score;
            busPass = true;
        }
    }
}

function cragoTruckMove() {
    cragoTruckTop += speedOfGame;
    cragoTruck.style.top = `${cragoTruckTop}px`;
    if (cragoTruckTop > 2900) {
        cragoTruckTop = -500;
        checkSpeed();
        cragoTruckPass = false;
    }
    if (cragoTruckTop > screenHeight) {
        if (!cragoTruckPass) {
            score += 1;
            scoreNum.innerHTML = score;
            cragoTruckPass = true;
        }
    }
}

function greyCarMove() {
    greyCarTop += speedOfGame;
    greyCar.style.top = `${greyCarTop}px`;
    if (greyCarTop > 2900) {
        greyCarTop = -500;
        checkSpeed();
        greyCarPass = false;
    }
    if (greyCarTop > screenHeight) {
        if (!greyCarPass) {
            score += 1;
            scoreNum.innerHTML = score;
            greyCarPass = true;
        }
    }
}

function lightBlueCarMove() {
    lightBlueCarTop += speedOfGame;
    lightBlueCar.style.top = `${lightBlueCarTop}px`;
    if (lightBlueCarTop > 2900) {
        lightBlueCarTop = -500;
        checkSpeed();
        lightBlueCarPass = false;
    }
    if (lightBlueCarTop > screenHeight) {
        if (!lightBlueCarPass) {
            score += 1;
            scoreNum.innerHTML = score;
            lightBlueCarPass = true;
        }
    }
}

function lightvCarMove() {
    lightvCarTop += speedOfGame;
    lightvCar.style.top = `${lightvCarTop}px`;
    if (lightvCarTop > 2900) {
        lightvCarTop = -500;
        checkSpeed();
        lightvCarPass = false;
    }
    if (lightvCarTop > screenHeight) {
        if (!lightvCarPass) {
            score += 1;
            scoreNum.innerHTML = score;
            lightvCarPass = true;
        }
    }
}

function pickupTruckMove() {
    pickupTruckTop += speedOfGame;
    pickupTruck.style.top = `${pickupTruckTop}px`;
    if (pickupTruckTop > 2900) {
        pickupTruckTop = -500;
        checkSpeed();
        pickupTruckPass = false;
    }
    if (pickupTruckTop > screenHeight) {
        if (!pickupTruckPass) {
            score += 1;
            scoreNum.innerHTML = score;
            pickupTruckPass = true;
        }
    }
}

function redSportCarMove() {
    redSportCarTop += speedOfGame;
    redSportCar.style.top = `${redSportCarTop}px`;
    if (redSportCarTop > 2900) {
        redSportCarTop = -500;
        checkSpeed();
        redSportCarPass = false;
    }
    if (redSportCarTop > screenHeight) {
        if (!redSportCarPass) {
            score += 1;
            scoreNum.innerHTML = score;
            redSportCarPass = true;
        }
    }
}

function whiteCarMove() {
    whiteCarTop += speedOfGame;
    whiteCar.style.top = `${whiteCarTop}px`;
    if (whiteCarTop > 2900) {
        whiteCarTop = -500;
        checkSpeed();
        whiteCarPass = false;
    }
    if (whiteCarTop > screenHeight) {
        if (!whiteCarPass) {
            score += 1;
            scoreNum.innerHTML = score;
            whiteCarPass = true;
        }
    }
}

function yellowBusMove() {
    yellowBusTop += speedOfGame;
    yellowBus.style.top = `${yellowBusTop}px`;
    if (yellowBusTop > 2900) {
        yellowBusTop = -500;
        checkSpeed();
        yellowBusPass = false;
    }
    if (yellowBusTop > screenHeight) {
        if (!yellowBusPass) {
            score += 1;
            scoreNum.innerHTML = score;
            yellowBusPass = true;
        }
    }
}

function yellowishCarMove() {
    yellowishCarTop += speedOfGame;
    yellowishCar.style.top = `${yellowishCarTop}px`;
    if (yellowishCarTop > 2900) {
        yellowishCarTop = -500;
        checkSpeed();
        yellowBusPass = false;
    }
    if (yellowishCarTop > screenHeight) {
        if (!yellowishCarPass) {
            score += 1;
            scoreNum.innerHTML = score;
            yellowishCarPass = true;
        }
    }
}

// There all function check a game is over or not.
function checkPlayerCar() {
    if ((playerCarLeft < 0 || playerCarLeft > (400 - 63) || playerCarTop < 0 || playerCarTop > (785 - 117.75)) || (playerCarLeft > (yellowishCarLeft - 57) && playerCarLeft < (yellowishCarLeft + 67) && playerCarTop > yellowishCarTop && playerCarTop < (yellowishCarTop + 110)) || (playerCarLeft > (whiteCarLeft - 57) && playerCarLeft < (whiteCarLeft + 67) && playerCarTop > whiteCarTop && playerCarTop < (whiteCarTop + 110)) || (playerCarLeft > (redSportCarLeft - 57) && playerCarLeft < (redSportCarLeft + 67) && playerCarTop > redSportCarTop && playerCarTop < (redSportCarTop + 110)) || (playerCarLeft > (lightvCarLeft - 57) && playerCarLeft < (lightvCarLeft + 67) && playerCarTop > lightvCarTop && playerCarTop < (lightvCarTop + 110)) || (playerCarLeft > (lightBlueCarLeft - 57) && playerCarLeft < (lightBlueCarLeft + 67) && playerCarTop > lightBlueCarTop && playerCarTop < (lightBlueCarTop + 110)) || (playerCarLeft > (greyCarLeft - 57) && playerCarLeft < (greyCarLeft + 67) && playerCarTop > greyCarTop && playerCarTop < (greyCarTop + 110)) || (playerCarLeft > (blueBusLeft - 77) && playerCarLeft < (blueBusLeft + 84) && playerCarTop > blueBusTop && playerCarTop < (blueBusTop + 190)) || (playerCarLeft > (brownTruckLeft - 77) && playerCarLeft < (brownTruckLeft + 84) && playerCarTop > brownTruckTop && playerCarTop < (brownTruckTop + 190)) || (playerCarLeft > (busLeft - 77) && playerCarLeft < (busLeft + 84) && playerCarTop > busTop && playerCarTop < (busTop + 190)) || (playerCarLeft > (yellowBusLeft - 77) && playerCarLeft < (yellowBusLeft + 84) && playerCarTop > yellowBusTop && playerCarTop < (yellowBusTop + 190)) || (playerCarLeft > (pickupTruckLeft - 65) && playerCarLeft < (pickupTruckLeft + 70) && playerCarTop > pickupTruckTop && playerCarTop < (pickupTruckTop + 138))) {
        alertBox.style.display = 'inline';
        clearInterval(id);
        window.removeEventListener("keydown", playerCarMove);
    }
    if ((playerCarLeft < 0 || playerCarLeft > (400 - 63) || playerCarTop < 0 || playerCarTop > (785 - 117.75)) || (playerCarLeft > (yellowishCarLeft - 57) && playerCarLeft < (yellowishCarLeft + 67) && (playerCarTop + 118) > yellowishCarTop && playerCarTop < (yellowishCarTop + 110)) || (playerCarLeft > (whiteCarLeft - 57) && playerCarLeft < (whiteCarLeft + 67) && (playerCarTop + 118) > whiteCarTop && playerCarTop < (whiteCarTop + 110)) || (playerCarLeft > (redSportCarLeft - 57) && playerCarLeft < (redSportCarLeft + 67) && (playerCarTop + 118) > redSportCarTop && playerCarTop < (redSportCarTop + 110)) || (playerCarLeft > (lightvCarLeft - 57) && playerCarLeft < (lightvCarLeft + 67) && (playerCarTop + 118) > lightvCarTop && playerCarTop < (lightvCarTop + 110)) || (playerCarLeft > (lightBlueCarLeft - 57) && playerCarLeft < (lightBlueCarLeft + 67) && (playerCarTop + 118) > lightBlueCarTop && playerCarTop < (lightBlueCarTop + 110)) || (playerCarLeft > (greyCarLeft - 57) && playerCarLeft < (greyCarLeft + 67) && (playerCarTop + 118) > greyCarTop && playerCarTop < (greyCarTop + 110)) || (playerCarLeft > (blueBusLeft - 77) && playerCarLeft < (blueBusLeft + 84) && (playerCarTop + 118) > blueBusTop && playerCarTop < (blueBusTop + 190)) || (playerCarLeft > (brownTruckLeft - 77) && playerCarLeft < (brownTruckLeft + 84) && (playerCarTop + 118) > brownTruckTop && playerCarTop < (brownTruckTop + 190)) || (playerCarLeft > (busLeft - 77) && playerCarLeft < (busLeft + 84) && (playerCarTop + 118) > busTop && playerCarTop < (busTop + 190)) || (playerCarLeft > (yellowBusLeft - 77) && playerCarLeft < (yellowBusLeft + 84) && (playerCarTop + 118) > yellowBusTop && playerCarTop < (yellowBusTop + 190)) || (playerCarLeft > (pickupTruckLeft - 65) && playerCarLeft < (pickupTruckLeft + 70) && (playerCarTop + 118) > pickupTruckTop && playerCarTop < (pickupTruckTop + 138))) {
        alertBox.style.display = 'inline';
        clearInterval(id);
        window.removeEventListener("keydown", playerCarMove);
    }
}

function checkGameOver() {
    checkPlayerCar();
}

// this function work is restart a game.
restart.addEventListener("click", restartGame);
function restartGame() {
    alertBox.style.display = 'none';
    playerCarLeft = 170;
    playerCarTop = 650;
    blueBusTop = -3260;
    brownTruckTop = -3060;
    busTop = -2660;
    cragoTruckTop = -2310;
    greyCarTop = -2060;
    lightBlueCarTop = -1860;
    lightvCarTop = -1610;
    pickupTruckTop = -1210;
    redSportCarTop = -1210;
    whiteCarTop = -860;
    yellowBusTop = -410;
    yellowishCarTop = -120;
    score = 0;
    speedOfGame = 0;
    scoreNum.innerHTML = score;
    window.addEventListener("keydown", playerCarMove);
    speedOfGame = 5;
    id = setInterval(moveCar, 100);
}

// This function calls other functions to move a car.
function moveCar() {
    blueBusMove();
    brownTruckMove();
    busMove();
    cragoTruckMove();
    greyCarMove();
    lightBlueCarMove();
    lightvCarMove();
    pickupTruckMove();
    redSportCarMove();
    whiteCarMove();
    yellowBusMove();
    yellowishCarMove();
    checkGameOver();
}

pauseBtn.addEventListener("click", pauseGame);
function pauseGame() {
    window.removeEventListener("keydown", playerCarMove);
    clearInterval(id);
}

resumeBtn.addEventListener("click", resumeGame);
function resumeGame() {
    window.addEventListener("keydown", playerCarMove);
    id = setInterval(moveCar, 100);
}

startBtn.addEventListener("click", startGame);

function startGame() {
    startBtn.style.display = 'none';
    playerCar.style.visibility = 'visible';
    clearInterval(id);
    id = setInterval(moveCar, 100);
}