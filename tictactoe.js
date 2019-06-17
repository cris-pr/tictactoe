var xsAndOs = [],
    win = false,
    turn,
    turnNo = 0,
    player,
    computer,
    syms = [],
    game1p;
var playerTurn = function(space) {
    clickSpace(space);
    if (game1p && computer == "X") {
        computerClickX();
    } else if (game1p && computer == "O") {
            computerClickO();
    }
}
// clickSpace writes a symbol into the selected space if it's empty
var clickSpace = function(space) {  
    if (document.getElementById(space).innerHTML != "X" && document.getElementById(space).innerHTML != "O" && win == false) {
        if (turn == "X") {
            document.getElementById(space).innerHTML = "X";
            turn = "O";
            document.getElementById("showTurn").innerHTML = turn + "'s turn";
            checkVictory();
            turnNo++;
        } else if (turn == "O") {
            document.getElementById(space).innerHTML = "O";
            turn = "X";
            document.getElementById("showTurn").innerHTML = turn + "'s turn";
            checkVictory();
            turnNo++;
        }
    }
}

function reset() {
    xsAndOs = [];
    turnNo = 0;
    turn = "X";
    document.getElementById("showTurn").innerHTML = turn + "'s turn";
    for (var i = 0; i < 9; i++) {
        space = "s" + i.toString();
        document.getElementById(space).innerHTML = "";
    }
    win = false;
    document.getElementById("title").innerHTML = "Tic Tac Toe";

    checkVictory();
}
//Checks if either player has won the game
function checkVictory() {
    var space;
    var filteredXsAndOs = [];
    for (var i = 0; i < 9; i++) {
        space = "s" + i.toString();
        xsAndOs[i] = document.getElementById(space).innerHTML;
    }
    filteredXsAndOs = xsAndOs.filter(function(sym) {
        return sym == "";
    });
    if (filteredXsAndOs.length == 0) {
        win = 1;
        document.getElementById("title").innerHTML = "Tie!!!";
    } else {
        for (var i = 0; i <= 6; i = i + 3) {
            if (xsAndOs[i] == xsAndOs[i + 1] && xsAndOs[i + 2] == xsAndOs[i] && xsAndOs[i] !== null) {
                if (xsAndOs[i] == "O") {
                    win = 1;
                    document.getElementById("title").innerHTML = "O Wins!!!";
                } else if (xsAndOs[i] == "X") {
                    win = 1;
                    document.getElementById("title").innerHTML = "X Wins!!!";
                }
            }
        }
    }
    for (var i = 0; i < 3; i = i + 1) {
        if (xsAndOs[i] == xsAndOs[i + 3] && xsAndOs[i + 6] == xsAndOs[i] && xsAndOs[i] !== null) {
            if (xsAndOs[i] == "O") {
                win = 1;
                document.getElementById("title").innerHTML = "O Wins!!!";
            } else if (xsAndOs[i] == "X") {
                win = 1;
                document.getElementById("title").innerHTML = "X Wins!!!";
            }
        }
    }
    if (xsAndOs[0] == xsAndOs[4] && xsAndOs[8] == xsAndOs[0] && xsAndOs[0] !== null) {
        if (xsAndOs[0] == "O") {
            win = 1;
            document.getElementById("title").innerHTML = "O Wins!!!";
        } else if (xsAndOs[0] == "X") {
            win = 1;
            document.getElementById("title").innerHTML = "X Wins!!!";
        }
    } else if (xsAndOs[2] == xsAndOs[4] && xsAndOs[6] == xsAndOs[2] && xsAndOs[2] !== null) {
        if (xsAndOs[2] == "O") {
            win = 1;
            document.getElementById("title").innerHTML = "O Wins!!!";
        } else if (xsAndOs[2] == "X") {
            win = 1;
            document.getElementById("title").innerHTML = "X Wins!!!";
        }
    }
}
var computerClickO = function(){
    if (turnNo == 1 && turn == computer) {
        firstMoveO();
        return;
    } else if (turnNo == 3 && turn == computer) {
        checkForWin();
        if(turnNo == 3){
            checkFor2();
            return;
        }
        return;    
    } else if (turnNo == 5 && turn == computer) {
        checkForWin();
        if(turnNo == 5){
            checkFor2();
            return;
        }
      if(turnNo==5){
        fourthMoveO();
        return;
      }
        return;
    } else if (turnNo == 7 && turn == computer) {
        checkForWin();
        if(turnNo == 7){
            checkFor2();
        }
        if(turnNo == 7){
            fourthMoveO();
        }
      checkVictory();
        return;
    }
}

