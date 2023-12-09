const AppSubtitle: React.FC<{
  children: string;
}> = ({ children }) => {
  return <p className="text-slate-300 text-lg">{children}</p>;
};

export default AppSubtitle;
