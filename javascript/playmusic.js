const play = document.querySelectorAll('.playbtn');

play[0].addEventListener('click', function(){
    playsong("J.Cole", "ForestHillsDrive", "G.O.M.D.");
});
play[1].addEventListener('click', function(){
    playsong("ChaseAtlantic", "ChaseAtlantic", 'Ozone');
});

play[0].onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/getmusicfiles.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
            let data = xhr.response;
            print(data);
          }
      }
    }
    xhr.send();
}

var songplaying = null; //This is where we will store the current playing song

function playsong(artist_name, album_name,song_name){
    //settings
    var playing = null;
    if(songplaying==null){ //If a song isn't stored that means that it's not playing and vice versa
        playing = false;
    }else{
        playing = true;
    }
    var dir = "./songs/"+artist_name+"/"+album_name+"/"+song_name+".mp3"; //Here we get the directory of the song
    var song = new Audio(dir); //Making a new audio element
    if(!playing){ //This runs when no song is playing
        song.play();
        songplaying=song; //We save the current playing song
    }else{ //This runs when another song is already playing
        var song_alredyplaying = songplaying; //We get the audio element (song)
        song_alredyplaying.pause(); //Pause the song
        song.play(); //Then we play the new song
        songplaying=song; //Save the current playing song
    }
}