import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Video from 'react-native-video';
import { Text } from '../';
import styles from './video-player.style';

class VideoPlayer extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text
          onPress={() => Navigation.dismissOverlay(this.props.componentId)}
          style={styles.close}
        >
          Close
        </Text>

        <Video
          fullscreen
          controls
          paused={false}
          style={styles.video}
          source={{ uri: this.props.uri }}
          ref={(ref) => {
           this.player = ref;
          }}
        />
      </SafeAreaView>
    );
  }
}

export { VideoPlayer };
