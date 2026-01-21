import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <motion.button
      onClick={toggleTheme}
      className="rounded-lg transition-colors"
      style={{ 
        padding: 'clamp(0.375rem, 1vw, 0.5rem)',
        backgroundColor: 'transparent'
      }}
      whileHover={{ scale: 1.05, backgroundColor: 'var(--border)' }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
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
      </motion.div>
    </motion.button>
  );
}
