import WifiIcon from '@/components/WifiIcon';
import { usePersistentStore } from '@/store/persistentStore';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ConnectModal from './ConnectModal';
import KnownNetworkModal from './KnownNetworkModal';
import { useModal } from './Modal';

const Item = styled(motion.li)`
	display: flex;
	height: 50px;
	width: 100%;
	align-items: center;
	cursor: pointer;

	span {
		font-weight: bold;
		font-size: 16px;
		/* line-height: 25px; */
		margin-left: 15px;
	}
`;

const NetworkItem = ({ content, index = 1 }) => {
	const { showModal } = useModal();
	const { savedNetworks } = usePersistentStore();

	const onClick = () => {
		const matching = savedNetworks.find((network) => network.ssid === content.ssid);
		if (matching) {
			showModal(KnownNetworkModal, { network: content });
			return;
		}
		showModal(ConnectModal, { network: content });
	};

	return (
		<Item
			onClick={onClick}
			exit={{ opacity: 0, y: -20, position: 'absolute', transition: { delay: 0 } }}
			initial={{
				y: -20,
				opacity: 0,
				position: 'absolute',
			}}
			animate={{
				y: 0,
				opacity: 1,
				position: 'relative',
			}}
			transition={{
				delay: index * 0.1 + Math.random(),
			}}
			// positionTransition={{ duration: 0.2 }}
		>
			<WifiIcon bars={content.strength} />
			<span>{content.ssid}</span>
		</Item>
	);
};

export default NetworkItem;
