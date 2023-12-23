interface AppButtonProps {
  children: React.ReactNode;
  sm?: boolean;
  primary?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
  styles?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const AppButton: React.FC<AppButtonProps> = ({
  children,
  sm,
  primary,
  success,
  danger,
  warning,
  styles,
  disabled,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="submit"
      className={`${sm ? 'px-2 py-1' : 'px-4 py-2'} ${primary ? 'bg-blue-950 text-teal-300' : ''} ${
        success ? 'bg-green-500 text-black' : ''
      } ${danger ? 'bg-red-500 text-black' : ''} ${
        warning ? 'bg-yellow-500 text-black' : ''
      } text-sm rounded-lg flex items-center justify-center gap-2 ${styles} disabled:opacity-50`}>
      {children}
    </button>
  );
};

export default AppButton;
