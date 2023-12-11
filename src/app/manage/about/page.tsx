'use client';

import AppContainer from '@/components/AppContainer';
import AppSectionRow from '@/components/AppSectionRow';
import { http } from '@/services/http';
import { AboutFormProps } from '@/types/types';
import { aboutFormSchema } from '@/validations/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const ManageAbout: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutFormProps | {}>({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AboutFormProps>({
    resolver: zodResolver(aboutFormSchema),
    defaultValues: aboutData || {},
  });

  const getData = async () => {
    try {
      const data = await http('/api/about', 'GET');
      setAboutData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onSubmit: SubmitHandler<AboutFormProps> = async (data) => {
    try {
      await http('/api/about', 'POST', data);
      await getData();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (aboutData) {
      reset(aboutData);
    }
  }, [aboutData, reset]);

  return (
    <AppSectionRow>
      <AppContainer>
        <div className="mx-auto max-w-[468px]">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 items-end">
            <div className="w-full flex flex-col gap-4">
              <input
                placeholder="highlightedTitle"
                {...register('highlightedTitle')}
                className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
              />
              {errors.highlightedTitle && (
                <span className="text-red-500 capitalize">{errors.highlightedTitle.message}</span>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              <input
                placeholder="title"
                {...register('title')}
                className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
              />
              {errors.title && (
                <span className="text-red-500 capitalize">{errors.title.message}</span>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              <textarea
                placeholder="subtitle"
                {...register('subtitle')}
                className="w-full px-4 py-2 h-36 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize resize-none"
              />
              {errors.subtitle && (
                <span className="text-red-500 capitalize">{errors.subtitle.message}</span>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              <input
                placeholder="cv"
                {...register('cv')}
                className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
              />
              {errors.cv && <span className="text-red-500 capitalize">{errors.cv.message}</span>}
            </div>
            <div className="w-full flex flex-col gap-4">
              <input
                placeholder="contactSlug"
                {...register('contactSlug')}
                className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
              />
              {errors.contactSlug && (
                <span className="text-red-500 capitalize">{errors.contactSlug.message}</span>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              <input
                placeholder="linkedIn"
                {...register('linkedIn')}
                className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
              />
              {errors.linkedIn && (
                <span className="text-red-500 capitalize">{errors.linkedIn.message}</span>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              <input
                placeholder="github"
                {...register('github')}
                className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
              />
              {errors.github && (
                <span className="text-red-500 capitalize">{errors.github.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-yellow-500 text-black text-sm rounded-lg flex gap-4 items-center justify-start">
              <span>Update</span>
            </button>
          </form>
        </div>
      </AppContainer>
    </AppSectionRow>
  );
};

export default ManageAbout;
