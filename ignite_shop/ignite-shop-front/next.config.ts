import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	newNextLinkBehavior: true,
	images: {
		remotePatterns: [
			{
				hostname: "files.stripe.com",
			},
		],
	},
};

export default nextConfig;
