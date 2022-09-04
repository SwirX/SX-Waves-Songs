const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

let signupName = document.querySelector('sName');
let signupEmail = document.querySelector('sEmail');
let signupPassword = document.querySelector('sPw');

let loginEmail = document.querySelector('lEmail');
let loginPassword = document.querySelector('lPw');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
