import clsx from 'clsx';

/**
 * Utility function to merge class names conditionally
 * Uses clsx under the hood for better performance
 * 
 * @param  {...any} inputs - Class names to merge
 * @returns {string} - Merged class names
 * 
 * @example
 * cn('base-class', condition && 'conditional-class', 'another-class')
 * cn('px-4 py-2', isActive && 'bg-blue-500', 'rounded')
 */
export function cn(...inputs) {
  return clsx(inputs);
}