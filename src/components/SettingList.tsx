import React from 'react';
import WifiUpload from './WifiUpload';
import styled from 'styled-components';
import NetworkList from './NetworkList';
import CurrentNetwork from './CurrentNetwork';
import Button from './Button';
import { usePersistentStore } from '@/store/persistentStore';
import Functions from '@/styles/Functions';
import NewNetwork from './NewNetwork';

const Settings = styled.div`
	width: 100%;
`;

const SettingList = () => {
	const { wifiUpload } = usePersistentStore();
	return (
		<Settings>
			<WifiUpload />
			{wifiUpload ? (
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
