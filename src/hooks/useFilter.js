import { useState, useMemo } from 'react';

/**
 * Hook for managing filter state
 * @param {Array} data - Data to filter
 * @param {Function} filterFn - Filter function
 * @returns {object} - { filteredData, filters, setFilters, resetFilters }
 */
export const useFilter = (data, filterFn) => {
  const [filters, setFilters] = useState({});

  const filteredData = useMemo(() => {
    if (!filterFn) return data;
    return filterFn(data, filters);
  }, [data, filters, filterFn]);

  const resetFilters = () => {
    setFilters({});
  };

  return {
    filteredData,
    filters,
    setFilters,
    resetFilters,
  };
};