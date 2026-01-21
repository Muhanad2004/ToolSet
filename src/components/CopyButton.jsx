import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  
  return (
    <motion.button
      onClick={handleCopy}
      className="rounded-md transition-colors"
      style={{ 
        padding: '0.5rem',
        backgroundColor: 'transparent',
      }}
      whileHover={{ scale: 1.05, backgroundColor: 'var(--border)' }}
      whileTap={{ scale: 0.95 }}
      aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="check"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.2 }}
          >
            <Check style={{ width: '1rem', height: '1rem', color: 'var(--accent-secondary)' }} />
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: -180 }}
            transition={{ duration: 0.2 }}
          >
            <Copy style={{ width: '1rem', height: '1rem', color: 'var(--text-muted)' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
