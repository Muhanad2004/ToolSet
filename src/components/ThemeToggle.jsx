import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg transition-colors copy-btn"
      style={{ 
        padding: 'clamp(0.375rem, 1vw, 0.5rem)',
        backgroundColor: 'transparent'
      }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Moon 
          style={{ 
            width: 'clamp(1.125rem, 2vw, 1.25rem)',
            height: 'clamp(1.125rem, 2vw, 1.25rem)',
            color: 'var(--accent-primary)'
          }} 
        />
      ) : (
        <Sun 
          style={{ 
            width: 'clamp(1.125rem, 2vw, 1.25rem)',
            height: 'clamp(1.125rem, 2vw, 1.25rem)',
            color: 'var(--accent-primary)'
          }} 
        />
      )}
    </button>
  );
}
