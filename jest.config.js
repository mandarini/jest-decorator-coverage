module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["src/main.ts"],
  globals: {
    "ts-jest": {
      isolatedModules: true
    }
  }
};
