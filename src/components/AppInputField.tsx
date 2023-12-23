import { forwardRef, InputHTMLAttributes } from 'react';

interface AppInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  register: any;
  name: string;
  type?: string;
  children: React.ReactNode;
}

const AppInputField = forwardRef<HTMLInputElement, AppInputFieldProps>(function AppInputField(
  { placeholder, register, name, type = 'text', children, ...props },
  ref,
) {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="relative">
        <input
          id={name}
          type={type}
          ref={ref}
          name={name}
          placeholder={placeholder}
          {...register(name)}
          className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize peer placeholder:opacity-0"
          {...props}
        />
        <label
          htmlFor={name}
          className="absolute -top-6 -left-0  text-xs text-teal-300 cursor-text peer-focus:text-xs peer-focus:-top-6
          peer-focus:-left-0 transition-all peer-focus:text-teal-300 peer-placeholder-shown:text-black capitalize peer-placeholder-shown:left-4 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base">
          {placeholder}
        </label>
      </div>

      {children}
    </div>
  );
});

AppInputField.displayName = 'AppInputField';

export default AppInputField;
