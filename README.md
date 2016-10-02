## **Spotify Activity Listener**
### Poll Last.fm for your recent Spotify listening data.

## **Demo**
![The gif failed to load, please refresh your browser!](images/demo.gif)

## **Setup**
1. [Create a Last.fm account](https://www.last.fm/join)
2. [Enable API access for your account](http://www.last.fm/api/account/create)
3. Make note of your API key
![The image failed to load, please refresh your browser!](images/api-key.png)
4. In Spotify, go to `Settings > Last.fm` and select `Connect to Last.fm`
![The image failed to load, please refresh your browser!](images/spotify-settings-one.png)
![The image failed to load, please refresh your browser!](images/spotify-settings-two.png)

## **Installation**
1. `npm i spotify-activity-listener --save`

## **Usage**
- Import the listener:
```javascript
import SpotifyListener from 'spotify-activity-listener';
// Or
var SpotifyListener = require('spotify-activity-listener');
```
- Instantiate the listener:
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
- Start listening
```javascript
Listener.startListening();
```
- Stop listening (if need be)
```javascript
Listener.stopListening();
```

## **Response Format**
```javascript

```

## [**Full Usage Example (React.js)**](example/Example.js)

## **Contribute**
1. Fork it
2. Create your branch
3. Make some changes
4. Commit the changes
5. Submit a pull request
