import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

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
    <button
      onClick={handleCopy}
      className="copy-btn rounded-md"
      style={{ 
        padding: '0.5rem',
        backgroundColor: 'transparent',
      }}
      aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      {copied ? (
        <Check style={{ width: '1rem', height: '1rem', color: 'var(--accent-secondary)' }} />
      ) : (
        <Copy style={{ width: '1rem', height: '1rem', color: 'var(--text-muted)' }} />
      )}
    </button>
  );
}
