import { create } from 'zustand';

import { campaigns } from '@/features/campaigns/data/campaigns';
import { exampleVideos } from '@/features/campaigns/data/exampleVideos';
import { seededSubmissions } from '@/features/campaigns/data/submissions';
import { Campaign, ExampleVideo, Submission } from '@/features/campaigns/types';
import { validateCreatorUrl } from '@/features/campaigns/utils/submission';

interface SubmitResult {
  ok: boolean;
  error?: string;
}

interface CreatorFlowState {
  campaigns: Campaign[];
  videos: ExampleVideo[];
  submissions: Submission[];
  submitUrl: (campaignId: string, url: string) => SubmitResult;
  getCampaign: (id: string) => Campaign | undefined;
  getCampaignVideos: (campaign: Campaign) => ExampleVideo[];
  getCampaignSubmissions: (campaignId: string) => Submission[];
}

export const useCreatorFlowStore = create<CreatorFlowState>((set, get) => ({
  campaigns,
  videos: exampleVideos,
  submissions: seededSubmissions,
  submitUrl: (campaignId, url) => {
    const validation = validateCreatorUrl(url);

    if (validation.error || !validation.platform) {
      return { ok: false, error: validation.error ?? 'Invalid URL.' };
    }

    const platform = validation.platform;

    set((state) => ({
      submissions: [
        {
          id: `sub-${Date.now()}`,
          campaignId,
          platform,
          creatorUrl: validation.normalizedUrl,
          status: 'pending',
          submittedAtIso: new Date().toISOString(),
        },
        ...state.submissions,
      ],
    }));

    return { ok: true };
  },
  getCampaign: (id) => get().campaigns.find((campaign) => campaign.id === id),
  getCampaignVideos: (campaign) =>
    campaign.exampleVideoIds
      .map((videoId) => get().videos.find((video) => video.id === videoId))
      .filter((video): video is ExampleVideo => Boolean(video)),
  getCampaignSubmissions: (campaignId) =>
    get().submissions.filter((submission) => submission.campaignId === campaignId),
}));
