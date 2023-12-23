'use client';
import { SignInProps } from '@/types/types';
import { signInFormSchema } from '@/validations/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import AppLoader from './AppLoader';
import { useLoadState } from '@/hooks/useLoadState';
import AppInputField from './AppInputField';
import AppButton from './AppButton';

const AppSignInForm: React.FC = () => {
  const router = useRouter();

  const { status } = useSession();

  const { wrapLoad, isLoading } = useLoadState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInProps>({
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit: SubmitHandler<SignInProps> = async (data) => {
    await wrapLoad(async () => {
      const signInData = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (signInData?.ok) {
        router.push('/');
      }
    });
  };

  if (status === 'loading') {
    return <AppLoader />;
  }

  if (status === 'authenticated') {
    router.push('/');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 items-start ">
      <AppInputField placeholder="email" name="email" register={register}>
        {errors.email && <span className="text-red-500 capitalize">{errors.email.message}</span>}
      </AppInputField>
      <AppInputField placeholder="password" name="password" type="password" register={register}>
        {errors.password && (
          <span className="text-red-500 capitalize">{errors.password.message}</span>
        )}
      </AppInputField>

      <div className="w-full flex items-center justify-center">
        <AppButton primary disabled={isLoading}>
          <span>Sign In</span>
        </AppButton>
      </div>
    </form>
  );
};

export default AppSignInForm;
