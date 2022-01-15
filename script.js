'use strict'

let secret=Math.trunc(Math.random()*100)+1;  //creates a random number between 1-100.
var score=100;
let highscore=0;
document.querySelector('.check').addEventListener('click',
    function() {
        const guess=Number(document.querySelector('.guess').value);
        if(guess===secret){
            if(score<0){
                document.querySelector('.message').textContent='💥 U LOSE!! try again 😅';
            }
            else{
            document.querySelector('.message').textContent='🏆 U WIN!!!';
            document.querySelector('.score').textContent=score;
            document.querySelector('.number').textContent=secret;
            document.body.style.backgroundColor='green';
            if(score>highscore){
                highscore=score;
                document.querySelector('.highscore').textContent=highscore;
            }
        }
        }
        else if(guess>secret){
            if(score<0){
                document.querySelector('.message').textContent='💥 U LOSE!! try again 😅';
            }
            else {
            document.querySelector('.message').textContent='📈 TOO HIGH!! try again';
            score--;
            document.querySelector('.score').textContent=score; }
        }
        else{
            if(score<0){
                document.querySelector('.message').textContent='💥 U LOSE!! try again 😅';
            }
           else{ document.querySelector('.message').textContent='📈 TOO LOW!! try again';
            score--;
            document.querySelector('.score').textContent=score; }
        }
        if(!guess) {
            document.querySelector('.message').textContent='⛔ Error!! pls enter a number';
            document.querySelector('.score').textContent=0;

        }
        
    });
    

    document.querySelector('.again').addEventListener('click',
    function (){
        score=100;
        secret=Math.trunc(Math.random()*100)+1; 

        document.querySelector('.message').textContent='Start guessing...';
        document.querySelector('.score').textContent=score;
        document.querySelector('.number').textContent='?';
        document.querySelector('.guess').value='';
        document.body.style.backgroundColor='rgb(130, 29, 212)';

    });