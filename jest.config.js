module.exports = {
  verbose: true,
  testRegex: "(/__tests__/.*|(\\.|/)(test))\\.(jsx?)$",
  moduleFileExtensions: ["js", "jsx"],
  roots: ["<rootDir>/src"],
  moduleDirectories: ["node_modules"],
  testPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/dist"],
  setupFiles: ["<rootDir>/jest/setup-tests.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  coveragePathIgnorePatterns: ["<rootDir>/jest/"],
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/dist/**",
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
};
