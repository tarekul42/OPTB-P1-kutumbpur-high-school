import { type FC } from 'react';
import { useApp } from '@/app/providers/contexts/AppContext';

/**
 * SearchTrigger component to open the search modal.
 */
const SearchTrigger: FC = () => {
  const { openSearch } = useApp();

  return (
    <button
      onClick={openSearch}
      className="p-2.5 text-white hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 group"
      title="Search (Ctrl+K)"
    >
      <svg
        className="w-5 h-5 group-hover:text-accent-gold transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  );
};

export default SearchTrigger;
