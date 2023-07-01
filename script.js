console.log("Welcome to MyTicTacToe");
let turn="X";
let isgameover=false;


//function for changing turn

const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}

//function for checking winner

const checkWinner = ()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,0,4.75,0],
        [3,4,5,0,14.75,0],
        [6,7,8,0,24.75,0],
        [0,3,6,-10.1,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10.1,15,90],
        [0,4,8,0,15,45],
        [2,4,6,0,15,135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[2]].innerText !== '')){
            document.getElementsByClassName('info')[0].innerText = boxtext[e[2]].innerText + " Won!"
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="20vh";
            document.querySelector('.line').style.width="30vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

//Game logic

let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWinner();
            if(!isgameover) document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
        }
    })
})

//logic for reset button
reset.addEventListener('click',()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText="";
    });
    turn ="X";
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
    isgameover=false;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0";
    document.querySelector('.line').style.width="0";
})