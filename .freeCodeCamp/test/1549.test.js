const assert = require('assert');
const { getCommits } = require('./utils');

describe('You', () => {
  it('should have the correct last commit message', async () => {
    const commits = await getCommits();

    assert(/^Revert "feat: add unique reference"\s/.test(commits[0].message));
  });
});
