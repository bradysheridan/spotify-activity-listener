class SpotifyListener {
  constructor(props) {
    if (props) for (var i in props) this[i] = props[i];

    this.endpoint = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" + this.username + "&api_key=" + this.key + "&format=json";
    this.client = new XMLHttpRequest();
    this.client.onload = this.handler;
    this.client.callback = this.callback;
  }

  handler() {
    if (this.status === 200 && this.responseText != null) {
      var tracks = JSON.parse(this.responseText).recenttracks.track;
      var latestTrack = {
        name: tracks[0].name,
        artist: tracks[0].artist["#text"],
        album: tracks[0].album["#text"],
        art: tracks[0].image[3]["#text"],
      };
      this.callback(latestTrack);
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

module.exports = Listener;
