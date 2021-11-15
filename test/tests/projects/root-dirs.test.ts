import { ut } from '../../src';

/* ****************************************************************************************************************** *
 * Config
 * ****************************************************************************************************************** */

const testRuns = ut.loadProject({
  projectName: 'root-dirs',
  configs: [true, false, undefined].map((v) => ({ useRootDirs: v })),
});

/* ****************************************************************************************************************** *
 * Tests
 * ****************************************************************************************************************** */

describe(`[Project: 'root-dirs'] - TS RootDirs`, () => {
  describe.each(testRuns)(`$runLabel`, ({ tests }) => {
    test.each(tests)(`%s`, (_, { expects }) => {
      expects.forEach((exp) => expect(exp).toResolve());
    });
  });
});