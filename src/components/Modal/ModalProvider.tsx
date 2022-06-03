import React, { ReactNode, useState } from 'react';
import ModalContext from './ModalContext';

const ModalProvider = ({ children }: { children: ReactNode }) => {
	const [state, setState] = useState({ component: null, props: null });

	function showModal(component, props = {}) {
		setState({ component, props });
	}

	function hideModal() {
		setState({ component: null, props: {} });
	}

	const contextValue = {
		showModal,
		hideModal,
		...state,
	};

	return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
