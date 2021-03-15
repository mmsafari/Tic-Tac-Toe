const statusdisplay=document.querySelector('.game--status');
let gameactive=true;
let currentplayer="X";
let gamestate=["","","","","","","","",""];
const winningmessage=()=>`${currentplayer} win!`;
const drawmessege=()=>'draw!';
const currentplayerturn=()=>`${currentplayer}'s turn ...`;
statusdisplay.innerHTML=currentplayerturn();

function handlecellplayed(){

}
function handleplayerchange(){

}
function handleresultvalidation(){

}
function handlecellclick(){

}
function handlerestartgame(){

}

document.querySelectorAll('.cell').forEach(cell=>cell.addEventListener('click',handlecellclick));
document.querySelector('.game--restart').addEventListener('click',handlerestartgame);

function handlecellclick(clickedcellevent){
    const clickedcell=clickedcellevent.target;
    const clickedcellindex=parseInt(
        clickedcell.getAttribute('data-cell-index')
    );
    if(gamestate[clickedcellindex]!==""||!gameactive){
        return;
    }
    handlecellplayed(clickedcell,clickedcellindex);
    handleresultvalidation();
}
function handlecellplayed(clickedcell,clickedcellindex)
{
    gamestate[clickedcellindex]=currentplayer;
    clickedcell.innerHTML=currentplayer;
}
const winningconditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0, 4, 8],
    [2, 4, 6]
];
function handleresultvalidation(){
    let roundwon=false;
    for(let i=0;i<=7;i++){
        const wincondition=winningconditions[i];
        let a=gamestate[wincondition[0]];
        let b=gamestate[wincondition[1]];
        let c=gamestate[wincondition[2]];
        if(a===''||b===''||c===''){
            continue;
        }
        if(a===b && b===c){
            roundwon=true;
            break;
        }
    }
    if(roundwon){
        statusdisplay.innerHTML=winningmessage();
        gameactive=false;
        return;
    }
    let rounddraw=!gamestate.includes("");
    if (rounddraw){
        statusdisplay.innerHTML=drawmessege();
        gameactive=false;
        return;
    }
    handleplayerchange();
}
function handleplayerchange(){
    currentplayer=currentplayer==="X"?"O":"X";
    statusdisplay.innerHTML=currentplayerturn();
}
function handlerestartgame(){
    gameactive=true;
    currentplayer="X";
    gamestate=["", "", "", "", "", "", "", "", ""];
    statusdisplay.innerHTML=currentplayerturn();
    document.querySelectorAll(".cell").forEach(cell=>cell.innerHTML="");
}