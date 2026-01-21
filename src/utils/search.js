// Weighted search scoring
const WEIGHTS = {
  name: 10,
  shortDescription: 5,
  tags: 7,
  examplePrompts: 3,
  keywords: 6,
  category: 4
};

function fuzzyMatch(text, query) {
  if (!text || !query) return 0;
  
  const textLower = text.toLowerCase();
  const queryLower = query.toLowerCase();
  
  // Exact match gets highest score
  if (textLower === queryLower) return 100;
  
  // Starts with gets high score
  if (textLower.startsWith(queryLower)) return 80;
  
  // Contains gets medium score
  if (textLower.includes(queryLower)) return 50;
  
  // Word boundary match
  const words = textLower.split(/\s+/);
  for (const word of words) {
    if (word.startsWith(queryLower)) return 40;
    if (word.includes(queryLower)) return 20;
  }
  
  return 0;
}

export function searchSkills(skills, query) {
  if (!query || query.trim() === '') {
    return skills;
  }
  
  const trimmedQuery = query.trim();
  const queryTerms = trimmedQuery.toLowerCase().split(/\s+/);
  
  const scoredSkills = skills.map(skill => {
    let score = 0;
    
    // Search each field with weights
    score += fuzzyMatch(skill.name, trimmedQuery) * WEIGHTS.name;
    score += fuzzyMatch(skill.shortDescription, trimmedQuery) * WEIGHTS.shortDescription;
    score += fuzzyMatch(skill.category, trimmedQuery) * WEIGHTS.category;
    
    // Tags matching
    if (skill.tags) {
      const tagScore = skill.tags.reduce((acc, tag) => {
        return acc + fuzzyMatch(tag, trimmedQuery);
      }, 0);
      score += tagScore * WEIGHTS.tags;
    }
    
    // Keywords matching
    if (skill.keywords) {
      const keywordScore = skill.keywords.reduce((acc, keyword) => {
        return acc + fuzzyMatch(keyword, trimmedQuery);
      }, 0);
      score += keywordScore * WEIGHTS.keywords;
    }
    
    // Example prompts matching
    if (skill.examplePrompts) {
      const promptScore = skill.examplePrompts.reduce((acc, prompt) => {
        return acc + fuzzyMatch(prompt, trimmedQuery);
      }, 0);
      score += promptScore * WEIGHTS.examplePrompts;
    }
    
    // Multi-word query bonus (all terms must match somewhere)
    if (queryTerms.length > 1) {
      const allFieldsText = [
        skill.name,
        skill.shortDescription,
        skill.fullDescription,
        ...(skill.tags || []),
        ...(skill.keywords || [])
      ].join(' ').toLowerCase();
      
      const allTermsMatch = queryTerms.every(term => allFieldsText.includes(term));
      if (allTermsMatch) {
        score += 20;
      }
    }
    
    return { ...skill, searchScore: score };
  });
  
  // Filter out zero scores and sort by score
  return scoredSkills
    .filter(skill => skill.searchScore > 0)
    .sort((a, b) => b.searchScore - a.searchScore);
}
