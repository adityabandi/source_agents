// Content for the adicode-api bundled skill.
// Each .md file is inlined as a string at build time via Bun's text loader.

import csharpAdicodeApi from './adicode-api/csharp/adicode-api.md'
import curlExamples from './adicode-api/curl/examples.md'
import goAdicodeApi from './adicode-api/go/adicode-api.md'
import javaAdicodeApi from './adicode-api/java/adicode-api.md'
import phpAdicodeApi from './adicode-api/php/adicode-api.md'
import pythonAgentSdkPatterns from './adicode-api/python/agent-sdk/patterns.md'
import pythonAgentSdkReadme from './adicode-api/python/agent-sdk/README.md'
import pythonAdicodeApiBatches from './adicode-api/python/adicode-api/batches.md'
import pythonAdicodeApiFilesApi from './adicode-api/python/adicode-api/files-api.md'
import pythonAdicodeApiReadme from './adicode-api/python/adicode-api/README.md'
import pythonAdicodeApiStreaming from './adicode-api/python/adicode-api/streaming.md'
import pythonAdicodeApiToolUse from './adicode-api/python/adicode-api/tool-use.md'
import rubyAdicodeApi from './adicode-api/ruby/adicode-api.md'
import skillPrompt from './adicode-api/SKILL.md'
import sharedErrorCodes from './adicode-api/shared/error-codes.md'
import sharedLiveSources from './adicode-api/shared/live-sources.md'
import sharedModels from './adicode-api/shared/models.md'
import sharedPromptCaching from './adicode-api/shared/prompt-caching.md'
import sharedToolUseConcepts from './adicode-api/shared/tool-use-concepts.md'
import typescriptAgentSdkPatterns from './adicode-api/typescript/agent-sdk/patterns.md'
import typescriptAgentSdkReadme from './adicode-api/typescript/agent-sdk/README.md'
import typescriptAdicodeApiBatches from './adicode-api/typescript/adicode-api/batches.md'
import typescriptAdicodeApiFilesApi from './adicode-api/typescript/adicode-api/files-api.md'
import typescriptAdicodeApiReadme from './adicode-api/typescript/adicode-api/README.md'
import typescriptAdicodeApiStreaming from './adicode-api/typescript/adicode-api/streaming.md'
import typescriptAdicodeApiToolUse from './adicode-api/typescript/adicode-api/tool-use.md'

// @[MODEL LAUNCH]: Update the model IDs/names below. These are substituted into {{VAR}}
// placeholders in the .md files at runtime before the skill prompt is sent.
// After updating these constants, manually update the two files that still hardcode models:
//   - adicode-api/SKILL.md (Current Models pricing table)
//   - adicode-api/shared/models.md (full model catalog with legacy versions and alias mappings)
export const SKILL_MODEL_VARS = {
  OPUS_ID: 'adicode-opus-4-6',
  OPUS_NAME: 'Adicode Opus 4.6',
  SONNET_ID: 'adicode-sonnet-4-6',
  SONNET_NAME: 'Adicode Sonnet 4.6',
  HAIKU_ID: 'adicode-haiku-4-5',
  HAIKU_NAME: 'Adicode Haiku 4.5',
  // Previous Sonnet ID — used in "do not append date suffixes" example in SKILL.md.
  PREV_SONNET_ID: 'adicode-sonnet-4-5',
} satisfies Record<string, string>

export const SKILL_PROMPT: string = skillPrompt

export const SKILL_FILES: Record<string, string> = {
  'csharp/adicode-api.md': csharpAdicodeApi,
  'curl/examples.md': curlExamples,
  'go/adicode-api.md': goAdicodeApi,
  'java/adicode-api.md': javaAdicodeApi,
  'php/adicode-api.md': phpAdicodeApi,
  'python/agent-sdk/README.md': pythonAgentSdkReadme,
  'python/agent-sdk/patterns.md': pythonAgentSdkPatterns,
  'python/adicode-api/README.md': pythonAdicodeApiReadme,
  'python/adicode-api/batches.md': pythonAdicodeApiBatches,
  'python/adicode-api/files-api.md': pythonAdicodeApiFilesApi,
  'python/adicode-api/streaming.md': pythonAdicodeApiStreaming,
  'python/adicode-api/tool-use.md': pythonAdicodeApiToolUse,
  'ruby/adicode-api.md': rubyAdicodeApi,
  'shared/error-codes.md': sharedErrorCodes,
  'shared/live-sources.md': sharedLiveSources,
  'shared/models.md': sharedModels,
  'shared/prompt-caching.md': sharedPromptCaching,
  'shared/tool-use-concepts.md': sharedToolUseConcepts,
  'typescript/agent-sdk/README.md': typescriptAgentSdkReadme,
  'typescript/agent-sdk/patterns.md': typescriptAgentSdkPatterns,
  'typescript/adicode-api/README.md': typescriptAdicodeApiReadme,
  'typescript/adicode-api/batches.md': typescriptAdicodeApiBatches,
  'typescript/adicode-api/files-api.md': typescriptAdicodeApiFilesApi,
  'typescript/adicode-api/streaming.md': typescriptAdicodeApiStreaming,
  'typescript/adicode-api/tool-use.md': typescriptAdicodeApiToolUse,
}
