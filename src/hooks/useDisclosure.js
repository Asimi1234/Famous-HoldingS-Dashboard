import { useState, useCallback } from 'react';

/**
 * Hook for managing open/close state (modals, dropdowns, etc.)
 * @param {boolean} initialValue - Initial open state
 * @returns {object} - { isOpen, onOpen, onClose, onToggle }
 */
export const useDisclosure = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
};