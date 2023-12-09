import { useEffect, RefObject } from 'react';

const useOutsideClick = (ref: RefObject<HTMLElement>, cb: () => void): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        cb();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, cb]);
};

export default useOutsideClick;
