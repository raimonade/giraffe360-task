import { usePersistentStore } from '@/store/persistentStore';
import React, { useState } from 'react';
import Button, { ButtonContainer } from '@/components/Button';
import Input from '@/components/Input';
import { useModal } from '@/components/Modal';
import { ModalTitle } from '@/components/Modal/Modal';

const AddNetworkModal = (props: any) => {
	const [ssid, setSsid] = useState('');
	const [password, setPassword] = useState('');
	const { addSavedNetwork } = usePersistentStore();

	const { hideModal } = useModal();

	const onAddNetwork = () => {
		addSavedNetwork({
			ssid,
			password,
			strength: 3,
		});
		hideModal();
	};

	return (
		<div>
			<ModalTitle title={'Add Network'} />
			<form>
				<Input value={ssid} onChange={(text) => setSsid(text)} label="Network Name"></Input>
				<Input
					value={password}
					onChange={(text) => setPassword(text)}
					label="Password"
					inputType="password"
				></Input>
			</form>
			<ButtonContainer orientation="right">
				<Button text="Cancel" onClick={hideModal} />
				<Button
					buttonType="filled"
					text="Add"
					disabled={password?.length < 3 && ssid?.length < 3}
					onClick={onAddNetwork}
				/>
			</ButtonContainer>
		</div>
	);
};

export default AddNetworkModal;
