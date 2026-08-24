import React from 'react';
import { List } from 'lucide-react';

export interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-4 h-4" style={{ color: 'rgb(217,47,97)' }} />
        <span className="font-bold text-gray-900">Table of Contents</span>
      </div>
      <ol className="space-y-3">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex gap-2 text-sm text-gray-600 hover:text-[rgb(217,47,97)] transition-colors leading-snug"
            >
              <span className="font-semibold flex-none" style={{ color: 'rgb(217,47,97)' }}>{i + 1}.</span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default TableOfContents;
