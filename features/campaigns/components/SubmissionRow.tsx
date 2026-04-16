import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

import { BrandLogo } from '@/features/campaigns/components/BrandLogo';
import { Submission } from '@/features/campaigns/types';
import { formatDate, formatPlatform } from '@/features/campaigns/utils/formatters';
import { StatusBadge } from '@/features/campaigns/components/StatusBadge';

interface SubmissionRowProps {
  submission: Submission;
  brandName: string;
}

export function SubmissionRow({ submission, brandName }: SubmissionRowProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <BrandLogo brandName={brandName} size={36} />
          <View style={styles.textBlock}>
            <Text style={styles.brand}>{brandName}</Text>
            <Text style={styles.meta}>
              {formatPlatform(submission.platform)} • {formatDate(submission.submittedAtIso)}
            </Text>
          </View>
        </View>
        <StatusBadge status={submission.status} />
      </View>
      <Pressable onPress={() => Linking.openURL(submission.creatorUrl)}>
        <Text numberOfLines={1} style={styles.link}>
          {submission.creatorUrl}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: '#ffffff',
    padding: 16,
    gap: 10,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  brandRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  textBlock: {
    flex: 1,
    gap: 4,
  },
  brand: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  meta: {
    fontSize: 13,
    color: '#6b7280',
  },
  link: {
    fontSize: 13,
    color: '#2563eb',
  },
});
