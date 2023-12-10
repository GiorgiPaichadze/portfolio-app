import Link from 'next/link';
import AppContainer from './AppContainer';
import AppNavigation from './AppNavigation';
import AppAvatar from './AppAvatar';
import { getAuthSession } from '@/utils/auth';

const AppHeader: React.FC = async () => {
  const session = await getAuthSession();

  return (
    <header className="sticky top-0 py-6 h-24 z-50 bg-[#0F172A]" id="header">
      <AppContainer>
        <div className="h-full flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-200 flex-1">
            <Link href="/">Giorgi Paichadze</Link>
          </h1>
          <AppNavigation />
          {session && <AppAvatar />}
        </div>
      </AppContainer>
    </header>
  );
};

export default AppHeader;
