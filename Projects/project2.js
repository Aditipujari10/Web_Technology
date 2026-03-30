let gameSeq = [];
let userSeq = [];
let Score = [];

let btns = ["yellow","red","purple","green"];
let started = false;
let lavel = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started")
        started = true;

        levelUp();
    }
})
function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250);
}


function levelUp(){
    userSeq = [];
    lavel++;
    h2.innerText = `Level ${lavel}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    // console.log(randColor);
    // console.log(randIdx);
    gameSeq.push(randColor);
    console.log(gameSeq);
    
    gameFlash(randBtn);
}

function checkAns(idx) {
    //console.log("current level ",lavel);
    
    if(userSeq[idx] == gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,250);
       }
        
    }else{
        Score.push(lavel);
        hScore = highScore();
        h2.innerHTML =  `Game Over! Your score was <b> ${lavel} </b> <br> Your highest score is ${hScore} . <br> Press any key to strat`;
        
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress(){
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq = [];
    userSeq = [];
    lavel = 0;
}
function  highScore() {
    let highest = Score[0];
    for(let i=0;i<Score.length;i++){
        if(Score[i] >= Score[0] ){
            highScore = Score[i];
        }
    }
    return highest;
}