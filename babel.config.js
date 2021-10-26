module.exports = {
  presets: [
    '@babel/preset-typescript',
    // '@babel/preset-env',
    // '@babel/preset-react',
    // '@babel/preset-flow',
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    'react-native-reanimated/plugin',
    ["@babel/plugin-proposal-private-methods", { "loose": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
  ],
  sourceMaps: true
}
