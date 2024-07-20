let userscoare=0;
let compscoar=0;

 const usersc=document.querySelector("#user-score");
 const comp=document.querySelector("#comp-score");
 
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let showWinner=(userwin)=>{
    if(userwin)
        {
            userscoare++;
            console.log("winner is  you")
            msg.innerHTML="you win";
            usersc.innerHTML=userscoare;
        }
        else{
            compscoar++;
            console.log("winner is computer");
            msg.innerHTML="you lose play Again";
            comp.innerHTML=compscoar;
        }

};
const gencompcho=()=>{
  const option=["rock","paper","scissors"];
  let ranidn=Math.floor(Math.random()*3);
  return option[ranidn];
}
const playgame=(userChoice)=>{
    console.log("playerchoice= ",userChoice);
    const compcho=gencompcho();
    console.log("computer choice=" ,compcho);

    if(userChoice===compcho)
        {
            console.log("match was draw");
            msg.innerHTML="its a draw "
        }
        else{
            let userwin=true;
            
            if (userChoice==="rock")
                {
                    //paper,scissor
                    userwin=compcho==="paper"? false:true;
                }
                else if(userChoice==="paper")
                    {
                    //rock,scissors
                    userwin=compcho==="scissors"?false:true;
                    }
                    else{
                        //rock paper
                       userwin= compcho==="rock"?false:true;
                    }
         showWinner(userwin);
                    
        }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        ///console.log("userchoise====",userChoice);
        playgame(userChoice);

    })
})
