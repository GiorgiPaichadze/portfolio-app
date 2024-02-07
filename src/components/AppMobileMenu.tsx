import { MenuProps } from '@/types/types';
import AppContainer from './AppContainer';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

const AppMobileMenu: React.FC<{
  menuData: MenuProps[];
  setActiveMobileMenu: Dispatch<SetStateAction<boolean>>;
}> = ({ menuData, setActiveMobileMenu }) => {
  return (
    <div className="absolute left-0 right-0 bottom-0 top-24 h-[calc(100vh-6rem)] bg-[#0F172A]">
      <AppContainer>
        <ul className="flex items-center flex-col py-12 gap-6 h-full">
          {menuData.map((item) => (
            <li key={item.id}>
              <Link
                href={item.url}
                className="capitalize text-2xl"
                onClick={() => setActiveMobileMenu(false)}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </AppContainer>
    </div>
  );
};

export default AppMobileMenu;
