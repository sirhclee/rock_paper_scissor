function getComputerChoice(){
    let choice = ['Rock','Paper','Scissor']; 
    let a = Math.floor(Math.random()*3); 


    return choice[a]
}

function playerRound(playerSelection, computerSelection){
    let hash = {'Rock':'Paper', 'Paper':'Scissor', 'Scissor':'Rock' }
    let result = ''; 
    if (score[0]<5 && score[1]<5 ){
        if (playerSelection.length>0){
            let player = playerSelection[0].toUpperCase() + playerSelection.substring(1);
            
            if (!hash[player])
                { return "I'm sorry...?"
                }
            else{
                if (hash[player] === computerSelection ){
                    console.log(`You lose! ${computerSelection} beats ${player}...`)
                    result = (`You lose! ${computerSelection} beats ${player}...`)
                    score[1]++; 
                }
                else if (player === computerSelection){
                    console.log("Is a tie!")
                    result =  ("Tie!")
                }
                else{
                    console.log(`You win! ${player} beats ${computerSelection}!!`)
                    result = (`You win! ${player} beats ${computerSelection}!!`)
                    score[0]++; 
                }
            }
            }
        else {
            result = "With nothing, you lose!"}
        
        const container = document.querySelector('#container');
        const content = document.createElement('div');
        content.textContent= (`${result}`);
        if (result.includes('win')){
            content.style.cssText='color: green; background:cornsilk';}
        else {content.style.cssText='color: red; background:grey'; }

        content.classList.add('content');
        container.appendChild(content);
        
        console.log(score);
        const container2 = document.querySelector('#score');
        const content2 = document.createElement('div');
        content2.textContent= ("Player: "+`${score[0]}`+ " Computer: "+`${score[1]}` );
        content2.classList.add('content2');
        container2.appendChild(content2);
        }

    else{
        let winner = '';
        if (score[0]==5){ winner = 'You Win!'}
        else{winner = 'The robots won...'}

        const container = document.querySelector('#container');
        const content = document.createElement('div');
        content.textContent= (`Game Over: ${winner}`);
        content.classList.add('content');
        container.appendChild(content);        
    }

}
let score = [0,0]; 

const buttons = document.querySelectorAll('button');

buttons.forEach( (button) => {
button.addEventListener('click', () => div = playerRound(button.id, getComputerChoice())) ;
});
   // a = playerRound(playerSelection, getComputerChoice())
    



function game(){ 
    // for (let i = 0; i<5; i++){
    //    let playerSelection = prompt('Rock Paper or Scissor??' )
    //    a = playerRound(playerSelection, getComputerChoice())
    //    console.log(a)
        
    // }




}