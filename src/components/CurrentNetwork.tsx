import WifiIcon from '@/components/WifiIcon';
import { usePersistentStore } from '@/store/persistentStore';
import Functions from '@/styles/Functions';
import styled from '@emotion/styled';
import KnownNetworkModal from './KnownNetworkModal';
import { useModal } from './Modal';

const Item = styled.div`
	width: 100%;
	border-bottom: 1px solid var(--border);
	min-height: 70px;
	padding: 20px 0;
	cursor: pointer;
`;

const Wrapper = styled.div`
	${Functions.breakpoint('laptop')} {
		margin: 0 auto;
		width: calc(100% - var(--gridMargin) * 2);
	}
`;

const Container = styled.div`
	width: calc(100% - var(--gridMargin) * 2);
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 0 auto;

	${Functions.breakpoint('laptop')} {
		width: ${Functions.col(6, 12)};
	}

	> div {
		display: flex;
		flex-direction: column;

		p,
		span {
			font-weight: bold;
			font-size: 16px;
			/* line-height: 25px; */
			margin-left: 15px;
		}
		span {
			font-size: 14px;
			color: var(--yellow);
		}
	}
`;

const CurrentNetwork = ({ title = 'ALHN-1842', strength = 2 }) => {
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
