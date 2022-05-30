import Mode from '@/models/mode';
import Global, { globalStyles } from '@/styles/Global';
import DebugModule from '@/components/DebugModule';
import { ModalWrapper, ModalProvider } from '@/components/Modal';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
const cache = createCache({ key: 'next' });

export default function App({ Component, pageProps }) {
	return (
		<>
			<CacheProvider value={cache}>
				{globalStyles}
				{process.env.MODE === Mode.DEV ? <DebugModule /> : <></>}
				<ModalProvider>
					<Component {...pageProps} />
					<ModalWrapper />
				</ModalProvider>
			</CacheProvider>
		</>
	);
}
