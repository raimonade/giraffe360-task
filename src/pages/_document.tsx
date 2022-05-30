import Document, {
	DocumentContext,
	DocumentInitialProps,
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="preload"
						href="/fonts/Gilroy-Bold.woff"
						as="font"
						type="font/woff"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/Gilroy-Regular.woff"
						as="font"
						type="font/woff"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/Gilroy-Bold.woff2"
						as="font"
						type="font/woff"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/Gilroy-Regular.woff2"
						as="font"
						type="font/woff"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/Gilroy-Medium.woff"
						as="font"
						type="font/woff"
						crossOrigin=""
					/>
					<link
						rel="preload"
						href="/fonts/Gilroy-Medium.woff2"
						as="font"
						type="font/woff"
						crossOrigin=""
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
