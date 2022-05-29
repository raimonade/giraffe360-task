import Mode from '@/models/mode';
import Global from '@/styles/Global';
import DebugModule from '@/components/DebugModule';
import { ModalWrapper, ModalProvider } from '@/components/Modal';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Global />
			{process.env.MODE === Mode.DEV ? <DebugModule /> : <></>}
			<ModalProvider>
				<Component {...pageProps} />
				<ModalWrapper />
			</ModalProvider>
		</>
	);
}
