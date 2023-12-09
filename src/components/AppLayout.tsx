import AppHeader from './AppHeader';
import LightCursor from './LightCursor';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <LightCursor />
      <AppHeader />
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
