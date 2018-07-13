
var myHeader = document.querySelector('h1');
var myButton = document.querySelector('button');
var myImages = document.querySelectorAll('img');

for(var i = 0; i < myImages.length; i++) {
	myImages[i].onclick = function() {
		mySrc = this.getAttribute('src');
		if(mySrc === 'images/dog1.jpg') {
			this.setAttribute('src', 'images/dog2.jpeg');
			this.setAttribute('title', 'goodboy2');
		} else {
			this.setAttribute('src', 'images/dog1.jpg');
			this.setAttribute('title', 'goodboy1');
		}
	}
}

//set header
if(!localStorage.getItem('name') || localStorage.getItem('name') === 'null') {
	setUserName();
}
else {
	myHeader.textContent = 'Hello, ' + localStorage.getItem('name') + '!';
}

//set username
function setUserName() {
	var myName = prompt('Enter a username.');
	localStorage.setItem('name', myName);
	myHeader.textContent = 'Hello, ' + myName + '!';
}

//change username
myButton.onclick = function() {
	setUserName();
}

//guessGame
var guessField = document.querySelector('.guessField');
var guessSubmit = document.querySelector('.guessSubmit');
var randomValue = Math.floor(Math.random() * 100) + 1;
var winCondition = document.querySelector('.winCondition');

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
	if(Number(guessField.value) < randomValue) {
		winCondition.textContent = 'Guess Is Low';
		document.getElementsByClassName('winCondition')[0].style.color = "blue";
		guessField.value = '';
		guessField.focus();
	} else if(Number(guessField.value) > randomValue) {
		winCondition.textContent = 'Guess Is High';
		document.getElementsByClassName('winCondition')[0].style.color = "red";
		guessField.value = '';
		guessField.focus();
	}
	else if (Number(guessField.value) === randomValue) {
		winCondition.textContent = 'You Win!';
		guessField.setAttribute('disabled', true);
		document.getElementsByClassName('winCondition')[0].style.color = "yellow";
	}
	else {
		winCondition.textContent = 'Numbers Only!';
		document.getElementsByClassName('winCondition')[0].style.color = "black";
	}
}


