export default {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', '!src/*.d.ts'],
  modulePaths: ['<rootDir>/src/']
};
