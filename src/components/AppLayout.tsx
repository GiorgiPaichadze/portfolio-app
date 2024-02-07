import AppHeader from './AppHeader';
// import LightCursor from './LightCursor';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {/* <LightCursor /> */}
      <AppHeader />
      <div>{children}</div>
    </>
  );
};

export default AppLayout;
