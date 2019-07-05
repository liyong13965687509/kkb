const {injectBabelPlugin} = require('react-app-rewired')

module.exports = function override(config, env) {
    config = injectBabelPlugin([
        'import', {libraryName: 'antd', libraryDirectirty: 'es', style: 'css'}
    ], config);
    return config;
}
