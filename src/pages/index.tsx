import type { NextPage } from 'next';
import Header from '@/components/Header';
import { Page } from '@/styles/Shared';
import WifiSetupHeading from '@/components/WifiSetupHeading';
import Toggle from '@/components/Toggle';

import { useModal } from '@/components/Modal/ModalContext';
import { useEffect, useState } from 'react';
import ConnectModal from '@/components/ConnectModal';
import KnownNetworkModal from '@/components/KnownNetworkModal';
import styled from 'styled-components';
import AddNetworkModal from '@/components/AddNetworkModal';
import SettingList from '@/components/SettingList';
import Loader from '@/components/Loader';
import FailIndicator from '@/components/FailIndicator';
import SuccessIndicator from '@/components/SuccessIndicator';

const Btn = styled.button`
	border: 1px solid black;
	margin: 20px;
	padding: 5px;
`;

const Home: NextPage = () => {
	const [showChild, setShowChild] = useState(false);

	useEffect(() => {
		setShowChild(true);
	}, []);
	if (!showChild) {
		return null;
	}
	return (
		<Page>
			<Header />
			<WifiSetupHeading />
			<SettingList></SettingList>
		</Page>
	);
};

export default Home;
