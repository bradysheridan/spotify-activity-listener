import XMLHttpRequest from 'xhr2';

class SpotifyListener {
  constructor(props) {
    if (props) for (var i in props) this[i] = props[i];

    this.endpoint = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" + this.username + "&api_key=" + this.key + "&format=json";
    this.client = new XMLHttpRequest();
    this.client.onload = this.handler;
    this.client.trackCount = this.trackCount;
    this.client.callback = this.callback;
  }

  handler() {
    if (this.status === 200 && this.responseText != null) {
      var tracks = JSON.parse(this.responseText).recenttracks.track,
          parsedTracks = [];
      for (var i = 0; i < this.trackCount; i++) {
        parsedTracks.push({
          name: tracks[i].name,
          artist: tracks[i].artist["#text"],
          album: tracks[i].album["#text"],
          art: tracks[i].image[3]["#text"],
        });
      }
      this.callback(parsedTracks);
    }
  }

  poll() {
    this.client.open("GET", this.endpoint);
    this.client.send();
  }

  startListening() {
    this.poll();
    this.interval = setInterval(() => this.poll(), this.pollInterval);
  }

  stopListening() {
    clearInterval(this.interval);
  }
}

module.exports = SpotifyListener;
