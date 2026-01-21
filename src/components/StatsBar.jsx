import { motion } from 'framer-motion';

export function StatsBar({ totalSkills, categories, selectedCategories }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b"
      style={{ 
        borderColor: 'var(--border)',
        padding: 'clamp(1rem, 3vw, 1.5rem) 0'
      }}
    >
      <div className="container">
        <div 
          className="flex flex-wrap items-center"
          style={{ gap: 'clamp(1rem, 3vw, 2rem)' }}
        >
          <div className="flex items-center" style={{ gap: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
            <span 
              className="font-bold text-gradient"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
            >
              {totalSkills}
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
              Skills
            </span>
          </div>
          
          <span style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>*</span>
          
          <div className="flex items-center" style={{ gap: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
            <span 
              className="font-semibold"
              style={{ color: 'var(--text)', fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}
            >
              {categories.length}
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
              Categories
            </span>
          </div>
          
          {selectedCategories.length > 0 && (
            <>
              <span style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>*</span>
              <span style={{ color: 'var(--accent-primary)', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                Filtered
              </span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
