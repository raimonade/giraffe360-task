import { usePersistentStore } from '@/store/persistentStore';
import Functions from '@/styles/Functions';
import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';

const Upload = styled.div`
	height: 90px;
	width: 100%;
	border-bottom: 1px solid var(--border);
	/* 
	${Functions.breakpoint('mobile')} {
		width: calc(100% - var(--gridMargin) * 2);
	} */
`;
const Container = styled.div`
	/* margin: auto; */
	height: 90px;
	/* width: calc(100% - var(--gridMargin) * 2); */
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: calc(100% - var(--gridMargin) * 2);

	margin: auto;

	span {
		font-weight: bold;
		font-size: 16px;
		line-height: 25px;
	}

	${Functions.breakpoint('mobile')} {
		font-size: 16px;

		/* width: ${Functions.colFixed(6)}; */
		margin: auto;
	}
	${Functions.breakpoint('laptop')} {
		width: ${Functions.colFixed(6)};
	}
`;

const WifiUpload = () => {
	const { wifiUpload, setWifiUpload } = usePersistentStore();
	return (
		<Upload>
			<Container>
				<span>Wifi Upload</span>
				<Toggle isOn={wifiUpload} onClick={() => setWifiUpload(!wifiUpload)} />
			</Container>
		</Upload>
	);
};

export default WifiUpload;
