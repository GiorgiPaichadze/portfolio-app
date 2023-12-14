import { ExperienceCardProps } from '@/types/types';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import AppHighlightedTitle from './AppHighlightedTitle';

const AppExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => {
  return (
    <Link
      href={item.url}
      target="_black"
      className="flex gap-8 p-5 rounded hover:bg-slate-800/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] transition-shadow">
      <div className="flex items-center justify-center min-w-[48px] h-12  bg-white p-2 rounded-md">
        <Image src={item?.image} alt="" width={24} height={24} />
      </div>
      <div>
        <AppHighlightedTitle>{item.name}</AppHighlightedTitle>
        <p className="text-sm">{item.location}</p>
        <div className="mt-4 flex flex-col gap-2">
          <p>{item.position}</p>
          <p className="text-sm">{item.date}</p>
          <p className="text-sm text-slate-400">{item.desc}</p>
          <ul className="flex gap-2 flex-wrap">
            {item.stack.split(',').map((item, index) => (
              <li
                key={index}
                className="text-xs py-1 px-2 whitespace-nowrap bg-blue-950 text-teal-300 rounded">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default AppExperienceCard;
