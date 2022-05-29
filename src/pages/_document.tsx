import Document, {
	DocumentContext,
	DocumentInitialProps,
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				// @ts-ignore
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
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