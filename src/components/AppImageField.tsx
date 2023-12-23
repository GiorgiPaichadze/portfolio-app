import { forwardRef, InputHTMLAttributes } from 'react';
import { UseFormSetValue } from 'react-hook-form';

interface AppImageFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  register: any;
  name: string;
  children: React.ReactNode;
  setValue: UseFormSetValue<any>;
}

const AppImageField = forwardRef<HTMLInputElement, AppImageFieldProps>(function AppImageField(
  { register, name, children, setValue, ...props },
  ref,
) {
  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const body = new FormData();
    const file = e.target.files?.[0];

    if (!file) {
      console.error('No file selected');
      return;
    }

    body.append('file', file);

    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINAR_UPLOAD_PRESET;

    if (uploadPreset) {
      body.append('upload_preset', uploadPreset);
    } else {
      console.error('UPLOAD_PRESET environment variable is not defined');
    }
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: body,
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const imgData: { url: string } = await response.json();
      console.log(imgData);

      setValue(name, imgData.url);
    } catch (error) {
      console.error('Error uploading image');
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <input
        id="file-field"
        type="file"
        ref={ref}
        name={name}
        {...register(name)}
        className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
        onChange={handleChangeFile}
        {...props}
        hidden
      />
      <label htmlFor="file-field" className="cursor-pointer">
        Image
      </label>
      {children}
    </div>
  );
});

AppImageField.displayName = 'AppImageField';

export default AppImageField;
