import { StyleSheet, Text, TextInput, View } from 'react-native';

interface UrlFieldProps {
  value: string;
  onChangeText: (value: string) => void;
  error?: string | null;
  platformLabel?: string | null;
}

export function UrlField({ value, onChangeText, error, platformLabel }: UrlFieldProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Video URL</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="url"
        placeholder="https://www.tiktok.com/@creator/video/..."
        style={[styles.input, error ? styles.inputError : null]}
      />
      {platformLabel ? (
        <Text style={styles.platform}>Detected platform: {platformLabel}</Text>
      ) : null}
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d1d5db',
    backgroundColor: '#ffffff',
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: '#111827',
  },
  inputError: {
    borderColor: '#dc2626',
  },
  platform: {
    fontSize: 13,
    color: '#2563eb',
  },
  error: {
    fontSize: 13,
    color: '#dc2626',
  },
});
