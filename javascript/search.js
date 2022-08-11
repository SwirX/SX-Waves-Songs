let artistsList = [
    "Adele",
    "AliGatie",
    "ArizonaZervas",
    "BringMeTheHorizon",
    "Bruno Mars",
    "ChaliePuth",
    "Chase Atlantic",
    "Dababy",
    "DJKhaled",
    "Dominic Fike",
    "Drake",
    "EdSheeran",
    "J. Cole",
    "Kid LAROI",
    "Roddy Ricch"
]
let songsList = [
    "Fire to the rain",
    "Idk",
    "Its you",
    "24",
    "C u l8r",
    "Drain me",
    "FML",
    "My time",
    "On ten",
    "Oh my lord",
    "Holy trinity",
    "Can you feel my heart",
    "Die4u",
    "Sleepwalking",
    "Throne",
    "Teardops",
    "Treasure",
    "Attention",
    "How long",
    "Thats hilarious",
    "One call away",
    "We dont talk anymore",
    "Angeline",
    "Consume",
    "Into it",
    "Numb to the feeling",
    "Okay",
    "Ozone",
    "Stuckinmybrain",
    "Swim",
    "the walls",
    "Uncomforable",
    "Rockstar",
    "Greece",
    "I did it",
    "3 Nights",
    "Phone Numbers",
    "Fair trade",
    "Fire desire",
    "In my feelings",
    "Feel no ways",
    "Hotline Bling",
    "One Dance",
    "Race my mind",
    "Doing it wrong",
    "Passionfruit",
    "Hold on were going home",
    "Pain 1993",
    "Laugh now cry later",
    "Happier",
    "Perfect",
    "Shape of you",
    "Thinking out loud",
    "Shivers",
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
    "Living Facts",
    "Unorthodox Jukebox",
    "Voicenotes",
    "Nine Track Mind",
    "Chase Atlantic",
    "BLAME IT ON BABY",
    "KHALED KHALED",
    "Dont forget about me Demos",
    "Views",
    "Take Care",
    "MoreLife",
    "Nothingwasthesame",
    "DarkLaneDemoTapes",
    "LilDurk",
    "Divide",
    "Multiply",
    "Equals",
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
                print(song)
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