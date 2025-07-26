let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const  msg=document.querySelector("#msg");
const usersp=document.querySelector("#user-score");
const comps=document.querySelector("#comp-score");
const gencompchoi=()=>{
    const options=["rock","paper","scissors"];
    const randix=Math.floor(Math.random()*3);
    return options[randix];
}
const drawgame=()=>{
    console.log("game is draw");
    msg.innerText ="game was draw";
    msg.style.backgroundColor = "#081b31"
}
const showwinner = (userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        usersp.innerText=userscore;
        console.log("you win");
       msg.innerText =`you win as ${userchoice} beats ${compchoice}`;
         msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        comps.innerText=compscore;
         console.log("you lose");
         msg.innerText =`you lost as ${compchoice} beats ${userchoice}`;
         msg.style.backgroundColor= "red";
    }
}
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice = gencompchoi();
     console.log("computer choice=",compchoice);
     if(userchoice === compchoice){
        drawgame();
     }else{
        let userwin = true;
        if(userchoice === "rock"){ // paper scissor
            userwin = compchoice === "paper"?false :true;
        }
        else if(userchoice === "paper"){ //rock scissor
            userwin = compchoice === "scissors"?false:true;
        }
        else{//scissor paper
            userwin = compchoice === "rock"?false:true;
        }
         showwinner(userwin,userchoice,compchoice);
     } 

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
}

)