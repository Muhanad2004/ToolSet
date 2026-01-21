import { motion, AnimatePresence } from 'framer-motion';
import { SkillCard } from './SkillCard';
import { EmptyState } from './EmptyState';
import { containerVariants, cardVariants } from '../utils/animations';

export function SkillGrid({ skills, allSkills, categories, searchQuery }) {
  if (skills.length === 0) {
    return <EmptyState searchQuery={searchQuery} />;
  }
  
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="container section-padding"
    >
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        style={{ gap: 'clamp(1rem, 2.5vw, 1.5rem)' }}
      >
        <AnimatePresence mode="popLayout">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              id={skill.id}
              variants={cardVariants}
              layout
            >
              <SkillCard 
                skill={skill}
                allSkills={allSkills}
                categories={categories}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
