const resetBtn = document.querySelector(".reset");
const boardBtns = document.querySelectorAll(".boardBtn");
const winnerBtn = document.querySelector(".winnerBtn");
let moves = 1;

boardBtns.forEach(btn => {
    btn.addEventListener("click", function(){
        if (moves <= 9){
            if (moves % 2 == 1){
                this.textContent = "X";
            }
            else{
                this.textContent = "O";
            }
            this.disabled = true;
            moves++;
            checkForWin();
        }
    })
});

function checkForWin()
{
    if (equalBtns(boardBtns[0], boardBtns[1], boardBtns[2]) || equalBtns(boardBtns[3], boardBtns[4], boardBtns[5]) ||
        equalBtns(boardBtns[6], boardBtns[7], boardBtns[8]) || equalBtns(boardBtns[0], boardBtns[3], boardBtns[6]) ||
        equalBtns(boardBtns[1], boardBtns[4], boardBtns[7]) || equalBtns(boardBtns[2], boardBtns[5], boardBtns[8]) ||
        equalBtns(boardBtns[0], boardBtns[4], boardBtns[8]) || equalBtns(boardBtns[2], boardBtns[4], boardBtns[6]))
        {
            boardBtns.forEach(btn => btn.disabled = true);
        }
    if (moves == 10 && winnerBtn.textContent == "")
    {
        winnerBtn.textContent = "Draw";
        boardBtns.forEach(btn => btn.disabled = true);
    }
}

function equalBtns(btn1, btn2, btn3)
{
    if (btn1.textContent != "" && btn1.textContent == btn2.textContent && btn2.textContent == btn3.textContent)
    {
        if (btn1.textContent == "X") { winnerBtn.textContent = "Player 1" }
        else { winnerBtn.textContent = "Player 2" }
        return true;
    }
    return false;
}

resetBtn.addEventListener("click", function(){
    boardBtns.forEach(btn => {
        btn.textContent = ""; btn.disabled = false;
    });
    winnerBtn.textContent = "";
    moves = 1;
});