var computerClickX = function() {
    checkVictory();
    if (turnNo == 0 && turn == computer && computer == "X") {
        firstMoveX();
    } else if (turnNo == 2 && turn == computer && computer == "X") {
        secondMoveX();
    } else if (turnNo == 4 && turn == computer && computer == "X") {
        checkForWin();
        if (turnNo == 4) {
            thirdMoveX();
        }
    } else if (turnNo == 6 && turn == computer && computer == "X") {
        checkForWin();
      if (turnNo==6){
        checkFor2();
        }
      if(turnNo==6){
        ninthMoveX();
      }
    } else if (turnNo == 8 && turn == computer && computer == "X") {
        checkForWin();
       if (turnNo==8){
        ninthMoveX();
         }
      checkVictory();
    }
}
function checkFor2() {
    console.log("in check for 2");
    for (var i = 0; i < 3; i++) {
        if (xsAndOs[i] == computer) {
            if (xsAndOs[i + 3] == "" && xsAndOs[i + 6] == "") {
                clickSpace("s" + (i + 3).toString());
                return;
            }
        }
        else if(xsAndOs[i+3] == computer){
            if (xsAndOs[i] == "" && xsAndOs[i + 6] == "") {
                clickSpace("s" + (i).toString());
                return;
            }
        }
        else if(xsAndOs[i+6] == computer){
            if (xsAndOs[i] == "" && xsAndOs[i + 3] == "") {
                clickSpace("s" + (i).toString());
                return;
            }
        }
    }
    for (var i = 0; i <= 6; i = i + 3) {
        console.log("in loop horizontal");
        if (xsAndOs[i] == computer) {
            if (xsAndOs[i + 1] == "" && xsAndOs[i + 2] == "") {
                clickSpace("s" + (i + 2).toString());
                return;
            }
        }
         else if(xsAndOs[i+1] == computer){
            if (xsAndOs[i] == "" && xsAndOs[i+2] == "") {
                clickSpace("s" + (i).toString());
                return;
            }
        }
        else if(xsAndOs[i+2] == computer){
            if (xsAndOs[i] == "" && xsAndOs[i + 2] == "") {
                clickSpace("s" + (i).toString());
                return;
            }
        }
    }
    if(computer=="O"){
        if(xsAndOs[0]==computer&&xsAndOs[4]==""&&xsAndOs[8]==""){
            clickSpace("s4");
            return;
        }
        else if(xsAndOs[8]==computer&&xsAndOs[4]==""&&xsAndOs[0]==""){
            clickSpace("s4");
            return;
        }
        if(xsAndOs[2]==computer&&xsAndOs[4]==""&&xsAndOs[6]==""){
            clickSpace("s4");
            return;
        }
        else if(xsAndOs[6]==computer&&xsAndOs[4]==""&&xsAndOs[2]==""){
            clickSpace("s4");
            return;
        }
    }
}
function checkForWin() {
    console.log("in checkforwin");
    for (var j = 0; j < 2; j++) {
        console.log("loop1");
        if (xsAndOs[0] == xsAndOs[4] && xsAndOs[0] == syms[j]) {
            if (xsAndOs[8] == "") {
                clickSpace('s8');
                return;
            } 
        }
        if (xsAndOs[0] == xsAndOs[8] && xsAndOs[0] == syms[j]) {
            if (xsAndOs[4] == "") {
                clickSpace('s8');
                return;
            }
        }
        if (xsAndOs[8] == xsAndOs[4] && xsAndOs[8] == syms[j]) {
            if (xsAndOs[0] == "") {
                clickSpace('s0');
                return;
            } 
        } else if (xsAndOs[8] == xsAndOs[4] && xsAndOs[0] == "" && xsAndOs[8] == syms[j]) {
            clickSpace('s0');
            return;
        } else if (xsAndOs[2] == xsAndOs[4] && xsAndOs[6] == "" && xsAndOs[2] == syms[j]) {
            clickSpace('s6');
            return;
        } else if (xsAndOs[2] == xsAndOs[6] && xsAndOs[4] == "" && xsAndOs[2] == syms[j]) {
            clickSpace('s4');
            return;
        }
        if (xsAndOs[6] == xsAndOs[4] && xsAndOs[2] == "" && xsAndOs[6] == syms[j]) {
            console.log("here");
            clickSpace('s2');
            return;
        }
        for (var i = 0; i <= 6; i = i + 3) {
            console.log("loop2");
            if (xsAndOs[i] == xsAndOs[i + 1] && xsAndOs[i + 2] == "" && xsAndOs[i] == syms[j]) {
                var n = i + 2;
                clickSpace('s' + n.toString());
                return;

            } else if (xsAndOs[i + 1] == xsAndOs[i + 2] && xsAndOs[i] == "" && xsAndOs[i + 1] == syms[j]) {
                clickSpace('s' + i.toString());
                return;
            } else if (xsAndOs[i] == xsAndOs[i + 2] && xsAndOs[i + 1] == "" && xsAndOs[i] == syms[j]) {
                var n = i + 1;
                clickSpace('s' + n.toString());
                return;
            }
        }
        for (var i = 0; i < 3; i = i + 1) {
            console.log("loop3");
            if (xsAndOs[i] == xsAndOs[i + 3] && xsAndOs[i + 6] == "" && xsAndOs[i] == syms[j]) {
                var n = i + 6;
                clickSpace('s' + n.toString());
                return;
            } else if (xsAndOs[i + 3] == xsAndOs[i + 6] && xsAndOs[i] == "" && xsAndOs[i + 3] == syms[j]) {
                clickSpace('s' + i.toString());
                return;
            } else if (xsAndOs[i] == xsAndOs[i + 6] && xsAndOs[i + 3] == "" && xsAndOs[i] == syms[j]) {
                var n = i + 3;
                clickSpace('s' + n.toString());
                return;
            }
        }
    }
}


