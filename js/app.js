// User and Computer scores variables
let username = prompt("Please enter your name ");
while (!username) {
	alert("Please Enter Correct Name!");
	username = prompt("Please enter your name: ");
}

document.getElementById("userlabel").innerHTML = username;
let userScore = 0;
let compScore = 0;

// Score Reset Button Function
function btnReset() {
	userScore = 0;
	compScore = 0;
	document.getElementById("Userscore").innerHTML = 0;
	document.getElementById("Compscore").innerHTML = 0;
}

// Main Function
function btnValue(value) {
	// value of button stored in variable
	let userInput = value;
	console.log(userInput);

	// Value of computer generated here
	let compInput = Math.floor(Math.random() * 3);
	if (compInput <= 1) {
		compInput = "Rock";
	} else if (compInput <= 2) {
		compInput = "Paper";
	} else {
		compInput = "Scissors";
	}

	// print choices
	document.getElementById("choiceSelect").innerHTML =
		"You Chose " + userInput + ". Computer Chose " + compInput;

	// Conditions to compare user and computer inputs
	if (userInput === compInput) {
		document.getElementById("result").innerHTML = "It's a tie!";
	}
	if (userInput === "Rock") {
		if (compInput === "Scissors") {
			document.getElementById("result").innerHTML = "You Win!";
			userScore++;
		} else if (compInput === "Paper") {
			document.getElementById("result").innerHTML = "Computer Wins!";
			compScore++;
		}
	}
	if (userInput === "Paper") {
		if (compInput === "Rock") {
			document.getElementById("result").innerHTML = "You Win!";
			userScore++;
		} else if (compInput === "Scissors") {
			document.getElementById("result").innerHTML = "Computer Wins";
			compScore++;
		}
	}
	if (userInput === "Scissors") {
		if (compInput === "Paper") {
			document.getElementById("result").innerHTML = "You Win!";
			userScore++;
		} else if (compInput === "Rock") {
			document.getElementById("result").innerHTML = "Computer Win!";
			compScore++;
		}
	}

	// print scores
	document.getElementById("Userscore").innerHTML = userScore;
	document.getElementById("Compscore").innerHTML = compScore;

	// Decide winner
	if ((userScore === 10 || compScore === 10) && userScore > compScore) {
		alert(username + " Wins! :) ");
		window.location.reload(true);
	} else if (
		(userScore === 10 || compScore === 10) &&
		userScore < compScore
	) {
		alert("Computer Wins! :( ");
		window.location.reload(true);
	} else if (
		(userScore === 10 || compScore === 10) &&
		userScore === compScore
	) {
		alert("It's a tie! Nobody won :-| ");
		window.location.reload(true);
	}
}
