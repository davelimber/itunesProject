function ItunesController() {
    var itunesService = new ItunesService()
    //Do Not Modify the getMusic function
    this.getMusic = function getMusic(e) {
        e.preventDefault();
        var artist = e.target.artist.value;
        itunesService.getMusicByArtist(artist).then(drawSongs);
    }

    function drawSongs(songList) {
        console.log(songList[0].title);
        // This is where you task begins
        var songElement = document.getElementById('song-list');
        songElement.innerHTML = '';
        console.log(songElement);
        var template = '';
        for (song of songList) {
            template +=
        `<div class="row">
        <div class="col-md-4">
          <img src="${song.albumArt}"/>
        </div>
        <div class="col-md-8">
          <p><b>${song.title}</b> &mdash; <em>${song.artist}</em> — Album: '${song.collection}' &mdash; $${song.price}</p>
          <audio controls preload="none">
          <source src="${song.preview}" type="audio/mp4" /></audio>     
      </div>
      <hr>
      </div>`

            console.log(song)
        } songElement.innerHTML += template;
    }
}


var itunesCtrl = new ItunesController()