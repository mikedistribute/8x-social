import { Platform } from '@/features/campaigns/types';

const supportedHosts: Record<Platform, string[]> = {
  tiktok: ['tiktok.com'],
  instagram: ['instagram.com', 'instagr.am'],
};

const withProtocol = (value: string) =>
  value.startsWith('http://') || value.startsWith('https://') ? value : `https://${value}`;

const matchesHost = (hostname: string, domain: string) =>
  hostname === domain || hostname.endsWith(`.${domain}`);

export interface UrlValidationResult {
  normalizedUrl: string;
  platform: Platform | null;
  error: string | null;
}

export const validateCreatorUrl = (value: string): UrlValidationResult => {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return { normalizedUrl: '', platform: null, error: 'Enter a TikTok or Instagram URL.' };
  }

  try {
    const normalizedUrl = withProtocol(trimmedValue);
    const parsedUrl = new URL(normalizedUrl);
    const hostname = parsedUrl.hostname.toLowerCase().replace(/^www\./, '');
    const platform =
      (Object.entries(supportedHosts).find(([, domains]) =>
        domains.some((domain) => matchesHost(hostname, domain))
      )?.[0] as Platform | undefined) ?? null;

    if (!platform) {
      return {
        normalizedUrl,
        platform: null,
        error: 'Only TikTok and Instagram links are supported.',
      };
    }

    return { normalizedUrl, platform, error: null };
  } catch {
    return { normalizedUrl: trimmedValue, platform: null, error: 'Enter a valid URL.' };
  }
};
