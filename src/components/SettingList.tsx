import React, { useEffect, useState } from 'react';
import WifiUpload from './WifiUpload';
import styled from '@emotion/styled';
import NetworkList from './NetworkList';
import CurrentNetwork from './CurrentNetwork';
import { usePersistentStore } from '@/store/persistentStore';
import NewNetwork from './NewNetwork';

const Settings = styled.div`
	width: 100%;
`;

const SettingList = () => {
	const { wifiUpload } = usePersistentStore();
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<Settings>
			<WifiUpload />
			{wifiUpload && loaded ? (
				<>
					<CurrentNetwork />
					<NetworkList />
					<NewNetwork />
				</>
			) : null}
		</Settings>
	);
};

export default SettingList;
