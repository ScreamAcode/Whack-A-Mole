const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let timeUp = false;
let score = 0;


function randomTime(min,max){
    return  Math.round(Math.random() * (max-min) + min);
}

function randomHole(holes){
    const randomNo = Math.floor(Math.random() * holes.length);
    const randomHole = holes[randomNo];
    let lastHole;

    if(randomHole === lastHole){
        console.log('Ah nah thats the same one bud');
         return randomHole(holes);
    }
    
       lastHole = randomHole;

       return randomHole;
}

function molesUp(){
    const time = randomTime(200,900);
    const hole = randomHole(holes);

    hole.classList.add("up");

    setTimeout(function(){
        hole.classList.remove("up");
        if(!timeUp) {
            molesUp();
        }
    },time)
}

function startGame(){
    scoreBoard.textContent = 0 ;
    timeUp = false ;
    score = 0 ;
    molesUp();
    setTimeout(function(){
        timeUp = true;
    },10000)
}

function bonk(e){

    var bonk = new Audio("sounds/bonk.mp3");
    bonk.play();

    if(!e.isTrusted){
      return;
    }

     score++;
     this.classList.remove("up");

    scoreBoard.textContent = score ;
}

moles.forEach(mole =>mole.addEventListener("click",bonk));


