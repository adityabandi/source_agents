import { useEffect, useState } from 'react'
import {
  type AdicodeAILimits,
  currentLimits,
  statusListeners,
} from './adicodeAiLimits.js'

export function useAdicodeAiLimits(): AdicodeAILimits {
  const [limits, setLimits] = useState<AdicodeAILimits>({ ...currentLimits })

  useEffect(() => {
    const listener = (newLimits: AdicodeAILimits) => {
      setLimits({ ...newLimits })
    }
    statusListeners.add(listener)

    return () => {
      statusListeners.delete(listener)
    }
  }, [])

  return limits
}
