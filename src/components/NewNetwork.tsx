import Functions from '@/styles/Functions';
import React from 'react';
import styled from 'styled-components';
import AddNetworkModal from './AddNetworkModal';
import Button from './Button';
import { useModal } from './Modal';

const Container = styled.div`
	width: calc(100% - var(--gridMargin) * 2);
	margin: 0 auto;

	> div {
		margin-top: 50px;
		${Functions.breakpoint('laptop')} {
			width: ${Functions.col(6, 12)};
			/* background: red; */
			margin-left: auto;
			margin-right: auto;
		}
	}
`;

const NewNetwork = () => {
	const { showModal } = useModal();

	const onNewNetwork = () => {
		showModal(AddNetworkModal);
	};

	return (
		<Container>
			<div>
				<Button text={'Add Network'} buttonType="filled" onClick={onNewNetwork} />
			</div>
		</Container>
	);
};

export default NewNetwork;
