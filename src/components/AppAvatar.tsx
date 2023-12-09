'use client';

import { useRef, useState } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';
import Link from 'next/link';
import { drawerData } from '@/assets/data/data';

const AppAvatar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLElement | null>(null);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useOutsideClick(drawerRef, onClose);

  return (
    <div className="ml-6">
      <div
        className="w-10 h-10 border border-teal-300 rounded-full p-2 cursor-pointer"
        onClick={showDrawer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
      {open && (
        <div
          className="fixed w-full right-0 top-0 bottom-0 md:w-1/4 bg-slate-200 p-12 h-screen"
          ref={drawerRef as React.RefObject<HTMLDivElement>}>
          <div className="absolute top-4 left-4 text-black">
            <div className="w-6 h-6 cursor-pointer" onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div className=" overflow-auto text-black h-full">
            <ul className="flex flex-col gap-4 py-10">
              {drawerData.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className=" capitalize text-lg text-blue-950"
                    onClick={onClose}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppAvatar;
