/** @type {import('next').NextConfig} */
const withSvgr = require('@newhighsco/next-plugin-svgr');

const nextConfig = {
	reactStrictMode: true,
	compiler: {
		emotion: true,
	},
	env: {
		MODE: process.env.MODE,
	},
	optimizeFonts: false,
};

module.exports = withSvgr(nextConfig);
