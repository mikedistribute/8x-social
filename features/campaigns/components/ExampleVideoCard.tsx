import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { LinearGradient } from 'expo-linear-gradient';

import { Button } from '@/components/Button';
import { ExampleVideo } from '@/features/campaigns/types';

interface ExampleVideoCardProps {
  video: ExampleVideo;
}

export function ExampleVideoCard({ video }: ExampleVideoCardProps) {
  const isFocused = useIsFocused();
  const [showPlayer, setShowPlayer] = useState(false);
  const player = useVideoPlayer(video.videoUrl, (instance) => {
    instance.loop = false;
    instance.muted = false;
  });

  useEffect(() => {
    if (!isFocused) {
      try {
        player.pause();
      } catch {}
      setShowPlayer(false);
    }
  }, [isFocused, player]);

  const handlePlay = () => {
    setShowPlayer(true);
    player.play();
  };

  const handleReset = () => {
    try {
      player.pause();
    } catch {
      return;
    }
    setShowPlayer(false);
  };

  return (
    <View style={styles.card}>
      <View style={styles.frame}>
        {showPlayer ? (
          <VideoView
            player={player}
            nativeControls
            allowsFullscreen
            contentFit="cover"
            style={styles.video}
          />
        ) : (
          <Pressable onPress={handlePlay} style={styles.posterButton}>
            <LinearGradient colors={['#007AFF', '#CAD6FF']} style={styles.video}>
              <View style={styles.overlay}>
                <Text style={styles.kicker}>{video.libraryName}</Text>
                <Text style={styles.posterTitle}>{video.title}</Text>
                <View style={styles.playButton}>
                  <Text style={styles.playLabel}>Play example</Text>
                </View>
              </View>
            </LinearGradient>
          </Pressable>
        )}
      </View>
      <View style={styles.footer}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.meta}>
            {video.durationLabel} • {video.creatorLabel}
          </Text>
        </View>
        {showPlayer ? <Button title="Reset" variant="secondary" onPress={handleReset} /> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 10,
  },
  frame: {
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: '#111827',
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#111827',
  },
  posterButton: {
    position: 'relative',
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 18,
    backgroundColor: 'rgba(17, 24, 39, 0.12)',
  },
  kicker: {
    fontSize: 12,
    fontWeight: '600',
    color: '#e0e7ff',
    textTransform: 'uppercase',
    letterSpacing: 0,
  },
  posterTitle: {
    maxWidth: '75%',
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
    color: '#ffffff',
  },
  playButton: {
    borderRadius: 999,
    backgroundColor: '#ffffff',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  playLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  textBlock: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  meta: {
    fontSize: 13,
    color: '#6b7280',
  },
});
