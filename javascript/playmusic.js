let songInfo = {
    "BrunoMars":{
        "UnorthodoxJukebox":[
            "Treasure"
        ]
    },
    "ChaseAtlantic":{
        "ChaseAtlantic":[
            "Ozone"
        ]
    },
    "DominicFike":{
        "DontForgetAboutMeDemos":[
            "3 Nights",
            "Phone Numbers"
        ]
    },
    "J.Cole":{
        "ForestHillsDrive":[
            "Intro",
            "January 28th",
            "Wet Dreamz",
            "A Tale of 2 Citiez",
            "Fire Squad",
            "St Tropez",
            "G.O.M.D.",
            "No Role Modelz"
        ]
    },
    "KidLAROI":{
        "FuckLove":[
            "WITHOUT YOU"
        ]
    },
    "RoddyRicch":{
        "PleaseExcuseMeForBeingAntisocial":[
            "High Fashion"
        ]
    }
}

let currentsonginfoTemplate = {
    "title": "",
    "author": "",
    "album": "",
    "timestamp":'0',
    "isPlaying": false,
    "index": 0
}
// ls.setItem("currentSongInfo", JSON.stringify(currentsonginfoTemplate))

var songplaying = document.querySelector(".currentplaying");
var title = document.querySelector('.title-name');
var author = document.querySelector('.author-name');
var playpausebtn = document.querySelector('.ppbtn');
var playnext = document.querySelector('.play-forward');
var playprevious = document.querySelector('.play-back');
var slider = document.querySelector(".slider");
const play = document.querySelectorAll('.playbtn');

playpausebtn.addEventListener("click", resumesong);
playnext.addEventListener("click", ()=>{
    next_previous(1);
});
playprevious.addEventListener('click', ()=>{
    next_previous(2);
})

play[0].addEventListener('click', function(){
    playAlbum("J.Cole", "ForestHillsDrive", 0);
});
play[1].addEventListener('click', function(){
    playAlbum("DominicFike", "DontForgetAboutMeDemos", 0);
});

window.onload = load;
window.onunload = unload;

function changeSongTime(){
    var info = JSON.parse(ls.getItem("currentSongInfo"));
    songplaying.pause();
    var p = slider.value;
    var d = songplaying.duration;
    var ct = (p/100)*d;
    songplaying.currentTime = ct;
    info.timestamp = ct;
    songplaying.play();
    ls.setItem("currentSongInfo", JSON.stringify(info));
    playpausebtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
}
function updateSlider(){
    var info = JSON.parse(ls.getItem("currentSongInfo"));
    getTime(songplaying);
    var d = songplaying.duration;
    var ct = songplaying.currentTime;
    var p = (ct/d)*100
    slider.value = p;
    info.timestamp = ct;
    ls.setItem("currentSongInfo", JSON.stringify(info));
}
songplaying.addEventListener("timeupdate", function(){
    setInterval(updateSlider, 500);
})
slider.addEventListener('change', changeSongTime)
slider.addEventListener('mousedown', ()=>{
    print("mousedown")
    changeSongTime;
    songplaying.pause();
})
slider.addEventListener("mouseup", ()=>{
    print("mouseup")
    changeSongTime;
    songplaying.play()
})

function load(){
    var info = JSON.parse(ls.getItem("currentSongInfo"));
    var artistV = info.author;
    var albumV = info.album;
    var titleV = info.title;
    var timestamp = info.timestamp;
    var dir = "./songs/"+artistV+"/"+albumV+"/"+titleV+".mp3";
    songplaying.src = dir;
    songplaying.currentTime = timestamp;
    title.innerHTML = titleV;
    author.innerHTML = artistV;
    getTime(songplaying);
};
function unload(){
    var info = JSON.parse(ls.getItem("currentSongInfo"));
    var timestamp = info.timestamp;
    timestamp = songplaying.currentTime;
    ls.setItem("currentSongInfo", JSON.stringify(info));
};


function resumesong(){
    var info = JSON.parse(ls.getItem("currentSongInfo"));
    if(info.isPlaying==true){
        songplaying.currentTime=info.timestamp;
        songplaying.pause();
        playpausebtn.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
        info.isPlaying = false;
    }else{
        songplaying.play();
        playpausebtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
        info.isPlaying = true;
    }
    ls.setItem("currentSongInfo", JSON.stringify(info));
};

function updateInfo(a_n, al_n, s_n, ts, p, i){
    info = JSON.parse(ls.getItem("currentSongInfo"));
    info.author = a_n;
    info.album = al_n;
    info.title = s_n;
    info.timestamp = ts; 
    info.isPlaying = p;
    info.index = i;
    ls.setItem("currentSongInfo", JSON.stringify(info));
};

function next_previous(v){
    if(v==1){
        var info = JSON.parse(ls.getItem("currentSongInfo"));
        var cArtist = info.author;
        var cAlbum = info.album;
        var newIndex = info.index;
        var currentArtist = songInfo[cArtist];
        var currentAlbum = currentArtist[cAlbum];
        if(newIndex>=((currentAlbum.length)-1)){
            newIndex=0
        }else{
            newIndex++
        };
        playAlbum(cArtist, cAlbum, newIndex);
    }else{
        var info = JSON.parse(ls.getItem("currentSongInfo"));
        var cArtist = info.author;
        var cAlbum = info.album;
        var newIndex = info.index;
        var currentArtist = songInfo[cArtist];
        var currentAlbum = currentArtist[cAlbum];
        if(newIndex!=0){
            newIndex--
        }else{
            newIndex=(currentAlbum.length)-1
        };
        playAlbum(cArtist, cAlbum, newIndex);
    };
};

function playsong(artist_name, album_name,song_name, i){
    var info = JSON.parse(ls.getItem("currentSongInfo"));
    var playing = info.isPlaying;
    var dir = "./songs/"+artist_name+"/"+album_name+"/"+song_name+".mp3";
    songplaying.src = dir;
    if(!playing){
        title.innerHTML = song_name;
        author.innerHTML = artist_name;
        songplaying.play();
        playpausebtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
    }else{
        title.innerHTML = song_name;
        author.innerHTML = artist_name;
        songplaying.play();
        playpausebtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
    };
    updateInfo(artist_name, album_name, song_name, 0, true, i);
};



function playAlbum(artistName, albumName, i){
    var currentArtist = songInfo[artistName];
    var currentAlbum = currentArtist[albumName];
    playsong(artistName, albumName, currentAlbum[i], i);
    songplaying.addEventListener("ended", function(){
        print("song ended");
        if(i<currentAlbum.length){
            i++;
        }else{
            i=0;
        }
        playAlbum(artistName, albumName, i);
    });
};

function getTime(s_obj) {
    var duration = document.querySelector('.duration');
    var s = parseInt(s_obj.currentTime % 60);
    var m = parseInt((s_obj.currentTime / 60) % 60);
    if(s<10){
        s= "0"+s;
    };
     duration.innerHTML = m + ':' + s ;
};