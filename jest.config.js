module.exports = {
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "js"],
  testMatch: [
    "**/*.steps.ts"
  ],
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },
};
