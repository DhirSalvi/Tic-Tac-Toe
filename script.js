let boxes=document.querySelectorAll(".box");
let playerX=true;
let winmsg=document.querySelector("#msg");
let resetButton=document.querySelectorAll("#reset");
 boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        if(playerX){
            box.innerText="X";
            box.style.color="red";
            playerX=false;
            box.disabled=true;
        }
        else{
            box.innerText="O";
            box.style.color="yellow";
            playerX=true;
            box.disabled=true;
        }
        checkWinner();
    });
 });

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const disable = () =>{
    boxes.forEach((box) =>{
        box.disabled=true;
    })
}

const draw = () =>{
    let count=0;
    for(let i=0;i<boxes.length;i++){
        if(boxes[i].innerText!=""){
            count++;
            if(count===9){
                winmsg.innerText="Draw";
            }
        }
    }
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos1===pos2&&pos2===pos3){
            winmsg.innerText=`${pos1} wins `;
            disable();
            return;
        }
    }
    draw();
}

const reset = () =>{
    boxes.forEach((box) =>{
        box.disabled=false;
        box.innerText="";
    });
    playerX=true;
    winmsg.innerText="";
}


