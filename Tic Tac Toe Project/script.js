let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#new-Btn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO

//Use of 2D-Array
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

// // Function to reset the game
// const resetGame = () => {
//     boxes.forEach(box => {
//         box.innerText = ""; // Clear the text inside each box
//         box.disabled = false; // Enable all boxes
//     });
//     msgContainer.classList.add("hide"); // Hide the message container
//     turnO = true; // Reset the turn to player O
// };

// // Function to start a new game
// const newGame = () => {
//     resetGame(); // Reset the game
// };

// Function to reset the game
const resetGame = () => {
    boxes.forEach((box, index) => {
        box.innerText = index + 1; // Reset the text inside each box to its original number
        box.disabled = false; // Enable all boxes
    });
    msgContainer.classList.add("hide"); // Hide the message container
    turnO = true; // Reset the turn to player O
};

// Function to start a new game
const newGame = () => {
    resetGame(); // Reset the game
};


// Add event listener for each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

// Function to display the winner message
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

// Function to check for a winner
const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

// Event listener for the reset button
resetBtn.addEventListener("click", resetGame);

// Event listener for the new game button
newGameBtn.addEventListener("click", newGame);
