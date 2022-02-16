/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
    reactStrictMode: true,
    ignoreBuildErrors: true,
    webpack5: true,
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            react: path.resolve('./node_modules/react'),
        };
        config.resolve.fallback = { fs: false };
        return config;
    },
};
