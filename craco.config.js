// craco.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.ts',
        './src/**/*.tsx'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    safelist: {
        standard: [/^fa-/, /^btn-/], // Safelist Font Awesome and Bootstrap button classes
    },
});

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    style: {
        postcss: {
            plugins: [
                purgecss,
            ],
        },
    },
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            if (env === 'production') {
                webpackConfig.optimization.minimize = true;
                webpackConfig.optimization.minimizer = [
                    new TerserPlugin({
                        terserOptions: {
                            compress: {
                                drop_console: true, // Remove console logs
                            },
                        },
                    }),
                ];
            }
            return webpackConfig;
        },
    },
};