function firstMoveX() {
    var randNo
    //if computer is "X" it will choose a corner in the first turn
    while (turnNo == 0) {
        randNo = Math.floor(Math.random() * 9);
        if (randNo == 0 || randNo == 2 || randNo == 6 || randNo == 8) {
            clickSpace('s' + randNo.toString());
            return;
        }
    }
}

function secondMoveX() {
    if (xsAndOs[4] == player) {
        if (xsAndOs[0] == computer) {
            clickSpace('s2');
            return;
        } else if (xsAndOs[2] == computer) {
            clickSpace('s0');
            return;
        } else if (xsAndOs[6] == computer) {
            clickSpace('s0');
            return;
        } else if (xsAndOs[8] == computer) {
            clickSpace('s2');
            return;
        }
    } else if (xsAndOs[1] == player || xsAndOs[3] == player || xsAndOs[5] == player || xsAndOs[7] == player) {
        clickSpace('s4');
        return;
    } else if (xsAndOs[0] == player || xsAndOs[2] == player || xsAndOs[6] == player || xsAndOs[8] == player) {
        if (xsAndOs[0] == computer && xsAndOs[2] == "") {
            clickSpace('s2');
            return;
        } else if (xsAndOs[0] == computer && xsAndOs[6] == "") {
            clickSpace('s6');
            return;
        } else if (xsAndOs[2] == computer && xsAndOs[0] == "") {
            clickSpace('s0');
            return;
        } else if (xsAndOs[2] == computer && xsAndOs[8] == "") {
            clickSpace('s8');
            return;
        } else if (xsAndOs[6] == computer && xsAndOs[0] == "") {
            clickSpace('s0');
            return;
        } else if (xsAndOs[6] == computer && xsAndOs[8] == "") {
            clickSpace('s8');
            return;
        } else if (xsAndOs[8] == computer && xsAndOs[6] == "") {
            clickSpace('s6');
            return;
        } else if (xsAndOs[8] == computer && xsAndOs[2] == "") {
            clickSpace('s2');
            return;
        }
    }
}

