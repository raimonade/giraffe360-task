import React, { useMemo } from 'react';
import NetworkItem from '@/components/NetworkItem';
import exampleWifis from '@/models/exampleWifis';
import { usePersistentStore } from '@/store/persistentStore';
import { AnimatePresence, motion } from 'framer-motion';
import { Container, Wrapper, Heading, List } from './NetworkList.styled';

const NetworkList = () => {
	const { savedNetworks, connected } = usePersistentStore();

	const filteredSavedNetworks = useMemo(() => {
		return savedNetworks.filter((network) => network.ssid !== connected?.ssid);
	}, [savedNetworks, connected]);

	// write a usememo function of the above code
	const filteredExampleWifis = useMemo(() => {
		return exampleWifis.filter((wifi) => {
			const matchingNetwork = savedNetworks.find((network) => network.ssid === wifi.ssid);
			if (!matchingNetwork) {
				return wifi;
			}
		});
	}, [savedNetworks]);

	return (
		<Container>
			<Wrapper layout>
				{filteredSavedNetworks?.length > 0 && (
					<motion.div layout>
						<Heading id="prefered-networks">Preferred networks</Heading>
						<List aria-labelledby="prefered-networks">
							<AnimatePresence>
								{filteredSavedNetworks?.map((network, i) => (
									<NetworkItem index={i} key={network.ssid} content={network} />
								))}
							</AnimatePresence>
						</List>
					</motion.div>
				)}
				{filteredExampleWifis?.length > 0 && (
					<motion.div layout>
						<Heading id="networks">Networks</Heading>

						<List aria-labelledby="networks">
							{/* filter out matching networks savedNetworks child.ssid === exampleWifis child.ssid and map to components*/}
							{filteredExampleWifis.map((wifi, i) => {
								const matchingNetwork = savedNetworks.find(
									(network) => network.ssid === wifi.ssid
								);
								if (!matchingNetwork) {
									return <NetworkItem index={i} key={wifi.ssid} content={wifi} />;
								}
							})}
						</List>
					</motion.div>
				)}
			</Wrapper>
		</Container>
	);
};

export default NetworkList;
