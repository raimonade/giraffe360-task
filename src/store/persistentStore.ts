import { Wifi } from '@/models/wifi';
import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface IpersistantStore {
	wifiUpload: boolean;
	connected: any;
	savedNetworks: Wifi[];
	setWifiUpload: (val: boolean) => void;
	addSavedNetwork: (val: Wifi) => void;
	removeSavedNetwork: (val: Wifi) => void;
	connect: (val: Wifi) => void;
	disconnect: (val: Wifi) => void;
}

export const usePersistentStore = create<IpersistantStore>(
	persist(
		(set, _) => ({
			wifiUpload: false,
			connected: null,
			savedNetworks: [],
			setWifiUpload(bool) {
				set((state) => {
					state.wifiUpload = bool;
				});
			},
			disconnect(network) {
				set((state) => {
					const index = state.savedNetworks.findIndex(
						(savedNetwork) => savedNetwork.ssid === network.ssid
					);
					if (index === -1) {
						return;
					}
					state.connected = null;
				});
			},
			connect(network) {
				set((state) => {
					const index = state.savedNetworks.findIndex(
						(savedNetwork) => savedNetwork.ssid === network.ssid
					);
					if (index === -1) {
						return;
					}
					state.connected = network;
				});
			},
			addSavedNetwork(network) {
				set((state) => {
					// find if network is already in list
					const index = state.savedNetworks.findIndex(
						(savedNetwork) => savedNetwork.ssid === network.ssid
					);
					if (index === -1) {
						state.savedNetworks.push(network);
					}
					// state.connected = network;
				});
			},
			removeSavedNetwork(network) {
				set((state) => {
					state.savedNetworks = state.savedNetworks.filter(
						(n) => n.ssid !== network.ssid
					);
					if (state.connected && state.connected.ssid === network.ssid) {
						state.connected = null;
					}
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
