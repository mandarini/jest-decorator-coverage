import 'reflect-metadata';

import { container } from './container';
import { Main } from './main';

describe("jest-decorator-coverage", () => {
  it("should generate partial coverage on decorated parameter with `branch not covered`", () => {
    container.get(Main);
  });
});
