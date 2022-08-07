const play = document.querySelectorAll('.playbtn');

play[0].addEventListener('click', function(){
    playsong("G.O.M.D.");
});
play[1].addEventListener('click', function(){
    playsong('Ozone');
});


var songplaying = null; //This is where we will store the current playing song

function playsong(song_name){
    //settings
    var playing = null;
    if(songplaying==null){ //If a song isn't stored that means that it's not playing and vice versa
        playing = false;
    }else{
        playing = true;
    }
    var dir = "./songs/"+song_name+".mp3"; //Here we get the directory of the song
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