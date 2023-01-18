// module.exports = {
//   testEnvironment: 'jsdom',
//   collectCoverage: false,
//   collectCoverageFrom: [
//     '**/**/*.{js,jsx,tsx,ts}',
//     '!**/.next/**',
//     '!**/node_modules/**',
//     '!**/coverage/**',
//     '!**/config/**',
//     '!**/folder-with-untested-files/**'
//   ],
//   setupFilesAfterEnv: [
//     '<rootDir>/jest-setup.js'
//   ],
//   moduleNameMapper: {
//     '\\.(css|sass)$': 'identity-obj-proxy'
//   },
//   coverageReporters: ['html', 'json'],
// }

const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
})

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  coverageReporters: ['html', 'json'],
  collectCoverage: false,
  collectCoverageFrom: [
    '**/**/*.{js,jsx,tsx,ts}',
    '!**/.next/**',
    '!jest.config.js',
    '!next.config.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/config/**',
    '!**/folder-with-untested-files/**'
  ],
}

module.exports = createJestConfig(customJestConfig)