const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should echo the correct text in the terminal', async () => {
    const lastCommand = await getLastCommand();

    assert(lastCommand[0] === 'echo' && lastCommand[1] === 'hello' && lastCommand[2] === 'git');
  });
});