// Dependencies
import React from 'react';
import SpotifyListener from 'spotify-activity-listener';
import MusicIcon from 'react-icons/lib/md/library-music';

// Styles
import styles from './styles';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.Listener = new SpotifyListener({
      username: '...',
      key: '...',
      trackCount: 1,
      pollInterval: 3000,
      callback: (res) => this.setState({
        track: res[0],
      }),
    });

    this.state = {
      track: {},
    };
  }

  componentDidMount() {
    this.Listener.startListening();
  }

  componentWillUnmount() {
    this.Listener.stopListening();
  }

  render() {
    return(
      <div style={styles.wrap}>
        {(this.state.track.art) ? <img style={styles.art} src={this.state.track.art} /> : null }
        <div style={styles.infoWrap}>
          <MusicIcon size={24} style={{paddingBottom: 5, opacity: (this.state.track.name) ? 1.0 : 0.0}} />
          <p style={{ padding: 0, margin: 0 }} className="small">{ this.state.track.name }</p>
          <p style={{ padding: 0, margin: 0 }} className="small">{ this.state.track.artist }</p>
          <p style={{ padding: 0, margin: 0 }} className="small">{ this.state.track.album }</p>
        </div>
      </div>
    );
  }
};

module.exports = Example;
