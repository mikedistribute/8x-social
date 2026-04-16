import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet, View } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary';
}

export function Button({
  title,
  variant = 'primary',
  style,
  disabled,
  ...touchableProps
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...touchableProps}
      disabled={disabled}
      style={[styles.touchable, disabled ? styles.disabled : null, style]}>
      {variant === 'primary' ? (
        <LinearGradient
          colors={['#007AFF', '#CAD6FF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}>
          <Text style={[styles.label, styles.primaryLabel]}>{title}</Text>
        </LinearGradient>
      ) : (
        <View style={[styles.button, styles.secondary]}>
          <Text style={[styles.label, styles.secondaryLabel]}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  secondary: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  disabled: {
    opacity: 0.55,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
  },
  primaryLabel: {
    color: '#ffffff',
  },
  secondaryLabel: {
    color: '#111827',
  },
});
