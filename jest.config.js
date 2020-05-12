module.exports = {
  preset: "ts-jest",
  testMatch: ["<rootDir>/tests/**/*.(spec|test).ts?(x)"],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  coverageDirectory: "<rootDir>/tests/unit/coverage",
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!src/main.js",
    "!src/router/index.js",
    "!src/node_modules/**"
  ]
};
