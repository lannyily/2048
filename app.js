document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('#score')
    const resultDisplay = document.querySelector('#result')
    const width = 4
    let squares = []
    let score = 0

    
    function createBoard(){
        for (let i = 0; i < width * width; i++){
            const square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
            squares.push(square)
        }
        generate()
        generate()
        
    }
    createBoard()

    
    function generate(){
        const randomNumber = Math.floor(Math.random() * squares.length)
        console.log(randomNumber)
        if(squares[randomNumber].innerHTML == 0) {
            squares[randomNumber].innerHTML = 2
            checkForGameOver()
        } else generate()
    }

    function moveRight(){
        for (let i = 0; i < 16; i++){
            if (i % 4 === 0){
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+1].innerHTML
                let totalThree = squares[i+2].innerHTML
                let totalFour = squares[i+3].innerHTML
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

                let filtereRow = row.filter(num => num)
                let missing = 4 - filtereRow.length
                let zeros = Array(missing).fill(0)
                let newRow = zeros.concat(filtereRow)
               
                squares[i].innerHTML = newRow[0]
                squares[i+1].innerHTML = newRow[1]
                squares[i+2].innerHTML = newRow[2]
                squares[i+3].innerHTML = newRow[3]
            }
        }
    }

    function moveLeft() {
        for (let i = 0; i < 16; i++) {
            if (i % 4 === 0) {
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+1].innerHTML
                let totalThree = squares[i+2].innerHTML
                let totalFour = squares[i+3].innerHTML
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

                let filtereRow = row.filter(num => num)
                let missing = 4 - filtereRow.length
                let zeros = Array(missing).fill(0)
                let newRow = filtereRow.concat(zeros)
               
                squares[i].innerHTML = newRow[0]
                squares[i+1].innerHTML = newRow[1]
                squares[i+2].innerHTML = newRow[2]
                squares[i+3].innerHTML = newRow[3]
            }
        }
    }

    function moveUp() {
        for (let i = 0; i < 4; i++) {
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i+width].innerHTML
            let totalThree = squares[i+width*2].innerHTML
            let totalFour = squares[i+width*3].innerHTML
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

            let filtereColumn = column.filter(num => num)
            let missing = 4 - filtereColumn.length
            let zeros = Array(missing).fill(0)
            let newColumn = filtereColumn.concat(zeros)
            
            squares[i].innerHTML = newColumn[0]
            squares[i+width].innerHTML = newColumn[1]
            squares[i+width*2].innerHTML = newColumn[2]
            squares[i+width*3].innerHTML = newColumn[3]
        }
    }

    function moveDown() {
        for (let i = 0; i < 4; i++) {
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i+width].innerHTML
            let totalThree = squares[i+width*2].innerHTML
            let totalFour = squares[i+width*3].innerHTML
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

            let filtereColumn = column.filter(num => num)
            let missing = 4 - filtereColumn.length
            let zeros = Array(missing).fill(0)
            let newColumn = zeros.concat(filtereColumn)
            
            squares[i].innerHTML = newColumn[0]
            squares[i+width].innerHTML = newColumn[1]
            squares[i+width*2].innerHTML = newColumn[2]
            squares[i+width*3].innerHTML = newColumn[3]
        }
    }

    function combineRow() {
        for (let i = 0; i < 15; i++) {
            if (squares[i].innerHTML === squares[i + 1].innerHTML && squares[i].innerHTML != 0) {
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML);
    
                
                if (combinedTotal === 2048) {
                    squares[i].classList.add("new-2048");
                }
    
                squares[i].innerHTML = combinedTotal;
                squares[i + 1].innerHTML = 0;
                score += combinedTotal;
                scoreDisplay.innerHTML = score;
            }
        }
        checkForWin(); 
    }
    
    function combineColumn() {
        for (let i = 0; i < 12; i++) {
            if (squares[i].innerHTML === squares[i + width].innerHTML && squares[i].innerHTML != 0) {
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i + width].innerHTML);
    
                
                if (combinedTotal === 2048) {
                    squares[i].classList.add("new-2048");
                }
    
                squares[i].innerHTML = combinedTotal;
                squares[i + width].innerHTML = 0;
                score += combinedTotal;
                scoreDisplay.innerHTML = score;
            }
        }
        checkForWin(); 
    }    

    function control(e){
        if (e.key === 'ArrowLeft') {
            keyLeft()
        } else if (e.key === 'ArrowRight') {
            keyRight()
        } else if (e.key === 'ArrowUp') {
            keyUp()
        } else if (e.key === 'ArrowDown') {
            keyDown()
        }
    }

    document.addEventListener('keydown', control)

    function keyLeft(){
        moveLeft()
        combineRow()
        moveLeft()
        generate()
    }

    function keyRight(){
        moveRight()
        combineRow()
        moveRight()
        generate()
    }

    function keyUp(){
        moveUp()
        combineColumn()
        moveUp()
        generate()
    }

    function keyDown(){
        moveDown()
        combineColumn()
        moveDown()
        generate()
    }


    function checkForWin() {
        for (let i = 0; i < squares.length; i++) {
            if (squares[i].innerHTML == 2048 && squares[i].classList.contains("new-2048")) {
                setTimeout(() => {
                    alert("Você GANHOU! Parabéns!");
                    restartGame();
                }, 100);
                document.removeEventListener('keydown', control);
                return;
            }
        }
    }    

    function checkForGameOver() {
        let noMovesLeft = true;
    
        for (let i = 0; i < squares.length; i++) {
            if (squares[i].innerHTML == 0) {
                return; 
            }
        }
    
        for (let i = 0; i < squares.length; i++) {
            if ((i % width !== width - 1) && squares[i].innerHTML === squares[i + 1].innerHTML) {
                return; 
            }
        }
    
        for (let i = 0; i < squares.length - width; i++) {
            if (squares[i].innerHTML === squares[i + width].innerHTML) {
                return; 
            }
        }
    
        resultDisplay.innerHTML = 'Você PERDEU!';
        document.removeEventListener('keydown', control);
    
        alert("Você perdeu! Tente novamente :)");
        restartGame();
    }    

    function addColours() {
        for (let i = 0; i < squares.length; i++) {
            let value = squares[i].innerHTML;
            
            
            if (value.length === 1) {
                squares[i].style.fontSize = "60px";
            } else if (value.length === 2) {
                squares[i].style.fontSize = "60px";
            } else if (value.length === 3) {
                squares[i].style.fontSize = "50px";
            } else {
                squares[i].style.fontSize = "45px"; 
            }
    
            
            if (value == 0) squares[i].style.backgroundColor = '#796e62';
            else if (value == 2) squares[i].style.backgroundColor = '#eee4da';
            else if (value == 4) squares[i].style.backgroundColor = '#ede0c8';
            else if (value == 8) squares[i].style.backgroundColor = '#f2b179';
            else if (value == 16) squares[i].style.backgroundColor = '#ffcea4';
            else if (value == 32) squares[i].style.backgroundColor = '#e8c064';
            else if (value == 64) squares[i].style.backgroundColor = '#ffab6e';
            else if (value == 128) squares[i].style.backgroundColor = '#fd9982';
            else if (value == 256) squares[i].style.backgroundColor = '#ead79c';
            else if (value == 512) squares[i].style.backgroundColor = '#76daff';
            else if (value == 1024) squares[i].style.backgroundColor = '#beeaa5';
            else if (value == 2048) squares[i].style.backgroundColor = '#d7d4f0';
        }
    }
    

    addColours()

    let myTimer = setInterval(addColours, 50)

    function restartGame() {
        score = 0;
        scoreDisplay.innerHTML = score;
        
        squares.forEach(square => square.innerHTML = 0);
        
        generate();
        generate();
        
        resultDisplay.innerHTML = 'Pense estrategicamente para deslizar os blocos e alcançar o valor <b>2048</b>!';
        
        document.addEventListener('keydown', control);
    }    
    
    document.getElementById('restartButton').addEventListener('click', restartGame);

})