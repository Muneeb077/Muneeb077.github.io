// Matches "[...]" segments that mark content the owner still needs to fill in.
export const PLACEHOLDER_PATTERN = /(\[[^\]]+\])/;

export const isPlaceholder = (value) =>
  typeof value === 'string' && value.startsWith('[') && value.endsWith(']');
