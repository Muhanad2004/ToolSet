import { useEffect } from 'react';

export function useKeyboardNav({ onSearchFocus, onEscape }) {
  useEffect(() => {
    function handleKeyDown(e) {
      // Focus search on "/"
      if (e.key === '/' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        onSearchFocus?.();
      }
      
      // Close/clear on "Escape"
      if (e.key === 'Escape') {
        onEscape?.();
      }
    }
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSearchFocus, onEscape]);
}
