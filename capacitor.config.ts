import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.effo.starter',
  appName: 'EFFO',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    cleartext: true,
  },
  plugins: {
    SplashScreen: {


      // launchShowDuration:2000,
      androidScaleType:'CENTER_CROP',
      launchAutoHide: false
    }
  },
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      BackupWebStorage: 'none',
      // SplashMaintainAspectRatio: 'true',
      // FadeSplashScreenDuration: '30',
      // SplashShowOnlyFirstTime: 'false',
      // SplashScreen: 'screen',
      // SplashScreenDelay: '30',
    },
  },
};

export default config;
