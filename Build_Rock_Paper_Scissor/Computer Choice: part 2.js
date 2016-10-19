
var userChoice = prompt("Do you choose rock, paper or scissors?")
var computerChoice = Math.random()
{
    if (0 < computerChoice < 0.33)
    {
        computerChoice = "rock";
    }
    else if (0.33 < computerChoice < 0.66)
    {
        computerChoice = "paper";
    }
    else (0.66 < computerChoice < 1)
    {
        computerChoice = "scissor";
    }
}

console.log(computerChoice);
