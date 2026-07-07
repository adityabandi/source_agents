// In its own file to avoid circular dependencies
export const FILE_EDIT_TOOL_NAME = 'Edit'

// Permission pattern for granting session-level access to the project's .adicode/ folder
export const ADICODE_FOLDER_PERMISSION_PATTERN = '/.adicode/**'

// Permission pattern for granting session-level access to the global ~/.adicode/ folder
export const GLOBAL_ADICODE_FOLDER_PERMISSION_PATTERN = '~/.adicode/**'

export const FILE_UNEXPECTEDLY_MODIFIED_ERROR =
  'File has been unexpectedly modified. Read it again before attempting to write it.'
