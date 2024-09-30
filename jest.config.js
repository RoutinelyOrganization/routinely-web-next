// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config = {
  preset: 'ts-jest',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.{spec,test}.{ts,tsx}'],
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/stories.tsx',
    '!src/**/styles.tsx',
    '!src/styles/**/*',
    '!src/types/**/*',
    '!src/hooks/**/*',
    '!src/mocks/**/*',
    '!src/app/layout.tsx',
    '!node_modules/**',
    '!src/components/calendar/**/*',
    '!src/app/api/auth/**/*',
    '!src/providers/sessionProvider.tsx',
    '!src/factories/**/*',
    '!src/app/**/*',
  ],

  moduleNameMapper: {
    '^@public/(.*)$': '<rootDir>/public/$1',
    '^@mocks/(.*)$': '<rootDir>/mocks/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
