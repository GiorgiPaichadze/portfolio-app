import { ReactNode } from 'react';

type AppContainerProps = {
  children: ReactNode;
};

const AppContainer = ({ children }: AppContainerProps) => {
  return <div className="max-w-[1056px] my-0 mx-auto px-4 h-full">{children}</div>;
};

export default AppContainer;
