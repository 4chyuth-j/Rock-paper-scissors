let userScore = 0;
let compScore = 0;
let dsUserScr=document.querySelector("#user_score");
let dsCompScr=document.querySelector("#comp_score");
let para=document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game is draw");
    para.innerHTML="Draw move! Play Again.";
    para.style.backgroundColor="#001A6E"
};
const showWinner= (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        console.log("you won");
        para.innerHTML=`You Won! Your ${userChoice} beats ${compChoice}`;
        para.style.backgroundColor="#55ed76"
        dsUserScr.innerHTML=userScore;
    } else{
        compScore++;
        console.log("you lost");
        para.innerHTML=`You lost! ${compChoice} beats your ${userChoice} `;
       
        para.style.backgroundColor="#f0554d";
        dsCompScr.innerHTML=compScore;
    }
}

const playGame = (userChoice) => {
    console.log("user choice:", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice:", compChoice);
    if (userChoice === compChoice) {
        //draw game
        drawGame();
    } else {

        let userWin = true;  //for determining winner or looser

        if (userChoice === "rock") {// here the compchoice can't be rock cz it will be a draw
            // so only option for compchoice is paper/scissors.
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // compchoice options are rock/scissors
            userWin = compChoice === "rock" ? true : false;
        }
        else {
            //here userchoice willbe scissors and compchoice have only rock/paper
            userWin = compChoice === "paper" ? true : false;
        }
       // winner displaying function
       showWinner(userWin,userChoice,compChoice); 
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});