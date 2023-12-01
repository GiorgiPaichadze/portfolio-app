import { ReactNode } from 'react';
import AppHeader from './AppHeader';
import LightCursor from './LightCursor';

type AppContainerProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: AppContainerProps) => {
  return (
    <div>
      <LightCursor />
      <AppHeader />
      {children}
    </div>
  );
};

export default AppLayout;
