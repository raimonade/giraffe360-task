import Mode from '@/models/mode';
import Global from '@/styles/Global';
import DebugModule from '@/components/DebugModule';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Global />
			{process.env.MODE === Mode.DEV ? <DebugModule /> : <></>}
			<Component {...pageProps} />
		</>
	);
}
