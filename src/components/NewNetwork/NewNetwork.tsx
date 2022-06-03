import React from 'react';
import AddNetworkModal from '@/components/AddNetworkModal';
import Button from '@/components/Button';
import { useModal } from '@/components/Modal';
import { Container } from './NewNetwork.styed';

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
