import { useSubmit } from '@/hooks/useSubmit';
import { usePersistentStore } from '@/store/persistentStore';
import React, { useState } from 'react';
import Button, { ButtonContainer } from '@/components/Button';
import Input from '@/components/Input';
import { useModal } from '@/components/Modal';
import { ModalTitle } from '@/components/Modal/Modal';

const ConnectModal = (props: any) => {
	const { hideModal } = useModal();
	const { addSavedNetwork, connect } = usePersistentStore();
	const { submit, clearError, error, submitting, success, feedback } = useSubmit({
		onSubmit: () => {
			hideModal();
		},
	});
	const [password, setPassword] = useState('');

	const handleConnect = () => {
		submit(() => {
			// return 10;
			if (password === props.network.password) {
				addSavedNetwork(props.network);
				connect(props.network);
			} else {
				throw new Error(`Couldn't connect to the network`);
			}
		});
	};

	return (
		<div style={{ minHeight: 250 }}>
			<ModalTitle title={props?.network?.ssid} subtitle="Connect to"></ModalTitle>
			{!error && !submitting && !success ? (
				<form>
					<Input
						onChange={(txt) => setPassword(txt)}
						value={password}
						inputType="Password"
						label="Password"
					></Input>
				</form>
			) : (
				feedback
			)}

			<ButtonContainer orientation="right">
				{!error && !submitting && !success ? (
					<>
						<Button text="Cancel" onClick={hideModal} />
						<Button
							buttonType="filled"
							text="Connect"
							onClick={handleConnect}
							disabled={password?.length < 3}
						/>
					</>
				) : error ? (
					<Button buttonType="filled" text="Ok" onClick={clearError} />
				) : null}
			</ButtonContainer>
		</div>
	);
};

export default ConnectModal;
