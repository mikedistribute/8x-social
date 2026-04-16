import { Submission } from '@/features/campaigns/types';

export const seededSubmissions: Submission[] = [
  {
    id: 'sub-1',
    campaignId: 'nova-skin',
    platform: 'tiktok',
    creatorUrl: 'https://www.tiktok.com/@creator/video/7491122334455667788',
    status: 'pending',
    submittedAtIso: '2026-04-15T09:30:00.000Z',
  },
  {
    id: 'sub-2',
    campaignId: 'north-lane',
    platform: 'instagram',
    creatorUrl: 'https://www.instagram.com/reel/DL0sample123/',
    status: 'approved',
    submittedAtIso: '2026-04-14T16:10:00.000Z',
  },
  {
    id: 'sub-3',
    campaignId: 'dune-cafe',
    platform: 'tiktok',
    creatorUrl: 'https://www.tiktok.com/@brewscene/video/7499988877766655544',
    status: 'rejected',
    submittedAtIso: '2026-04-13T12:45:00.000Z',
  },
  {
    id: 'sub-4',
    campaignId: 'thread-form',
    platform: 'instagram',
    creatorUrl: 'https://instagr.am/reel/CFitSample88/',
    status: 'pending',
    submittedAtIso: '2026-04-12T08:05:00.000Z',
  },
];
