import { HighlightedTitleProps } from '@/types/types';

const AppHighlightedTitle: React.FC<HighlightedTitleProps> = ({ children, nowrap = false }) => {
  return (
    <span className={`text-teal-300 text-lg md:w-9/12 ${nowrap ? 'whitespace-nowrap' : ''}`}>
      {children}
    </span>
  );
};

export default AppHighlightedTitle;
