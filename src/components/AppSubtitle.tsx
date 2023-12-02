type AppSubtitleProps = {
  children: string;
};

const AppSubtitle = ({ children }: AppSubtitleProps) => {
  return <p className="text-slate-300 text-lg">{children}</p>;
};

export default AppSubtitle;
