import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BlogHeroGraphicProps {
  icon: LucideIcon;
  className?: string;
}

// Standing in for a photographed featured image: a brand-gradient card with a
// subtle grid (matching the RASP demo / SecureLintProtect hero treatment
// elsewhere on the site) and a large icon, rather than stock photography.
const BlogHeroGraphic: React.FC<BlogHeroGraphicProps> = ({ icon: Icon, className = '' }) => (
  <div
    className={`relative overflow-hidden flex items-center justify-center ${className}`}
    style={{ background: 'linear-gradient(135deg, #0A0F1F 0%, rgb(143,15,56) 100%)' }}
  >
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    />
    <Icon className="relative w-16 h-16 text-white/90" strokeWidth={1.5} />
  </div>
);

export default BlogHeroGraphic;
