let homebtn = document.getElementById("home");
let homepg = document.getElementById("homepg");
let searchbtn = document.getElementById('search');
let searchpg = document.getElementById('searchpg');
let librarybtn = document.getElementById('library');
let librarypg = document.getElementById('librarypg');

function print(v){
    console.log(v);
}

let ls = window.localStorage;
let ss = window.sessionStorage;


homebtn.addEventListener("click", function(){
    homebtn.style.background = "var(--secondarycolor)";
    homebtn.style.color = 'var(--primarycolor)';
    searchbtn.style.background = 'var(--primarycolor)';
    searchbtn.style.color = "var(--secondarycolor)";
    librarybtn.style.background = 'var(--primarycolor)';
    librarybtn.style.color = "var(--secondarycolor)";
    homepg.classList.remove("closed");
    searchpg.classList.add("closed");
    librarypg.classList.add("closed");
})
searchbtn.addEventListener("click", function(){
    homebtn.style.background = 'var(--primarycolor)';
    homebtn.style.color = "var(--secondarycolor)";
    searchbtn.style.background = "var(--secondarycolor)";
    searchbtn.style.color = 'var(--primarycolor)';
    librarybtn.style.background = 'var(--primarycolor)';
    librarybtn.style.color = "var(--secondarycolor)";
    homepg.classList.add("closed");
    searchpg.classList.remove("closed");
    librarypg.classList.add("closed");
})
librarybtn.addEventListener("click", function(){
    homebtn.style.background = 'var(--primarycolor)';
    homebtn.style.color = "var(--secondarycolor)";
    searchbtn.style.background = 'var(--primarycolor)';
    searchbtn.style.color = "var(--secondarycolor)";
    librarybtn.style.background = "var(--secondarycolor)";
    librarybtn.style.color = 'var(--primarycolor)';
    homepg.classList.remove("closed");
    searchpg.classList.remove("closed");
    librarypg.classList.add("closed");
})

function btnclick(id){
    var activebtn = document.getElementsByClassName("active");
    for(i=0;  i<activebtn.length; i++){
        activebtn[i].classList.toggle("active");
    }
    var btn = document.getElementById(id);
    btn.classList.toggle('active');
}

//Account
var isSigned = false;
const moreAccInfo = document.querySelector(".accmore");
const profilebtn = document.querySelector('.profilebtn');
if(isSigned==false){
    print("not logged in");
    const buttons = '<button id="signupbtn">Sign up</button><br><button id="loginbtn">login</button>';
    moreAccInfo.innerHTML = buttons;
}else{
    print("logged in")
}

profilebtn.addEventListener('click', function(){
    moreAccInfo.classList.toggle('hidden');
})