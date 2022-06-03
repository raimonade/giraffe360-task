import WifiIcon from '@/components/WifiIcon';
import { usePersistentStore } from '@/store/persistentStore';
import ConnectModal from '@/components/ConnectModal';
import KnownNetworkModal from '@/components/KnownNetworkModal';
import { useModal } from '@/components/Modal';
import { Wifi } from '@/models/wifi';
import { Item } from './NetworkItem.styled';

export interface INetworkItem {
	content: Wifi;
	index?: number;
}

const NetworkItem = ({ content, index = 1 }: INetworkItem) => {
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
