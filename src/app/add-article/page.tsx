'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import AppContainer from '@/components/AppContainer';
import { ArticleFormProps } from '@/types/types';
import AppSectionRow from '@/components/AppSectionRow';

const AddArticle: React.FC = () => {
  const router = useRouter();
  const admin = true;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleFormProps>();

  const onSubmit: SubmitHandler<ArticleFormProps> = (data) => console.log(data);

  useEffect(() => {
    if (!admin) {
      router.push('/');
    }
  });

  return (
    <AppSectionRow>
      <AppContainer>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 items-start ">
          <div className="w-full flex flex-col gap-4">
            <input
              placeholder="title"
              {...register('title', { required: true })}
              className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
            />
            {errors.title && <span className="text-red-500">Email field is required</span>}
          </div>
          <div className="w-full flex flex-col gap-4">
            <input
              placeholder="text"
              {...register('text', { required: true })}
              className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
            />
            {errors.text && <span className="text-red-500">Password field is required</span>}
          </div>

          <div className="w-full flex items-center justify-end">
            <button
              type="submit"
              className="px-8 py-4 bg-blue-950 text-teal-300 text-sm rounded-lg flex gap-4 items-center justify-center hover:text-teal-400 transition-colors">
              <span>Create</span>
            </button>
          </div>
        </form>
      </AppContainer>
    </AppSectionRow>
  );
};

export default AddArticle;
