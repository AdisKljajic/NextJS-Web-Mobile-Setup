/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		unoptimized: true
	},
	// Enable static export
	output: 'export',
};

export default nextConfig;