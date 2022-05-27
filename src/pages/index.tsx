import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import { Page } from '@/styles/Shared';
import WifiSetupHeading from '@/components/WifiSetupHeading';

const Home: NextPage = () => {
	return (
		<Page>
			<Header />
			<WifiSetupHeading />
		</Page>
	);
};

export default Home;
