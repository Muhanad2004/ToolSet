import { Sparkles } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { ThemeToggle } from './ThemeToggle';

export function Header({ searchValue, onSearchChange, onSearchClear }) {
  return (
    <header 
      className="section-padding border-b relative"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="container">
        <div
          className="flex flex-col items-center skill-card"
          style={{ gap: 'clamp(1.5rem, 4vw, 2.5rem)' }}
        >
          {/* Logo and Title */}
          <div className="flex items-center" style={{ gap: 'clamp(0.75rem, 2vw, 1rem)' }}>
            <Sparkles 
              className="flex-shrink-0"
              style={{ 
                color: 'var(--accent-primary)',
                width: 'clamp(2rem, 5vw, 2.5rem)',
                height: 'clamp(2rem, 5vw, 2.5rem)'
              }} 
            />
            <h1 
              className="font-bold text-gradient text-center"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}
            >
              OpenCode Skills Directory
            </h1>
          </div>
          
          {/* Tagline */}
          <p 
            className="text-center max-w-2xl"
            style={{ 
              color: 'var(--text-muted)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: 1.6
            }}
          >
            Discover 100+ AI coding capabilities across security, frontend, backend, AI & agents, and more
          </p>
          
          {/* Search Bar */}
          <div className="w-full flex justify-center">
            <SearchBar 
              value={searchValue}
              onChange={onSearchChange}
              onClear={onSearchClear}
            />
          </div>
        </div>
      </div>
      
      {/* Theme Toggle - Fixed Position */}
      <div 
        className="absolute"
        style={{ top: 'clamp(1rem, 2vw, 1.5rem)', right: 'clamp(1rem, 2vw, 1.5rem)' }}
      >
        <ThemeToggle />
      </div>
    </header>
  );
}
