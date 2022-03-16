const { name } = require('./package');

module.exports = {
    webpack: (config, env) => {
        config.output.library = `${name}`;
        config.output.libraryTarget = 'umd';
        config.output.globalObject = 'window';
        config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
        return config;
    },
    devServer: (_) => {
        const config = _;
    
        config.headers = {
          'Access-Control-Allow-Origin': '*',
        };
        config.historyApiFallback = true;
        config.hot = false;
        config.watchContentBase = false;
        config.liveReload = false;
        config.injectClient = false
        return config;
    }
}