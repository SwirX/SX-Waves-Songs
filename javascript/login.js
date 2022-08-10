define(['require', 'name'], function (require) {
    var namedModule = require('name');
});
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

function saveDataToFile(data) {
    var blob = new Blob([data],
        { type: "text/plain;charset=utf-8" });
    saveAs(blob, "static.txt");
}

    fs.readFile('../songs.json', (err, data) => {
    if (err) throw err;
  
    console.log(data.toString());
})