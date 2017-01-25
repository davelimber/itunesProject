function ItunesController() {
    var itunesService = new ItunesService()
    //Do Not Modify the getMusic function
    this.getMusic = function getMusic(e) {
        e.preventDefault();
        var artist = e.target.artist.value;
        itunesService.getMusicByArtist(artist).then(drawSongs);
        nameEntered = artist;
    }

    function drawSongs(songList) {
        // console.log("here I am");
        // This is where you task begins
        var songElement = document.getElementById('song-list');
        songElement.innerHTML = '';
        var template = `<h2>Songs found: ${songList.length} for ${nameEntered} </h2>`;
        var songId = 0;
         
        for (song of songList) {
            template +=
                `<div class="row">
                    <div class="col-xs-12 col-md-12">
                            <div class="media">
                                <div class="media-left media-middle">
                                    <a href="#">
                                        <img class="media-object" src="${song.albumArt}"> </a> 
                                </div>
                                    <div class="media-body">
                                        <p><b><h4 onclick="itunesCtrl.ac(${songId})">Song: ${song.title}</h4></b> &#9834; <em>${song.artist}</em> &#9834 Album: '${song.collection}' &#9834; $${song.price}</p>
                                        <audio controls id="${songId}" preload="none">
                                            <source src="${song.preview}" type="audio/mp4" /></audio>
                                    </div>
                            </div>
                    </div>
                </div>`
                               songId++ }
                                 songElement.innerHTML += template;

        // Pause currently playing audio if another is started
        document.addEventListener('play', function (e) {
            var audios = document.getElementsByTagName('audio');
            for (var i = 0, len = audios.length; i < len; i++) {
                if (audios[i] != e.target) {
                                    audios[i].pause();
                                }
            }
        }, true);
    }
    var isPlaying = false;
this.ac = function (id) {
    var song = document.getElementById(id);
    if (isPlaying) {
        song.pause();
        isPlaying = false;
    } else {
    song.play();
    isPlaying = true; 
}
}

} 


var itunesCtrl = new ItunesController()