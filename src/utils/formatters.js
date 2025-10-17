import { format, parseISO } from 'date-fns';

/**
 * Format a date string to a readable format
 * @param {string|Date} date - Date to format
 * @param {string} formatStr - Format string (default: 'hh:mm a, dd MMM, yyyy')
 * @returns {string} - Formatted date
 * 
 * @example
 * formatDate('2024-10-10T13:23:00') // '01:23 pm, 10 Oct, 2024'
 */
export function formatDate(date, formatStr = 'hh:mm a, dd MMM, yyyy') {
  if (!date) return '';
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, formatStr);
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
}

/**
 * Format phone number to a readable format
 * @param {string} phone - Phone number
 * @returns {string} - Formatted phone number
 * 
 * @example
 * formatPhoneNumber('+2348012345678980') // '+234 801 234 5678 980'
 */
export function formatPhoneNumber(phone) {
  if (!phone) return '';
  
  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '');
  
  // Format: +234 801 234 5678
  if (cleaned.startsWith('+')) {
    const match = cleaned.match(/^(\+\d{1,3})(\d{3})(\d{3})(\d{4})(\d*)/);
    if (match) {
      return `${match[1]} ${match[2]} ${match[3]} ${match[4]}${match[5] ? ' ' + match[5] : ''}`;
    }
  }
  
  return cleaned;
}

/**
 * Get initials from a full name
 * @param {string} firstName - First name
 * @param {string} lastName - Last name
 * @returns {string} - Initials
 * 
 * @example
 * getInitials('Rosko', 'Anama') // 'RA'
 */
export function getInitials(firstName, lastName) {
  if (!firstName && !lastName) return '??';
  
  const first = firstName ? firstName.charAt(0).toUpperCase() : '';
  const last = lastName ? lastName.charAt(0).toUpperCase() : '';
  
  return `${first}${last}`;
}

/**
 * Truncate text to a specific length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated text
 * 
 * @example
 * truncateText('This is a long text', 10) // 'This is a...'
 */
export function truncateText(text, maxLength = 50) {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  
  return `${text.substring(0, maxLength)}...`;
}

/**
 * Format a number with commas
 * @param {number} num - Number to format
 * @returns {string} - Formatted number
 * 
 * @example
 * formatNumber(1000000) // '1,000,000'
 */
export function formatNumber(num) {
  if (!num) return '0';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Capitalize first letter of each word
 * @param {string} str - String to capitalize
 * @returns {string} - Capitalized string
 * 
 * @example
 * capitalize('hello world') // 'Hello World'
 */
export function capitalize(str) {
  if (!str) return '';
  return str.replace(/\b\w/g, char => char.toUpperCase());
}