import { SkillCard } from './SkillCard';
import { EmptyState } from './EmptyState';

export function SkillGrid({ skills, allSkills, categories, searchQuery }) {
  if (skills.length === 0) {
    return <EmptyState searchQuery={searchQuery} />;
  }
  
  return (
    <div className="container section-padding">
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        style={{ gap: 'clamp(1rem, 2.5vw, 1.5rem)' }}
      >
        {skills.map((skill) => (
          <div key={skill.id} id={skill.id} className="skill-card">
            <SkillCard 
              skill={skill}
              allSkills={allSkills}
              categories={categories}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
