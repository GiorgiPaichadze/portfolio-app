const AppSectionRow: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div className="py-20 md:py-24">{children}</div>;
};

export default AppSectionRow;
