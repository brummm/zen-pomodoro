module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 12,
  },
  plugins: ['@typescript-eslint'],
  root: true,
  env: {
    jest: true,
		es2021: true,
  },
  ignorePatterns: ['.eslintrc.js', '.babel.config.js'],
  extends: [
    // '@react-native-community',
    'standard',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
		'@typescript-eslint/no-tabs': 0,
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/semi': 'never'
  },
}
