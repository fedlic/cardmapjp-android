import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'jp.cardmap.app',
  appName: 'CardMapJP',
  webDir: 'out',
  server: {
    url: 'https://cardmapjp.vercel.app',
    cleartext: false,
  },
};

export default config;
