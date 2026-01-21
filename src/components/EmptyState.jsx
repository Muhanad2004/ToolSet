import { SearchX } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyState({ searchQuery }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center"
      style={{ 
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 3vw, 1.5rem)'
      }}
    >
      <SearchX 
        style={{ 
          color: 'var(--text-muted)',
          width: 'clamp(3rem, 6vw, 4rem)',
          height: 'clamp(3rem, 6vw, 4rem)',
          marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
        }} 
      />
      <h3 
        className="font-semibold"
        style={{ 
          color: 'var(--text)',
          fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
          marginBottom: 'clamp(0.375rem, 1vw, 0.5rem)'
        }}
      >
        No skills found
      </h3>
      <p 
        className="text-center max-w-md" 
        style={{ 
          color: 'var(--text-muted)',
          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)'
        }}
      >
        {searchQuery 
          ? `No skills match "${searchQuery}". Try different keywords or clear your search.`
          : 'No skills match your current filters. Try adjusting your category selection.'}
      </p>
    </motion.div>
  );
}
