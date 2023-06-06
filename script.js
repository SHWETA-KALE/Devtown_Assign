// rock = 0;
// paper = 1;
// scissor = 2;

const options = ["rock", "paper", "scissor"];

const generateRandomResponse = () => ((Math.random() * 10).toFixed(0) % 3);
console.log(generateRandomResponse())


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const playerScoreContainer = document.querySelector("#player h1");
const computerScoreContainer = document.querySelector("#computer h1");
const messageBox = document.querySelector("#message-box h1");

let playerScore = 0,
  computerScore = 0;
 

rock.addEventListener("click", () => game(0));
paper.addEventListener("click", () => game(1));
scissor.addEventListener("click", () => game(2));


const game = (option) => {
    const computerResponse = generateRandomResponse();



    switch (option) {
        case 0:  //user chooses rock
            switch (computerResponse) {
                case 0: 
                    console.log("Draw");
                    messageBox.innerHTML = 'Match Draw';
                    break;

                case 1:
                    console.log("Computer Wins!!");
                    // paper.classList.add('lose');
                    messageBox.innerHTML = `${options[computerResponse]} beats ${options[option]} Computer wins !!`;
                    computerScore = computerScore + 1;
                    computerScoreContainer.innerHTML = computerScore;
                    break;

                case 2:
                    console.log("You Win!");
                    rock.classList.add("win");
                    setTimeout(()=>{
                        rock.classList.remove("win");
                    },1000)
                    messageBox.innerHTML = `${options[option]} beats ${options[computerResponse]} You win !!`;
                    playerScore = playerScore + 1;
                    playerScoreContainer.innerHTML = playerScore;
                    break;


                default:
                    break;
            }
            break;


        case 1:  //user chooses paper
            switch (computerResponse) {
                case 0:
                    console.log("You Win!");
                    paper.classList.add("win");
                    setTimeout(()=>{
                        paper.classList.remove("win");
                    },1000)
                    messageBox.innerHTML = `${options[option]} beats ${options[computerResponse]} You win !!`;
                    playerScore = playerScore + 1;
                    playerScoreContainer.innerHTML = playerScore;
                    break;

                case 1:
                    console.log("Draw");
                    messageBox.innerHTML = "Match Draw";
                    break;

                case 2:
                    console.log("Computer Wins!");
                    messageBox.innerHTML = `${options[computerResponse]} beats ${options[option]} Computer wins !!`;
                    computerScore = computerScore + 1;
                    computerScoreContainer.innerHTML = computerScore;
                    break;

                default:
                    break;
            }
            break;


        case 2:  //user chooses scissor
            switch (computerResponse) {
                case 0:
                    console.log("Computer Wins!");
                    messageBox.innerHTML = `${options[computerResponse]} beats ${options[option]} Computer wins !!`;
                    computerScore = computerScore + 1;
                    computerScoreContainer.innerHTML = computerScore;
                    break;

                case 1:
                    console.log("You Win!!");
                    scissor.classList.add("win");
                    setTimeout(()=>{
                        scissor.classList.remove("win");
                    },1000)
                    messageBox.innerHTML = `${options[option]} beats ${options[computerResponse]} You win !!`;
                    playerScore = playerScore + 1;
                    playerScoreContainer.innerHTML = playerScore;
                    break;

                case 2:
                    console.log("Draw");
                    messageBox.innerHTML = "Match Draw";
                    break;
                default:
                    break;
            }
    }

}

