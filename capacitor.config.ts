import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'gg.gebna.fanar',
	appName: 'fanar',
	webDir: 'build',
	// SHOULD ONLY APPLY DURING DEV
	server: {
		url: 'http://192.168.1.100:5169/',
		cleartext: true
	}
};

export default config;
