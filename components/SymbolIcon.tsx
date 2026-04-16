import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SymbolView, SFSymbol } from 'expo-symbols';
import { Platform, StyleSheet, View } from 'react-native';

interface SymbolIconProps {
  name: SFSymbol;
  fallback: React.ComponentProps<typeof FontAwesome>['name'];
  size?: number;
  color?: string;
}

export function SymbolIcon({ name, fallback, size = 20, color = '#111827' }: SymbolIconProps) {
  return (
    <View style={styles.container}>
      <SymbolView
        name={name}
        size={size}
        tintColor={color}
        fallback={
          <FontAwesome
            name={fallback}
            size={Platform.OS === 'android' ? size - 1 : size}
            color={color}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
