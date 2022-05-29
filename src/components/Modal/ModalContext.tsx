import React, { useContext, createContext } from 'react';

const ModalContext = createContext({
	hideModal: null,
	showModal: null,
	props: null,
	component: null,
});

export default ModalContext;

export const ModalConsumer = ModalContext.Consumer;

export const useModal = () => {
	const context = useContext(ModalContext);

	if (context === undefined) {
		throw new Error('ModalContext cannot be used outside of ModalProvider');
	}
	return context;
};
