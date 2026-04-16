import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SFSymbol } from 'expo-symbols';
import { StyleSheet } from 'react-native';

import { SymbolIcon } from '@/components/SymbolIcon';

export const TabBarIcon = (props: {
  name: SFSymbol;
  fallback: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) => {
  return <SymbolIcon name={props.name} fallback={props.fallback} color={props.color} size={22} />;
};

export const styles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -3,
  },
});
