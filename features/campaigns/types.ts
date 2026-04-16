export type SubmissionStatus = 'pending' | 'approved' | 'rejected';

export type Platform = 'tiktok' | 'instagram';

export interface ExampleVideo {
  id: string;
  title: string;
  libraryName: string;
  videoUrl: string;
  posterUrl: string;
  durationLabel: string;
  creatorLabel: string;
}

export interface Campaign {
  id: string;
  brandName: string;
  headline: string;
  payoutUsd: number;
  deadlineIso: string;
  brief: string;
  requirements: string[];
  exampleVideoIds: string[];
}

export interface Submission {
  id: string;
  campaignId: string;
  platform: Platform;
  creatorUrl: string;
  status: SubmissionStatus;
  submittedAtIso: string;
}
