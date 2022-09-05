module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: [
            './app'
          ],
          extensions: [
            '.js',
            '.ios.js',
            '.android.js',
            '.web.js'
          ],
          alias: {
            'app': './app',
            'abilities': './app/abilities',
            'assets': './app/assets',
            'caches': './app/caches',
            'components': './app/components',
            'configs': './app/configs',
            'constants': './app/constants',
            'controls': './app/controls',
            'databases': './app/databases',
            'globals': './app/globals',
            'handlers': './app/handlers',
            'hooks': './app/hooks',
            'helpers': './app/helpers',
            'modules': './app/modules',
            'screens': './app/screens',
            'services': './app/services',
            'stores': './app/stores',
            'utils': './app/utils',
            'pb': './pb'
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
