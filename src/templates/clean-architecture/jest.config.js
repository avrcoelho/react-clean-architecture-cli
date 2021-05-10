/* globals module */
module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/dtos/*',
    '!<rootDir>/src/**/models/*',
    '!<rootDir>/src/@types/*',
    '!<rootDir>/src/presentation/assets/**/*',
    '!<rootDir>/src/presentation/index.tsx',
    '!<rootDir>/src/infrastructure/**/index.ts',
    '!<rootDir>/src/**/inMemory/*',
    '!<rootDir>/src/domain/usecases/*',
    '!<rootDir>/src/usecases/index.ts',
    '!<rootDir>/src/shared/Either.ts',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  moduleNameMapper: {
    '\\.(css|png|jpe?g)$': '<rootDir>/__mocks__/emptyFileMock.js',
    '\\.svg$': '<rootDir>/__mocks__/svgMock.js',
    '@/(.*)': '<rootDir>/src/$1',
  },
  testMatch: ['<rootDir>/src/**/__tests__/**/*.spec.{ts,tsx}'],
  setupFiles: ['<rootDir>/__mocks__/setupTest.js'],
};
