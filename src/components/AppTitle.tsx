type AppTitleProps = {
  children: string;
};

const AppTitle = ({ children }: AppTitleProps) => {
  return <h1 className="text-4xl font-bold text-slate-200">{children}</h1>;
};

export default AppTitle;
