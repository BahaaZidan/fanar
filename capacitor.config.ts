import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'gg.gebna.fanar',
	appName: 'فنار',
	webDir: 'build',
	// TODO: SHOULD ONLY APPLY DURING DEV
	// server: {
	// 	url: 'http://192.168.1.100:5169/',
	// 	cleartext: true
	// },
	plugins: {
		SplashScreen: {
			launchShowDuration: 1000,
			launchAutoHide: true,
			launchFadeOutDuration: 1000
		}
	}
};

export default config;
