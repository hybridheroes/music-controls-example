import {AppRegistry} from 'react-native';
import TrackPlayer, {Event} from 'react-native-track-player';

import App from './App';
import {name as appName} from './app.json';

// Here we can handle the callbacks for our lock screen controls
export const PlaybackService = async () => {
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
};

TrackPlayer.registerPlaybackService(() => PlaybackService);

AppRegistry.registerComponent(appName, () => App);
