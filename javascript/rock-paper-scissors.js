const items = document.querySelectorAll("p");
const playerResult = document.getElementById("player-result");
const computerResult = document.getElementById("computer-result");
const Result = document.getElementById("result");
const score = document.getElementById("score");
const message = document.querySelector(".message-box");
const canceal = document.getElementById("canceal");
const ms = document.querySelector(".ms");
console.log(items);
let count = 5;
score.innerText = count;

items.forEach((item) => {
  item.addEventListener("click", function () {
    playerResult.innerText = "";
    computerResult.innerText = "";
    Result.innerText = "";

    const playerOne = item.dataset.id;
    let computer = Math.floor(Math.random() * 3);

    if (computer === 0) {
      computer = "rock";
    } else if (computer === 1) {
      computer = "paper";
    } else {
      computer = "scissors";
    }

    function playGame() {
      if (playerOne === "rock" && computer === "rock") {
        playerResult.innerText = ` ${playerOne}`;
        computerResult.innerText = `${computer}`;
        count = count;

        Result.innerText = "draw game";
        score.innerText = count;
      } else if (playerOne === "rock" && computer === "paper") {
        playerResult.innerText = ` ${playerOne}`;
        computerResult.innerText = ` ${computer}`;

        count -= 5;
        if (count <= 0) {
          count = 0;
          /* message.classList.add("visible"); */
        }

        Result.innerText = "computer win";
        score.innerText = count;
      } else if (playerOne === "paper" && computer === "paper") {
        playerResult.innerText = ` ${playerOne}`;
        computerResult.innerText = ` ${computer}`;
        count = count;

        Result.innerText = "draw game";
        score.innerText = count;
      } else if (playerOne === "paper" && computer === "scissors") {
        playerResult.innerText = ` ${playerOne}`;
        computerResult.innerText = ` ${computer}`;
        count -= 5;
        if (count <= 0) {
          count = 0;
          /* message.classList.add("visible"); */
        }

        Result.innerText = "computer win";
        score.innerText = count;
      } else if (playerOne === "scissors" && computer === "scissors") {
        playerResult.innerText = ` ${playerOne}`;
        computerResult.innerText = ` ${computer}`;
        count = count;

        Result.innerText = "draw game";
        score.innerText = count;
      } else if (playerOne === "scissors" && computer === "rock") {
        playerResult.innerText = ` ${playerOne}`;
        computerResult.innerText = ` ${computer}`;
        count -= 5;
        if (count <= 0) {
          count = 0;
          /* message.classList.add("visible"); */
        }

        Result.innerText = "cumpter win";
        score.innerText = count;
      } else {
        playerResult.innerText = ` ${playerOne}`;
        computerResult.innerText = ` ${computer}`;
        count += 5;

        Result.innerText = "you one win";
        score.innerText = count;
      }
    }
    playGame();
  });
});

canceal.addEventListener("click", function () {
  message.classList.remove("visible");
  location.reload();
});

setTimeout(() => {
  message.classList.add("visible");
  if (count >= 5) {
    ms.innerHTML = `your total score is ${count}`;
  } else {
    ms.innerHTML = "you lost 😔";
  }
}, 10000);