function thirdMoveX() {
    if (turnNo == 4) {
        if (xsAndOs[0] == computer && xsAndOs[4] == computer) {
            if (xsAndOs[2] == "" && xsAndOs[1] == "") {
                clickSpace('s2');
                return;
            } else if (xsAndOs[6] == "") {
                clickSpace('s6');
                return;
            }
        } else if (xsAndOs[2] == computer && xsAndOs[4] == computer) {
            if (xsAndOs[0] == "" && xsAndOs[1] == "") {
                clickSpace('s0');
                return;
            } else if (xsAndOs[8] == "") {
                clickSpace('s8');
                return;
            }
        } else if (xsAndOs[6] == computer && xsAndOs[4] == computer) {
            if (xsAndOs[0] == "" && xsAndOs[3] == "") {
                clickSpace('s0');
                return;
            } else if (xsAndOs[8] == "") {
                clickSpace('s8');
                return;
            }
        } else if (xsAndOs[8] == computer && xsAndOs[4] == computer) {
            if (xsAndOs[2] == "" && xsAndOs[5] == "") {
                clickSpace('s2');
                return;
            } else if (xsAndOs[6] == "") {
                clickSpace('s6');
                return;
            }
        } else if (xsAndOs[4] == "") {
            clickSpace('s4');
            return;
        }
    }
}
//Checks if it can match two in a row with a third empty space.


function ninthMoveX() {
    var randNo;
    var squareSym;
    for (var i = 0; i < 9; i++) {
        squareSym = document.getElementById("s" + i.toString()).innerHTML;
        if (squareSym == "") {
            clickSpace('s' + i.toString());
            return;
        }
    }
}

function firstMoveO() {
    //if the computer is "O" it will choose the center if the player chose a corner
    if (xsAndOs[0] == "X" || xsAndOs[2] == "X" || xsAndOs[6] == "X" || xsAndOs[8] == "X") {
        clickSpace('s4');
        return;
    }
    //if the player chose the center, the computer will play a corner
    else {
        while (true) {
            randNo = Math.floor(Math.random() * 9);
            if (randNo == 0 || randNo == 2 || randNo == 6 || randNo == 8) {
                if(document.getElementById('s'+randNo.toString()).innerHTML==""){
                    clickSpace('s' + randNo.toString());
                    return;
                }
            }
        }
    }
}
function fourthMoveO() {
    console.log("inFourth move");
    for(var i = 0; i<9;i++){
        console.log(i);
        console.log(document.getElementById("s"+i.toString()).innerHTML);
        if(document.getElementById("s"+i.toString()).innerHTML==""){
            clickSpace("s"+i.toString());
            return;
        }
    }
}


//Script for menu
function start() {
    //this is the code for the start button
    var whitebg = document.getElementById("white-background");
    var dlg = document.getElementById("dlgbox");

    reset();
    whitebg.style.display = "none";
    dlg.style.display = "none";
    if (player == "O" && game1p === true) {
        computerClickX();
    }
}

function showDialog() {
    var whitebg = document.getElementById("white-background");
    var dlg = document.getElementById("dlgbox");

    whitebg.style.display = "block";
    dlg.style.display = "block";
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    dlg.style.left = (winWidth / 2) - 480 / 2 + "px";
    dlg.style.top = "40px";
    player=null;
    computer=null;
    game1p=null;
    document.getElementById("choose-1player").style.backgroundColor = "deepskyblue";
    document.getElementById("choose-2player").style.backgroundColor = "deepskyblue";
    document.getElementById("chooseX").style.backgroundColor = "deepskyblue";
    document.getElementById("chooseO").style.backgroundColor = "deepskyblue";
}

function click1p() {
    var square = document.getElementById("choose-1player");
    var square2 = document.getElementById("choose-2player");
    game1p = true;
    reset();
    square.style.backgroundColor = "skyblue";
    square.style.border = "solid";
    square.style.borderColor = "deepskyblue";
    square2.style.backgroundColor = "deepskyblue";
    if(player!==null){
        start();
    }

}

function click2p() {
    var square = document.getElementById("choose-2player");
    var square2 = document.getElementById("choose-1player");
    game1p = false;
    reset();
    square.style.backgroundColor = "skyblue";
    square.style.border = "solid";
    square.style.borderColor = "deepskyblue";
    square2.style.backgroundColor = "deepskyblue";
    if(player!==null){
        start();
    }

}
var chooseSym = function(sym) {
    var square = document.getElementById("choose" + sym);
    var square2;
    if (sym == "O") {
        square2 = document.getElementById("chooseX");
    } else {
        square2 = document.getElementById("chooseO");
    }
    player = sym;
    if (player == "X") {
        computer = "O";
    } else {
        computer = "X";
    }
    reset();
    syms.push(computer);
    syms.push(player);
    square.style.backgroundColor = "skyblue";
    square.style.border = "solid";
    square.style.borderColor = "deepskyblue";
    square2.style.backgroundColor = "deepskyblue";
    if(game1p!==null){
        start();
    }
}
showDialog();