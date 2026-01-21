import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { CopyButton } from './CopyButton';
import { RelatedSkills } from './RelatedSkills';
import * as Icons from 'lucide-react';

export function SkillCard({ skill, allSkills, categories }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const category = categories.find(c => c.name === skill.category);
  const Icon = category ? Icons[category.icon] : Icons.Folder;
  
  return (
    <motion.div
      layout
      className="rounded-xl border-2 overflow-hidden card-hover"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: isExpanded ? category?.color : 'var(--border)'
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Card Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left transition-colors"
        style={{ padding: 'clamp(1rem, 3vw, 1.5rem)' }}
      >
        {/* Category Badge */}
        <div style={{ marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)' }}>
          <span
            className="inline-flex items-center rounded-full font-semibold"
            style={{
              backgroundColor: category?.color,
              color: 'white',
              padding: 'clamp(0.25rem, 0.5vw, 0.375rem) clamp(0.5rem, 1.5vw, 0.75rem)',
              fontSize: 'clamp(0.65rem, 1.2vw, 0.75rem)',
              gap: 'clamp(0.25rem, 0.5vw, 0.375rem)'
            }}
          >
            {Icon && <Icon style={{ width: '0.75em', height: '0.75em' }} />}
            {skill.category}
          </span>
        </div>
        
        {/* Skill Name */}
        <h3 
          className="font-bold leading-tight"
          style={{ 
            color: 'var(--text)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            marginBottom: 'clamp(0.375rem, 1vw, 0.5rem)'
          }}
        >
          {skill.name}
        </h3>
        
        {/* Short Description */}
        <p 
          className={`leading-relaxed ${!isExpanded ? 'line-clamp-2' : ''}`}
          style={{ 
            color: 'var(--text-muted)',
            fontSize: 'clamp(0.8rem, 1.4vw, 0.9rem)',
            marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
          }}
        >
          {skill.shortDescription}
        </p>
        
        {/* Expand/Collapse Indicator */}
        <div 
          className="flex items-center font-medium"
          style={{ 
            color: 'var(--accent-primary)',
            fontSize: 'clamp(0.75rem, 1.3vw, 0.875rem)',
            gap: '0.375rem'
          }}
        >
          <span>{isExpanded ? 'Close' : 'View Details'}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown style={{ width: '1em', height: '1em' }} />
          </motion.div>
        </div>
      </button>
      
      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            <div 
              className="flex flex-col"
              style={{ 
                padding: 'clamp(1rem, 3vw, 1.5rem)',
                gap: 'clamp(1rem, 2.5vw, 1.25rem)'
              }}
            >
              {/* Full Description */}
              <p 
                className="leading-relaxed"
                style={{ 
                  color: 'var(--text)',
                  fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)'
                }}
              >
                {skill.fullDescription}
              </p>
              
              {/* Example Prompts */}
              {skill.examplePrompts?.length > 0 && (
                <div>
                  <h4 
                    className="font-semibold flex items-center"
                    style={{ 
                      color: 'var(--text)',
                      fontSize: 'clamp(0.8rem, 1.4vw, 0.9rem)',
                      marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)',
                      gap: '0.5rem'
                    }}
                  >
                    <span>Example Prompts:</span>
                  </h4>
                  <div className="flex flex-col" style={{ gap: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                    {skill.examplePrompts.map((prompt, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start rounded-lg border"
                        style={{
                          backgroundColor: 'var(--bg)',
                          borderColor: 'var(--border)',
                          padding: 'clamp(0.5rem, 1.5vw, 0.75rem)',
                          gap: '0.5rem'
                        }}
                      >
                        <p 
                          className="flex-1"
                          style={{ 
                            color: 'var(--text)',
                            fontSize: 'clamp(0.75rem, 1.3vw, 0.875rem)'
                          }}
                        >
                          "{prompt}"
                        </p>
                        <CopyButton text={prompt} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Related Skills */}
              <RelatedSkills 
                skillIds={skill.relatedSkills}
                allSkills={allSkills}
                onSkillClick={(id) => {
                  const element = document.getElementById(id);
                  element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              />
              
              {/* Tags */}
              {skill.tags?.length > 0 && (
                <div className="flex flex-wrap" style={{ gap: 'clamp(0.25rem, 0.75vw, 0.5rem)' }}>
                  {skill.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded"
                      style={{
                        backgroundColor: 'var(--bg)',
                        color: 'var(--text-muted)',
                        padding: 'clamp(0.2rem, 0.5vw, 0.25rem) clamp(0.4rem, 1vw, 0.5rem)',
                        fontSize: 'clamp(0.65rem, 1.1vw, 0.75rem)'
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
