const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');

describe('You', () => {
  it('should check the log of your repository', async () => {
    const lastCommand = await getLastCommand();
    const cwd = await getCwd();

    assert(lastCommand[0] === 'git' && lastCommand[1] === 'log' && lastCommand[2] === '-1' && lastCommand[3] === undefined && /\/project\/sql_reference$/.test(cwd));
  });
});
