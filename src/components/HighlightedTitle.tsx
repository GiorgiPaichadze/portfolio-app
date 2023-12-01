type HighlightedTitleProps = {
  children: String;
};

const HighlightedTitle = ({ children }: HighlightedTitleProps) => {
  return <span className="text-teal-300 text-lg md:w-9/12 whitespace-nowrap">{children}</span>;
};

export default HighlightedTitle;
