'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { menuData } from '@/assets/data/data';

const AppNavigation = () => {
  const pathname = usePathname();
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  return (
    <nav>
      <ul className="md:flex items-center justify-between hidden gap-4 lg:gap-6">
        {menuData.map((item) => (
          <li key={item.id}>
            <Link
              href={item.url}
              className={`uppercase text-xs text-slate-200 font-bold p-1 lg:p-2 relative transition-opacity hover:opacity-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-slate-200 after:scale-0 hover:after:scale-100 after:transition-transform ${
                pathname === item.url ? 'opacity-100 after:scale-100' : 'opacity-60'
              }`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <button className="w-6 h-6" onClick={() => setActiveMobileMenu((prev) => !prev)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        {activeMobileMenu && (
          <MobileMenu menuData={menuData} setActiveMobileMenu={setActiveMobileMenu} />
        )}
      </div>
    </nav>
  );
};

export default AppNavigation;
