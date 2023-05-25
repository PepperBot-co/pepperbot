/**
 * Generate a unique identifier.
 *
 * @returns {string} - The generated unique identifier.
 */
export const uuid = (): string =>
  new Date().getTime().toString(36) + Math.random().toString(36).slice(2);
