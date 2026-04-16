import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text } from 'react-native';

const palettes = [
  ['#007AFF', '#5AA9FF'],
  ['#2A7FFF', '#8BB7FF'],
  ['#4B88FF', '#CAD6FF'],
  ['#005FE0', '#78A9FF'],
];

interface BrandLogoProps {
  brandName: string;
  size?: number;
}

const getInitials = (brandName: string) =>
  brandName
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const getPalette = (brandName: string) =>
  palettes[
    brandName.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) % palettes.length
  ];

export function BrandLogo({ brandName, size = 40 }: BrandLogoProps) {
  const [start, end] = getPalette(brandName);

  return (
    <LinearGradient colors={[start, end]} style={[styles.logo, { width: size, height: size }]}>
      <Text style={[styles.initials, { fontSize: Math.max(12, size * 0.34) }]}>
        {getInitials(brandName)}
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  initials: {
    color: '#ffffff',
    fontWeight: '700',
    letterSpacing: 0,
  },
});
