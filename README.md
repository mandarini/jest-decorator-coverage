# jest-decorator-coverage
When `isolateModules: true`, decorated parameters will have coverage results with `branch not covered`
https://github.com/kulshekhar/ts-jest/issues/1166

### [jest.config.js](jest.config.js)
```js
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
```
### test
```
jest --no-cache --coverage
 PASS  src/main.spec.ts
  jest-decorator-coverage
    √ should generate partial coverage on decorated parameter with `branch not covered` (4ms)

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |      100 |       75 |      100 |      100 |                   |
 main.ts  |      100 |       75 |      100 |      100 |                 8 |
----------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.809s
Ran all test suites.
Done in 2.83s.
```

### lcov-report
![lcov-report](img/lcov-report.jpg)
