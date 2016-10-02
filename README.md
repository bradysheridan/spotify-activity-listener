## **Spotify Activity Listener**
### Poll Last.fm for your recent Spotify listening data.

## **Setup**
1. Create a Last.fm account
2. Get an API key from Last.fm
3. In Spotify, go to Settings > Last.fm > Connect to Last.fm

## **Installation**
1. `npm i spotify-activity-listener`

## **Usage**
1. Import the listener: `import Listener from 'spotify-activity-listener';` or `var Listener = require('spotify-activity-listener');`
2. Instantiate the listener:
```javascript
this.Listener = new Listener({
  username: 'YOUR_LAST.FM_USERNAME',
  key: 'YOUR_LAST.FM_API_KEY',
  pollInterval: 5000,
  callback: (res) => {
    // (...)
  }
});
```

## [**Full Usage Example (React.js)**](Example.js)

## **Contribute**
1. Fork it
2. Create your branch
3. Make some changes
4. Commit the changes
5. Submit a pull request
