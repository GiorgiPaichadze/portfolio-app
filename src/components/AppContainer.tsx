import { ReactNode } from 'react';

const AppContainer: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <div className="max-w-[1056px] my-0 mx-auto px-4 h-full">{children}</div>;
};

export default AppContainer;
