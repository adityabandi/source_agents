import type { Command, LocalCommandCall } from '../types/command.js'

const call: LocalCommandCall = async () => {
  return {
    type: 'text',
    value: ADICODE.BUILD_TIME
      ? `${ADICODE.VERSION} (built ${ADICODE.BUILD_TIME})`
      : ADICODE.VERSION,
  }
}

const version = {
  type: 'local',
  name: 'version',
  description:
    'Print the version this session is running (not what autoupdate downloaded)',
  isEnabled: () => process.env.USER_TYPE === 'ant',
  supportsNonInteractive: true,
  load: () => Promise.resolve({ call }),
} satisfies Command

export default version
