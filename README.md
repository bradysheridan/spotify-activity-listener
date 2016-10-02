## **Spotify Activity Listener**
### Poll Last.fm for your recent Spotify listening data.

## **Demo**
![The .gif failed to load, please refresh your browser!](https://github.com/bradysheridan/spotify-activity-listener/raw/master/example/demo.gif)

## **Setup**
1. Create a Last.fm account
2. Get an API key from Last.fm
3. In Spotify, go to Settings > Last.fm > Connect to Last.fm

## **Installation**
1. `npm i spotify-activity-listener --save`

## **Usage**
1. Import the listener:
```javascript
import SpotifyListener from 'spotify-activity-listener';
// Or
var SpotifyListener = require('spotify-activity-listener');
```
2. Instantiate the listener:
```javascript
var Listener = new SpotifyListener({
  username: 'YOUR_LAST.FM_USERNAME',
  key: 'YOUR_LAST.FM_API_KEY',
  pollInterval: 5000, // (Milliseconds)
  trackCount: 1, // Capped at 50 by Last.fm
  callback: (res) => {
    // Handle response data here
  }
});
```
3. Start listening
```javascript
Listener.startListening();
```
4. Stop listening (if need be)
```javascript
Listener.stopListening();
```

## [**Full Usage Example (React.js)**](example/Example.js)

## **Contribute**
1. Fork it
2. Create your branch
3. Make some changes
4. Commit the changes
5. Submit a pull request
