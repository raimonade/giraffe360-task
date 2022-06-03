import { usePersistentStore } from '@/store/persistentStore';
import React, { useEffect, useState } from 'react';
import Toggle from '@/components/Toggle';
import { Container, Upload } from './WifiUpload.styled';

const WifiUpload = () => {
	const { wifiUpload, setWifiUpload } = usePersistentStore();
	const [status, setStatus] = useState(null);

	useEffect(() => {
		setStatus(wifiUpload);
	}, [wifiUpload]);

	return (
		<Upload>
			{status === null ? null : (
				<Container>
					<span>Wifi Upload</span>
					<Toggle isOn={status} onClick={() => setWifiUpload(!wifiUpload)} />
				</Container>
			)}
		</Upload>
	);
};

export default WifiUpload;
