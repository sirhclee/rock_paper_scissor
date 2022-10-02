function getComputerChoice(){
    let choice = ['Rock','Paper','Scissor']; 
    let a = Math.floor(Math.random()*3); 


    return choice[a]
}

function playerRound(playerSelection, computerSelection){
    let hash = {'Rock':'Paper', 'Paper':'Scissor', 'Scissor':'Rock' }
    if (playerSelection.length>0){
        let player = playerSelection[0].toUpperCase() + playerSelection.substring(1);
        if (!hash[player])
            { return "I'm sorry...?"
            }
        else{
            if (hash[player] === computerSelection ){
                return `You lose! ${computerSelection} beats ${player}...`
            }
            else if (player === computerSelection){
                return "It's a tie!"
            }
            else{
                return `You win! ${player} beats ${computerSelection}!!`
            
            }
        }
        }
    else {
        return "With nothing, you lose!"}

}


function game(){ 
    for (let i = 0; i<5; i++){
       let playerSelection = prompt('Rock Paper or Scissor??' )
       a = playerRound(playerSelection, getComputerChoice())
       console.log(a)
        
    }


}