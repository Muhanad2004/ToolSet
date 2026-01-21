import { Github, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer 
      className="border-t"
      style={{ 
        marginTop: 'clamp(3rem, 8vw, 5rem)',
        padding: 'clamp(1.5rem, 4vw, 2rem) 0',
        borderColor: 'var(--border)'
      }}
    >
      <div className="container">
        <div 
          className="flex flex-col items-center justify-between"
          style={{ gap: 'clamp(0.75rem, 2vw, 1rem)' }}
        >
          <div 
            className="flex items-center"
            style={{ 
              gap: 'clamp(0.375rem, 1vw, 0.5rem)',
              fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
              color: 'var(--text-muted)'
            }}
          >
            <span>Built with</span>
            <Heart 
              style={{ 
                width: 'clamp(0.875rem, 1.5vw, 1rem)',
                height: 'clamp(0.875rem, 1.5vw, 1rem)',
                color: 'var(--accent-primary)',
                fill: 'var(--accent-primary)'
              }} 
            />
            <span>by OpenCode</span>
          </div>
          <a
            href="https://github.com/Muhanad2004/ToolSet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition-colors hover:opacity-80"
            style={{ 
              gap: 'clamp(0.375rem, 1vw, 0.5rem)',
              fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
              color: 'var(--text)'
            }}
          >
            <Github style={{ width: 'clamp(0.875rem, 1.5vw, 1rem)', height: 'clamp(0.875rem, 1.5vw, 1rem)' }} />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
