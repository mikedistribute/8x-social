# 8x Social

8x Social is a small Expo creator app built around one clean submission flow: browse campaigns, watch example videos, submit a TikTok or Instagram URL, and track moderation status.

## Features

- 20 mocked campaigns
- Shared example video catalog backed by public Pexels video links
- Inline `expo-video` playback
- URL validation for TikTok and Instagram
- Submission states: `pending`, `approved`, `rejected`
- SF Symbols for app icons with cross-platform fallbacks

## Stack

- Expo Router
- React Native
- Zustand
- `expo-video`
- `expo-symbols`
- `expo-linear-gradient`

## Install

```bash
bun install
```

## Start the app

Expo Go:

```bash
bun run start
```

Development client:

```bash
bun run start:dev-client
```

Then open the app by:

- pressing `i` for the iOS simulator
- pressing `a` for Android
- scanning the QR code in Expo Go on a physical device

## Test guide

### 1. Campaign list

- Open the `Campaigns` tab
- Confirm there are 20 campaign cards
- Check that each card shows:
  - brand logo
  - brand name
  - payout per video
  - deadline with icon

### 2. Campaign detail

- Tap any campaign
- Confirm the detail screen shows:
  - brand logo
  - headline
  - payout
  - deadline
  - brief
  - requirements
  - 1-2 example videos

### 3. Video playback

- Tap `Play example`
- Confirm the player renders inline at `16:9`
- Use native controls to play, pause, and resume
- Leave the screen and come back
- Confirm the old shared-object pause crash no longer appears

### 4. URL submission

- Tap `Submit video URL`
- Try an invalid URL:

```text
https://example.com/video/123
```

- Confirm an inline validation error appears

- Try a valid TikTok URL:

```text
https://www.tiktok.com/@creator/video/7491122334455667788
```

- Try a valid Instagram URL:

```text
https://www.instagram.com/reel/DL0sample123/
```

- Confirm successful submission routes to `Submissions`
- Confirm the new entry appears at the top with `pending` status

### 5. Submission status

- Open the `Submissions` tab
- Confirm seeded entries are present
- Check that each row shows:
  - brand logo
  - brand name
  - platform
  - submitted date
  - status badge

## Notes

- All data is mocked and resets on app restart
- Example videos are public Pexels-hosted assets
- No backend, persistence, auth, or upload processing is included in this version
