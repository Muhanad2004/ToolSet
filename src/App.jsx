import { useState, useMemo, useRef } from 'react';
import { Header } from './components/Header';
import { StatsBar } from './components/StatsBar';
import { CategoryFilter } from './components/CategoryFilter';
import { SkillGrid } from './components/SkillGrid';
import { Footer } from './components/Footer';
import { useKeyboardNav } from './hooks/useKeyboardNav';
import { skills } from './data/skills';
import { categories } from './data/categories';
import { searchSkills } from './utils/search';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const searchInputRef = useRef(null);
  
  // Filter and search skills
  const filteredSkills = useMemo(() => {
    let result = skills;
    
    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter(skill => {
        const category = categories.find(c => c.name === skill.category);
        return category && selectedCategories.includes(category.id);
      });
    }
    
    // Search
    if (searchQuery.trim()) {
      result = searchSkills(result, searchQuery);
    }
    
    return result;
  }, [searchQuery, selectedCategories]);
  
  // Calculate skill counts per category
  const skillCounts = useMemo(() => {
    const counts = { total: skills.length };
    
    categories.forEach(category => {
      counts[category.id] = skills.filter(
        skill => skill.category === category.name
      ).length;
    });
    
    return counts;
  }, []);
  
  // Category selection handler - single select mode
  const handleToggleCategory = (categoryId) => {
    if (categoryId === null) {
      // "All" clicked - clear selection
      setSelectedCategories([]);
    } else {
      // Single category clicked - select only this one (or deselect if already selected)
      setSelectedCategories(prev => {
        if (prev.length === 1 && prev[0] === categoryId) {
          // Clicking the same category again - deselect (show all)
          return [];
        } else {
          // Select only this category
          return [categoryId];
        }
      });
    }
  };
  
  // Search handlers
  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };
  
  const handleSearchClear = () => {
    setSearchQuery('');
  };
  
  // Keyboard navigation
  useKeyboardNav({
    onSearchFocus: () => {
      const searchInput = document.querySelector('input[type="text"]');
      searchInput?.focus();
    },
    onEscape: () => {
      setSearchQuery('');
      const searchInput = document.querySelector('input[type="text"]');
      searchInput?.blur();
    }
  });
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <Header
        searchValue={searchQuery}
        onSearchChange={handleSearchChange}
        onSearchClear={handleSearchClear}
      />
      
      <StatsBar
        totalSkills={filteredSkills.length}
        categories={categories}
        selectedCategories={selectedCategories}
      />
      
      <CategoryFilter
        categories={categories}
        selectedCategories={selectedCategories}
        onToggleCategory={handleToggleCategory}
        skillCounts={skillCounts}
      />
      
      <SkillGrid
        skills={filteredSkills}
        allSkills={skills}
        categories={categories}
        searchQuery={searchQuery}
      />
      
      <Footer />
    </div>
  );
}

export default App;
