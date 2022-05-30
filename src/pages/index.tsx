import type { NextPage } from 'next';
import Header from '@/components/Header';
import { Page } from '@/styles/Shared';
import WifiSetupHeading from '@/components/WifiSetupHeading';
import Toggle from '@/components/Toggle';

import SettingList from '@/components/SettingList';

const Home: NextPage = () => {
	return (
		<Page>
			<Header />
			<WifiSetupHeading />
			<SettingList></SettingList>
		</Page>
	);
};

export default Home;
