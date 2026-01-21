import { motion } from 'framer-motion';

export function RelatedSkills({ skillIds, allSkills, onSkillClick }) {
  if (!skillIds || skillIds.length === 0) return null;
  
  const relatedSkills = skillIds
    .map(id => allSkills.find(s => s.id === id))
    .filter(Boolean)
    .slice(0, 5);
  
  if (relatedSkills.length === 0) return null;
  
  return (
    <div style={{ marginTop: 'clamp(0.75rem, 2vw, 1rem)' }}>
      <h4 
        className="font-semibold"
        style={{ 
          color: 'var(--text)', 
          fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
          marginBottom: 'clamp(0.375rem, 1vw, 0.5rem)'
        }}
      >
        Related Skills:
      </h4>
      <div className="flex flex-wrap" style={{ gap: 'clamp(0.375rem, 1vw, 0.5rem)' }}>
        {relatedSkills.map((skill) => (
          <motion.button
            key={skill.id}
            onClick={() => onSkillClick?.(skill.id)}
            className="rounded-full border-2 transition-all"
            style={{
              padding: 'clamp(0.25rem, 0.75vw, 0.375rem) clamp(0.5rem, 1.5vw, 0.75rem)',
              fontSize: 'clamp(0.625rem, 1.25vw, 0.75rem)',
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--accent-primary)',
              color: 'var(--accent-primary)'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'var(--accent-primary)',
              color: 'white'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {skill.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
