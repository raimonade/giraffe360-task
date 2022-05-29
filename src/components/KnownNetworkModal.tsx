import React, { useState } from 'react';
import Button, { ButtonContainer } from '@/components/Button';
import ClickableText from '@/components/ClickableText';
import Input from '@/components/Input';
import { useModal } from '@/components/Modal';
import { ModalTitle } from '@/components/Modal/Modal';
import { AnimatePresence } from 'framer-motion';
import { usePersistentStore } from '@/store/persistentStore';
import { connect } from 'http2';
import { useSubmit } from '@/hooks/useSubmit';

const KnownNetworkModal = (props) => {
	const { hideModal } = useModal();
	// overview, forget, disconnect
	const { removeSavedNetwork, connected, disconnect, connect } = usePersistentStore();
	const [step, setStep] = useState('overview');
	const { submit, clearError, error, submitting, success, feedback } = useSubmit({
		onSubmit: () => {
			hideModal();
		},
	});

	const onForgetNetwork = () => {
		setStep('forget');
	};
	const onDisconnect = () => {
		disconnect(props?.network);
		hideModal();
	};

	const onConfirmForget = () => {
		console.log('remove');
		hideModal();
		removeSavedNetwork(props?.network);
	};

	const onConnect = () => {
		submit(() => {
			// return 10;
			connect(props.network);
		});
	};

	return (
		<div>
			{/* <ModalTitle title='Forget Wi-Fi network "Giraffe visual"?"' />
			<ButtonContainer orientation="center">
				<Button text="Forget" />
				<Button buttonType="filled" text="Cancel" onClick={hideModal} />
			</ButtonContainer> */}
			<AnimatePresence>
				<ModalTitle
					title={
						step === 'overview'
							? props?.network?.ssid
							: `Forget Wi-Fi network${
									props?.network?.ssid ? ` ${props?.network?.ssid}` : ''
							  }?`
					}
					subtitle={step === 'overview' ? 'Network' : null}
				/>
				{!error && !submitting && !success ? (
					<>
						<ButtonContainer orientation="right">
							{step === 'overview' ? (
								<>
									<Button text="Cancel" onClick={hideModal} />
									{connected?.ssid === props?.network?.ssid ? (
										<Button
											buttonType="filled"
											text="Disconnect"
											onClick={onDisconnect}
										/>
									) : (
										<Button
											buttonType="filled"
											text="Connect"
											onClick={onConnect}
										/>
									)}
								</>
							) : (
								<>
									<Button text="Forget" onClick={onConfirmForget} />
									<Button buttonType="filled" text="Cancel" onClick={hideModal} />
								</>
							)}
						</ButtonContainer>
						{step === 'overview' && (
							<ClickableText
								orient="right"
								onClick={onForgetNetwork}
								text={'Forget network'}
							/>
						)}
					</>
				) : (
					feedback
				)}
			</AnimatePresence>
		</div>
	);
};

export default KnownNetworkModal;
