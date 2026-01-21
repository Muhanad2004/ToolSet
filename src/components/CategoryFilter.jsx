import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export function CategoryFilter({ categories, selectedCategories, onToggleCategory, skillCounts }) {
  const allSelected = selectedCategories.length === 0;
  
  return (
    <div 
      className="border-b overflow-x-auto"
      style={{ 
        borderColor: 'var(--border)',
        padding: 'clamp(1rem, 3vw, 1.5rem) 0'
      }}
    >
      <div className="container">
        <div 
          className="flex flex-wrap"
          style={{ gap: 'clamp(0.5rem, 1.5vw, 0.75rem)' }}
        >
          {/* All button */}
          <motion.button
            onClick={() => onToggleCategory(null)}
            className="rounded-full whitespace-nowrap transition-all border-2 flex items-center font-medium"
            style={{
              backgroundColor: allSelected ? 'var(--accent-primary)' : 'var(--bg-surface)',
              borderColor: allSelected ? 'var(--accent-primary)' : 'var(--border)',
              color: allSelected ? 'white' : 'var(--text)',
              padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)',
              fontSize: 'clamp(0.75rem, 1.3vw, 0.875rem)',
              gap: 'clamp(0.25rem, 0.5vw, 0.5rem)'
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>All</span>
            <span style={{ opacity: 0.8 }}>({skillCounts.total})</span>
          </motion.button>
          
          {/* Category buttons */}
          {categories.map((category) => {
            const isSelected = selectedCategories.includes(category.id);
            const Icon = Icons[category.icon] || Icons.Folder;
            const count = skillCounts[category.id] || 0;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => onToggleCategory(category.id)}
                className="rounded-full whitespace-nowrap transition-all border-2 flex items-center font-medium"
                style={{
                  backgroundColor: isSelected ? category.color : 'var(--bg-surface)',
                  borderColor: isSelected ? category.color : 'var(--border)',
                  color: isSelected ? 'white' : 'var(--text)',
                  padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)',
                  fontSize: 'clamp(0.75rem, 1.3vw, 0.875rem)',
                  gap: 'clamp(0.25rem, 0.5vw, 0.5rem)'
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Icon style={{ width: 'clamp(0.875rem, 1.5vw, 1rem)', height: 'clamp(0.875rem, 1.5vw, 1rem)' }} />
                <span>{category.name}</span>
                <span style={{ opacity: 0.8 }}>({count})</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
