let artistsList = [
    "Bruno Mars",
    "Chase Atlantic",
    "Dominic Fike",
    "J. Cole",
    "Kid LAROI",
    "Roddy Ricch"
]
let songsList = [
    "Treasure",
    "Ozone",
    "3 Nights",
    "Phone Numbers",
    "Intro",
    "January 28th",
    "Wet Dreamz",
    "A Tale of 2 Citiez",
    "Fire Squad",
    "St Tropez",
    "G.O.M.D.",
    "No Role Modelz",
    "WITHOUT YOU",
    "High Fashion"
]
let albumsList = [
    "Unorthodox jukebox",
    "Chase Atlantic",
    "Dont forget about me Demos",
    "Forest hills drive",
    "Fuck love",
    "Please excuse me for being antisocial"
]

let searchbar = document.getElementById('searchbar');
let searchresult = document.querySelector('.searchresults');
let allResults = document.querySelector('.all');

searchbar.addEventListener('input', function(){
    var search = searchbar.value;
    search = search.toLowerCase();
    // artist search
    for(i=0;i<artistsList.length;i++){
        var errors = 0;
        var artist = artistsList[i];
        artist = artist.toLowerCase();
        for(s=0;s<artist.length;s++){
            if(artist[s]==search[s]){
                errors=0;
            }else{
                errors++;
            }
            if(errors<1){
                print("found "+artist+" with "+errors+" errors");
            }else{
                break;
            }
        }
    }
    // songs search 
    for(i=0;i<songsList.length;i++){
        var errors = 0;
        var song = songsList[i];
        var found = false
        song = song.toLowerCase();
        for(s=0;s<song.length;s++){
            if(song[s]==search[s]){
                errors=0;
            }else{
                errors++;
            }
            if(errors<1){
                if(found==false){
                    print("found song: "+song+" with "+errors+" errors");
                    var resultHTML = '<img src="https://bit.ly/3p239kI" alt=""><p class="title">'+song+'</p><p class="type">Song</p><div class="playbtn"><ion-icon name="play"></ion-icon></div>'
                    var resultTrack = document.createElement('div');
                    resultTrack.classList.add('track');
                    resultTrack.innerHTML = resultHTML;
                    searchresult.appendChild(resultTrack);
                    found = true
                }else{
                    print(found)
                }
            }else{
                break;
            }
        }
    }
    // album search 
    for(i=0;i<albumsList.length;i++){
        var errors = 0;
        var album = albumsList[i];
        album = album.toLowerCase();
        for(s=0;s<album.length;s++){
            if(album[s]==search[s]){
                errors=0;
            }else{
                errors++;
            }
            if(errors<1){
                print("found album: "+album+" with "+errors+" errors");
                var resultHTML = '<img src="https://bit.ly/3p239kI" alt=""><p class="title">'+album+'</p><p class="type">Song</p><div class="playbtn"><ion-icon name="play"></ion-icon></div>'
                var resultTrack = document.createElement('div');
                resultTrack.classList.add('album');
                resultTrack.innerHTML = resultHTML;
                searchresult.appendChild(resultTrack);
            }else{
                break;
            }
        }
    }
    
})