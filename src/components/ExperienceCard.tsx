import { artmediaSkillsData } from '@/assets/data/data';
import HighlightedTitle from './HighlightedTitle';

const ExperienceCard = () => {
  return (
    <div className="flex gap-8">
      <div className="flex items-center justify-center min-w-[48px] h-12  bg-white p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 83 100">
          <path
            fill="#030303"
            d="M82.924 39.042V100h-41.55c-6.183 0-11.883-.557-16.9-1.647-5.041-1.09-9.45-2.888-13.098-5.371a24.864 24.864 0 0 1-8.437-9.729C.989 79.275 0 74.31 0 68.533c0-5.548 1.14-10.312 3.395-14.188 2.255-3.851 5.295-6.993 9.07-9.273 3.775-2.28 8.133-3.978 12.997-4.99 4.84-1.014 9.957-1.546 15.177-1.546 3.521 0 6.688.152 9.399.456 2.635.278 4.814.658 6.46 1.114v-2.33c0-4.51-1.393-8.184-4.154-10.92-2.686-2.66-7.398-4.054-14.036-4.105h-.152v-.354c.126-8.69-4.56-16.62-12.263-20.725l-.887-.456.507-.076c1.95-.253 4.003-.481 6.055-.684a96.485 96.485 0 0 1 9.4-.456c8.006 0 14.77.912 20.116 2.71 5.346 1.8 9.704 4.435 12.922 7.83 3.217 3.37 5.548 7.55 6.866 12.364 1.393 4.813 2.052 10.235 2.052 16.138Z"
          />
          <path
            fill="#030303"
            d="M21.358 22.016c0 3.598-2.964 6.537-6.587 6.537-3.623 0-6.587-2.939-6.587-6.537 0-3.597 2.964-6.536 6.587-6.536 3.648 0 6.587 2.939 6.587 6.536Z"
          />
        </svg>
      </div>
      <div>
        <HighlightedTitle>Artmedia</HighlightedTitle>
        <p className="text-sm">Tbilisi</p>
        <div className="mt-4 flex flex-col gap-2">
          <p>Frontend Developer</p>
          <p className="text-sm">November 2021 - Present</p>
          <p className="text-sm text-slate-400">
            Developed scalable and responsive web applications, collaborating closely with designers
            and back-end developers to implement UI designs and integrate front-end code with
            server-side logic. Worked in an Agile environment, participating in daily stand-ups and
            sprint planning sessions. Conducted regular maintenance and updates to existing
            websites.
          </p>
          <ul className="flex gap-2 flex-wrap">
            {artmediaSkillsData.map((item) => (
              <li
                key={item.id}
                className="text-xs py-1 px-2 whitespace-nowrap bg-blue-950 text-teal-300 rounded">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
