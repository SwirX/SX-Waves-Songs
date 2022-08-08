const play = document.querySelectorAll('.playbtn');

play[0].addEventListener('click', function(){
    playAlbum("J.Cole", "ForestHillsDrive", 0);
});
play[1].addEventListener('click', function(){
    playAlbum("DominicFike", "DontForgetAboutMeDemos", 0);
});

var songplaying = document.querySelector(".currentplaying");
var title = document.querySelector('.title-name');
var author = document.querySelector('.author-name');
var playpausebtn = document.querySelector('.ppbtn');
var playnext = document.querySelector('.play-forward');
var playprevious = document.querySelector('.play-back');

var currentsonginfoTemplate = {
        "title": "",
        "author": "",
        "album": "",
        "timestamp":'0:00',
        "isPlaying": false,
        "isPlaylist": false,
        "index": 0
}

var currentSongInfo = ls.setItem("currentSongInfo", JSON.stringify(currentsonginfoTemplate));
var currentsonginfo = ls.getItem("currentSongInfo");

playpausebtn.addEventListener("click", resumesong);



function resumesong(){
    var info = JSON.parse(currentsonginfo);
    if(info.isPlaying==true){
        info.timestamp = songplaying.currentTime;
        songplaying.pause()
        playpausebtn.innerHTML = '<ion-icon name="play-outline"></ion-icon>'
        info.isPlaying = false;
    }else{
        songplaying.play();
        playpausebtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>'
        info.isPlaying = true;
    }
    currentsonginfo = JSON.stringify(info);
}

function updateInfo(a_n, al_n, s_n, ts, p){
    info = JSON.parse(currentsonginfo);
    info.author = a_n;
    info.album = al_n;
    info.title = s_n;
    info.timestamp = ts; 
    info.isPlaying = p;
    currentsonginfo = JSON.stringify(info);
}

function playsong(artist_name, album_name,song_name){
    //settings
    var info = JSON.parse(currentsonginfo);
    var playing = info.isPlaying;
    var dir = "./songs/"+artist_name+"/"+album_name+"/"+song_name+".mp3";
    songplaying.src = dir;
    if(!playing){
        title.innerHTML = song_name;
        author.innerHTML = artist_name;
        songplaying.play();
        songplaying.addEventListener("timeupdate", ()=>{
            getTime(songplaying);
        } );
        playpausebtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>'
        updateInfo(artist_name, album_name, song_name, 0, true);
    }else{
        title.innerHTML = song_name;
        author.innerHTML = artist_name;
        songplaying.play();
        songplaying.addEventListener("timeupdate", ()=>{
            getTime(songplaying);
        } );
        playpausebtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>'
        updateInfo(artist_name, album_name, song_name, 0, true);
    }
}
songInfo = {
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


function playAlbum(artistName, albumName, i){
    var currentArtist = songInfo[artistName];
    var currentAlbum = currentArtist[albumName];
    playsong(artistName, albumName, currentAlbum[i]);
    songplaying.addEventListener("ended", function(){
        print("song ended");
        if(i<currentAlbum.length){
            i++;
        }else{
            i=0
        }
        playAlbum(artistName, albumName, i);
    })
}

function getTime(s_obj) {
    var duration = document.querySelector('.duration');
    var s = parseInt(s_obj.currentTime % 60);
    var m = parseInt((s_obj.currentTime / 60) % 60);
    if(s<10){
        s= "0"+s;
    }
     duration.innerHTML = m + ':' + s ;
}