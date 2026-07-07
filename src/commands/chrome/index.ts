import { getIsNonInteractiveSession } from '../../bootstrap/state.js'
import type { Command } from '../../commands.js'

const command: Command = {
  name: 'chrome',
  description: 'The assistant in Chrome (Beta) settings',
  availability: ['adicode-ai'],
  isEnabled: () => !getIsNonInteractiveSession(),
  type: 'local-jsx',
  load: () => import('./chrome.js'),
}

export default command
