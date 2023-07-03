'use client';
import Home from '@/pages/home';
import { apiPlugin, storyblokInit } from '@storyblok/react';

storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'us'
  },
  components: {
    home: Home,
  }
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function StoryblokProvider({ children }: any) {
  return children;
}
