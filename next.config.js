/** @type {import('next').NextConfig} */
const withSvgr = require('@newhighsco/next-plugin-svgr');

const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	env: {
		MODE: process.env.MODE,
	},
};

module.exports = withSvgr(nextConfig);
