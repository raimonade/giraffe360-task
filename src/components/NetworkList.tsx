import React from 'react';
import styled from 'styled-components';
import NetworkItem from './NetworkItem';
import exampleWifis from '@/models/exampleWifis';
import { usePersistentStore } from '@/store/persistentStore';
import Functions from '@/styles/Functions';
import { AnimatePresence, motion } from 'framer-motion';

const Container = styled.div`
	display: block;
	width: calc(100% - var(--gridMargin) * 2);
	margin: 0 auto;
	margin-top: 40px;
`;
const Wrapper = styled(motion.div)`
	width: 100%;
	${Functions.breakpoint('laptop')} {
		margin: 0 auto;
		width: ${Functions.col(6, 12)};
	}

	> div {
		&:not(:first-child) {
			margin-top: 40px;
		}
	}
`;
const List = styled.ul`
	> li {
		border-bottom: 1px solid var(--border);
	}
`;

const Heading = styled.h3`
	color: var(--contrast);
	font-size: 14px;
	font-weight: bold;
	line-height: 25px;
	padding-bottom: 10px;
	margin-bottom: 5px;
	border-bottom: 1px solid var(--border);
`;

const NetworkList = () => {
	const { savedNetworks, connected } = usePersistentStore();
	return (
		<Container>
			<Wrapper layout>
				{savedNetworks?.length > 0 && (
					<motion.div layout>
						<Heading id="prefered-networks">Preferred networkd</Heading>
						<List aria-labelledby="prefered-networks">
							<AnimatePresence>
								{savedNetworks.map((network, i) => {
									if (connected && connected.ssid === network.ssid) {
										return;
									}
									return (
										<NetworkItem
											index={i}
											key={network.ssid}
											content={network}
										/>
									);
								})}
							</AnimatePresence>
						</List>
					</motion.div>
				)}
				{exampleWifis?.length > 0 && (
					<motion.div layout>
						<Heading id="networks">Networks</Heading>

						<List aria-labelledby="networks">
							{/* filter out matching networks savedNetworks child.ssid === exampleWifis child.ssid and map to components*/}
							{exampleWifis.map((wifi, i) => {
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
