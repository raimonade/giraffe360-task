declare module '*.svg' {
	import { FC, SVGProps } from 'react';
	export const ReactComponent: FC<SVGProps<SVGSVGElement>>;

	const src: string;
	export default src;
}

declare module '*.ttf' {
	const value: string;
	export = value;
}
