import Link from 'next/link';
import AppContainer from './AppContainer';
import AppNavigation from './AppNavigation';

const AppHeader = () => {
  return (
    <header className="sticky top-0 py-6 h-24 z-50" id="header">
      <AppContainer>
        <div className="h-full flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-200">
            <Link href="/">Giorgi Paichadze</Link>
            {/* <Link href="/" className="flex w-20 h-20">
              <AppLogo />
            </Link> */}
          </h1>
          <AppNavigation />
        </div>
      </AppContainer>
    </header>
  );
};

export default AppHeader;
