const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('babel-loader'),
                    options: {
                        presets: [
                            '@emotion/babel-preset-css-prop',
                        ],
                    }
                },
                {
                    loader: require.resolve('ts-loader'),
                    options: {
                        // For guardian/types
                        allowTsInNodeModules: true,
                    },
                },
            ],
        });
        config.resolve.extensions.push('.ts', '.tsx');
        config.resolve.modules.push(path.resolve(__dirname, '../src'));

        return config;
    }
};
