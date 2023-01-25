import React, {FunctionComponent, useEffect} from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
} from 'react-native-track-player';

var track = {
  url: require('./assets/audio_file.mp3'),
  title: 'My Song',
  artist: 'Your Favorite Artist',
  album: 'A Timeless Record',
  artwork: require('./assets/album_cover.jpg'),
  duration: 402, // Seconds
};

const App: FunctionComponent = () => {
  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.JumpForward,
        Capability.JumpBackward,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
    });
  };

  useEffect(() => {
    setupPlayer();
  }, []);

  const playAudio = async () => {
    await TrackPlayer.add(track);
    TrackPlayer.play();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Start audio" onPress={playAudio} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
