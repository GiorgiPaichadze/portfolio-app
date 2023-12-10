'use client';
import { SignInProps } from '@/types/types';
import { signInFormSchema } from '@/validations/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import AppLoader from './AppLoader';

const AppSignInForm: React.FC = () => {
  const router = useRouter();

  const { status } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInProps>({
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit: SubmitHandler<SignInProps> = async (data) => {
    const signInData = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (signInData?.ok) {
      router.push('/');
    }
  };

  if (status === 'loading') {
    return <AppLoader />;
  }

  if (status === 'authenticated') {
    router.push('/');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 items-start ">
      <div className="w-full flex flex-col gap-4">
        <input
          type="text"
          placeholder="email"
          {...register('email')}
          className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>
      <div className="w-full flex flex-col gap-4">
        <input
          type="password"
          placeholder="password"
          {...register('password')}
          className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
        />
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
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
