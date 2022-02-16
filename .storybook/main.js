const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        // 'storybook-css-modules-preset',
        '@storybook/preset-scss',
    ],
    webpackFinal: async (config) => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                plugins: [...(config.resolve.plugins || []), new TsconfigPathsPlugin()],
            },
        };
    },
};
