import WifiIcon from '@/components/WifiIcon';
import { usePersistentStore } from '@/store/persistentStore';
import KnownNetworkModal from '@/components/KnownNetworkModal';
import { useModal } from '@/components/Modal';
import { Item, Container, Wrapper } from './CurrentNetwork.styled';

export interface ICurrentNetwork {
	title?: string;
	strength?: number;
}

const CurrentNetwork = ({ title = 'ALHN-1842', strength = 2 }: ICurrentNetwork) => {
	const { showModal } = useModal();
	const { connected } = usePersistentStore();

	const onClick = () => {
		showModal(KnownNetworkModal, { network: connected });
	};

	return (
		<>
			{connected && (
				<Item onClick={onClick}>
					<Wrapper>
						<Container>
							<WifiIcon bars={connected.strength} />
							<div>
								<p>{connected.ssid}</p>
								<span>Connected</span>
							</div>
						</Container>
					</Wrapper>
				</Item>
			)}
		</>
	);
};

export default CurrentNetwork;
