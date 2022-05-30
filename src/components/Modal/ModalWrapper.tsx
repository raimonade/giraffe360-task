import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import ModalConsumer from './ModalContext';
import Modal from './Modal';

const Background = styled(motion.div)`
	position: fixed;
	z-index: 20;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	place-content: center;
	position: relative;
`;

const ModalWrapper = () => {
	// useChain(Component ? [springRef, transRef] : [transRef, springRef], [0, Component ? 0.1 : 0.6]);

	return (
		<ModalConsumer.Consumer>
			{({ component: Component, props, hideModal }) => (
				<ModalContainer Component={Component} props={props} hideModal={hideModal} />
			)}
		</ModalConsumer.Consumer>
	);
};

const ModalContainer = ({ Component, props, hideModal }) => {
	return (
		<AnimatePresence>
			{Component && (
				<Background
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.15, ease: 'easeInOut' } }}
					exit={{
						opacity: 0,
						transition: { delay: 0.15, duration: 0.15, ease: 'easeInOut' },
					}}
				>
					<Container>
						<Modal
							initial={{ opacity: 0, marginTop: 30 }}
							animate={{
								opacity: 1,
								marginTop: 0,
								transition: { delay: 0.15 },
							}}
							exit={{ opacity: 0, marginTop: -50 }}
							transition={{
								stiffness: 500,
							}}
						>
							<Component {...props} onRequestClose={hideModal} />
						</Modal>
					</Container>
				</Background>
			)}
		</AnimatePresence>
	);

	// 				<Background>
	// 					<Modal>
	// 						<Component {...props} onRequestClose={hideModal} />
	// 					</Modal>
};

export default ModalWrapper;
