import Link from 'next/link';

interface AppLinkButtonProps {
  children: React.ReactNode;
  sm?: boolean;
  primary?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
  href: string;
  rel?: string;
  target?: string;
}

const AppLinkButton: React.FC<AppLinkButtonProps> = ({
  children,
  href,
  sm,
  primary,
  success,
  danger,
  warning,
  rel,
  target,
}) => {
  return (
    <Link
      href={href}
      rel={rel}
      target={target}
      className={`${sm ? 'px-2 py-1' : 'px-4 py-2'} ${primary ? 'bg-blue-950 text-teal-300' : ''} ${
        success ? 'bg-green-500 text-black' : ''
      } ${danger ? 'bg-red-500 text-black' : ''} ${
        warning ? 'bg-yellow-500 text-black' : ''
      } text-sm rounded-lg inline-flex items-center justify-center gap-2 w-fit`}>
      {children}
    </Link>
  );
};

export default AppLinkButton;
