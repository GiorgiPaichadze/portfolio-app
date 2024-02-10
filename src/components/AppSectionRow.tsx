const AppSectionRow: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div className="py-14 md:py-16">{children}</div>;
};

export default AppSectionRow;
