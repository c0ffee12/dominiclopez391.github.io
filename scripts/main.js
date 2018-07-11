var myImage = document.querySelector('img');
var myHeader = document.querySelector('h1');
var myButton = document.querySelector('button');
myImage.onclick = function() {
	
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/dog1.jpg') {
		myImage.setAttribute('src', 'images/dog2.jpeg');
	} else {
		myImage.setAttribute('src', 'images/dog1.jpg');
	}
	
}

//set header
if(!localStorage.getItem('name')) {
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