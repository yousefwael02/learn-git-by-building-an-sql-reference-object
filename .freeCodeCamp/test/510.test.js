const assert = require('assert');
const { getLastCommand, getCommandOutput } = require('./utils');

describe('You', () => {
  it('should use "git checkout" to switch to the correct branch', async () => {
    const lastCommand = await getLastCommand();
    const commandOutput = await getCommandOutput('git status');

    assert(lastCommand[0] === 'git' && lastCommand[1] === 'checkout' && /On branch feat\/add-drop-table-reference\s/.test(commandOutput));
  });
});
