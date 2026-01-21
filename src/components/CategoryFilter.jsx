import { 
  Shield, Layout, Server, Brain, Cloud, 
  TrendingUp, Database, Smartphone, CheckSquare, Gamepad2, Folder 
} from 'lucide-react';

// Icon map - only imports the icons we need
const iconMap = {
  Shield,
  Layout,
  Server,
  Brain,
  Cloud,
  TrendingUp,
  Database,
  Smartphone,
  CheckSquare,
  Gamepad2,
  Folder
};

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
          <button
            onClick={() => onToggleCategory(null)}
            className="category-btn rounded-full whitespace-nowrap border-2 flex items-center font-medium"
            style={{
              backgroundColor: allSelected ? 'var(--accent-primary)' : 'var(--bg-surface)',
              borderColor: allSelected ? 'var(--accent-primary)' : 'var(--border)',
              color: allSelected ? 'white' : 'var(--text)',
              padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)',
              fontSize: 'clamp(0.75rem, 1.3vw, 0.875rem)',
              gap: 'clamp(0.25rem, 0.5vw, 0.5rem)'
            }}
          >
            <span>All</span>
            <span style={{ opacity: 0.8 }}>({skillCounts.total})</span>
          </button>
          
          {/* Category buttons */}
          {categories.map((category) => {
            const isSelected = selectedCategories.includes(category.id);
            const Icon = iconMap[category.icon] || Folder;
            const count = skillCounts[category.id] || 0;
            
            return (
              <button
                key={category.id}
                onClick={() => onToggleCategory(category.id)}
                className="category-btn rounded-full whitespace-nowrap border-2 flex items-center font-medium"
                style={{
                  backgroundColor: isSelected ? category.color : 'var(--bg-surface)',
                  borderColor: isSelected ? category.color : 'var(--border)',
                  color: isSelected ? 'white' : 'var(--text)',
                  padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)',
                  fontSize: 'clamp(0.75rem, 1.3vw, 0.875rem)',
                  gap: 'clamp(0.25rem, 0.5vw, 0.5rem)'
                }}
              >
                <Icon style={{ width: 'clamp(0.875rem, 1.5vw, 1rem)', height: 'clamp(0.875rem, 1.5vw, 1rem)' }} />
                <span>{category.name}</span>
                <span style={{ opacity: 0.8 }}>({count})</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
