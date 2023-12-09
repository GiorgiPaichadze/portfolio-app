'use client';

import { SignInProps } from '@/types/types';
import { useForm, SubmitHandler } from 'react-hook-form';

const AppSignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInProps>();

  const onSubmit: SubmitHandler<SignInProps> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 items-start ">
      <div className="w-full flex flex-col gap-4">
        <input
          placeholder="email"
          {...register('email', { required: true })}
          className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
        />
        {errors.email && <span className="text-red-500">Email field is required</span>}
      </div>
      <div className="w-full flex flex-col gap-4">
        <input
          placeholder="password"
          {...register('password', { required: true })}
          className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
        />
        {errors.password && <span className="text-red-500">Password field is required</span>}
      </div>

      <div className="w-full flex items-center justify-center">
        <button
          type="submit"
          className="px-8 py-4 bg-blue-950 text-teal-300 text-sm rounded-lg flex gap-4 items-center justify-center hover:text-teal-400 transition-colors">
          <span>Sign In</span>
        </button>
      </div>
    </form>
  );
};

export default AppSignInForm;
