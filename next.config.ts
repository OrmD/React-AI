import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    /* config options here */
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        })

        return config
    },

};

export default nextConfig;
