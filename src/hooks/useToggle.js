import { useState, useCallback } from 'react';

/**
 * Hook for toggling boolean state
 * @param {boolean} initialValue - Initial value
 * @returns {[boolean, function]} - [state, toggle function]
 */
export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  return [value, toggle];
};