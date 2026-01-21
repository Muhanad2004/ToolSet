import { Search, X } from 'lucide-react';
import { useRef } from 'react';

export function SearchBar({ value, onChange, onClear }) {
  const inputRef = useRef(null);
  
  const handleClear = () => {
    onClear();
    inputRef.current?.focus();
  };
  
  return (
    <div className="w-full" style={{ maxWidth: '600px' }}>
      <div className="relative">
        <Search 
          className="absolute pointer-events-none" 
          style={{ 
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)',
            width: 'clamp(1rem, 2vw, 1.25rem)',
            height: 'clamp(1rem, 2vw, 1.25rem)'
          }}
        />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search skills, prompts, or keywords... (Press / to focus)"
          className="w-full rounded-xl border-2 transition-all"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border)',
            color: 'var(--text)',
            padding: 'clamp(0.75rem, 2vw, 1rem)',
            paddingLeft: 'clamp(2.5rem, 5vw, 3rem)',
            paddingRight: value ? 'clamp(2.5rem, 5vw, 3rem)' : 'clamp(0.75rem, 2vw, 1rem)',
            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
            outline: 'none'
          }}
        />
        {value && (
          <button
            onClick={handleClear}
            className="absolute rounded-md transition-colors hover:opacity-70"
            style={{
              right: '0.75rem',
              top: '50%',
              transform: 'translateY(-50%)',
              padding: '0.25rem'
            }}
            aria-label="Clear search"
          >
            <X style={{ color: 'var(--text-muted)', width: '1rem', height: '1rem' }} />
          </button>
        )}
      </div>
      <div 
        className="flex items-center justify-center flex-wrap"
        style={{ 
          marginTop: '0.5rem',
          color: 'var(--text-muted)',
          fontSize: 'clamp(0.7rem, 1.2vw, 0.8rem)',
          gap: '0.5rem'
        }}
      >
        <span>
          <kbd 
            className="font-mono rounded"
            style={{ 
              backgroundColor: 'var(--bg-surface)',
              padding: '0.125rem 0.5rem'
            }}
          >/</kbd> to focus
        </span>
        <span>*</span>
        <span>
          <kbd 
            className="font-mono rounded"
            style={{ 
              backgroundColor: 'var(--bg-surface)',
              padding: '0.125rem 0.5rem'
            }}
          >Esc</kbd> to clear
        </span>
      </div>
    </div>
  );
}
