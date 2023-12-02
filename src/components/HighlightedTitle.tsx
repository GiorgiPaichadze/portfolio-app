type HighlightedTitleProps = {
  children: string;
  nowrap?: boolean;
};

const HighlightedTitle = ({ children, nowrap = false }: HighlightedTitleProps) => {
  return (
    <span className={`text-teal-300 text-lg md:w-9/12 ${nowrap ? 'whitespace-nowrap' : ''}`}>
      {children}
    </span>
  );
};

export default HighlightedTitle;
