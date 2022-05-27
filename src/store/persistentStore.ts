import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface IpersistantStore {
	wifiUpload: boolean;
	connectedWifi: string | null;
	savedNetworks: any[];
	setWifiUpload: (val: boolean) => void;
}

export const usePersistentStore = create<IpersistantStore>(
	persist(
		(set, _) => ({
			wifiUpload: false,
			connectedWifi: null,
			savedNetworks: [],
			setWifiUpload(bool) {
				set((state) => {
					state.wifiUpload = bool;
				});
			},
			addSavedNetwork(network) {
				set((state) => {
					state.savedNetworks.push(network);
				});
			},
			removeSavedNetwork(network) {
				set((state) => {
					state.savedNetworks = state.savedNetworks.filter(
						(n) => n.ssid !== network.ssid
					);
				});
			},
		}),
		{
			name: 'giraffe360_storage', // unique name
			getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
			// getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
		}
	)
);
