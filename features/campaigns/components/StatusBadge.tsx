import { StyleSheet, Text, View } from 'react-native';

import { SubmissionStatus } from '@/features/campaigns/types';

const palette: Record<SubmissionStatus, { backgroundColor: string; color: string }> = {
  pending: { backgroundColor: '#fef3c7', color: '#92400e' },
  approved: { backgroundColor: '#dcfce7', color: '#166534' },
  rejected: { backgroundColor: '#fee2e2', color: '#991b1b' },
};

interface StatusBadgeProps {
  status: SubmissionStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <View style={[styles.badge, { backgroundColor: palette[status].backgroundColor }]}>
      <Text style={[styles.text, { color: palette[status].color }]}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
