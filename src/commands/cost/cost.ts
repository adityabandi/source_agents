import { formatTotalCost } from '../../cost-tracker.js'
import { currentLimits } from '../../services/adicodeAiLimits.js'
import type { LocalCommandCall } from '../../types/command.js'
import { isAdicodeAISubscriber } from '../../utils/auth.js'

export const call: LocalCommandCall = async () => {
  if (isAdicodeAISubscriber()) {
    let value: string

    if (currentLimits.isUsingOverage) {
      value =
        'You are currently using your overages to power your AI CLI usage. We will automatically switch you back to your subscription rate limits when they reset'
    } else {
      value =
        'You are currently using your subscription to power your AI CLI usage'
    }

    if (process.env.USER_TYPE === 'ant') {
      value += `\n\n[ADICODE-ONLY] Showing cost anyway:\n ${formatTotalCost()}`
    }
    return { type: 'text', value }
  }
  return { type: 'text', value: formatTotalCost() }
}
