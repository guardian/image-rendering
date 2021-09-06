const path = require('path');

const nodeModulesExclude = [
    {
        test: /node_modules/,
        exclude: [
            /@guardian\//,
        ],
    },
]

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            exclude: nodeModulesExclude,
            use: [
                {
                    loader: require.resolve('babel-loader'),
                    options: {
                        configFile: path.resolve(__dirname, '../config/babel.config.json')
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

        // update storybook webpack config to transpile *all* JS
        config.module.rules.find(rule => String(rule.test) === String(/\.(mjs|tsx?|jsx?)$/))
            .exclude = nodeModulesExclude;

        config.resolve.extensions.push('.ts', '.tsx');
        config.resolve.modules.push(path.resolve(__dirname, '../src'));

        return config;
    }
};
