'use client';

import AppContainer from '@/components/AppContainer';
import AppSectionRow from '@/components/AppSectionRow';
import { AboutFormProps } from '@/types/types';
import { useForm, SubmitHandler } from 'react-hook-form';

const ManageAbout: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AboutFormProps>();

  const onSubmit: SubmitHandler<AboutFormProps> = (data) => console.log(data);

  return (
    <AppSectionRow>
      <AppContainer>
        <div className="mx-auto max-w-[468px]">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 items-end">
            <div className="w-full flex flex-col gap-4">
              <input
                placeholder="highlightedTitle"
                {...register('highlightedTitle', { required: true })}
                className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
              />
              {errors.highlightedTitle && (
                <span className="text-red-500 capitalize">highlightedTitle field is required</span>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              <input
                placeholder="title"
                {...register('title', { required: true })}
                className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
              />
              {errors.title && (
                <span className="text-red-500 capitalize">title field is required</span>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              <textarea
                placeholder="subtitle"
                {...register('subtitle', { required: true })}
                className="w-full px-4 py-2 h-36 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize resize-none"
              />
              {errors.subtitle && (
                <span className="text-red-500 capitalize">subtitle field is required</span>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              <input
                placeholder="cv"
                {...register('cv', { required: true })}
                className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
              />
              {errors.cv && <span className="text-red-500 capitalize">cv field is required</span>}
            </div>
            <div className="w-full flex flex-col gap-4">
              <input
                placeholder="contactSlug"
                {...register('contactSlug', { required: true })}
                className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
              />
              {errors.contactSlug && (
                <span className="text-red-500 capitalize">contactSlug field is required</span>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              <input
                placeholder="linkedIn"
                {...register('linkedIn', { required: true })}
                className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
              />
              {errors.linkedIn && (
                <span className="text-red-500 capitalize">linkedIn field is required</span>
              )}
            </div>
            <div className="w-full flex flex-col gap-4">
              <input
                placeholder="github"
                {...register('github', { required: true })}
                className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
              />
              {errors.github && (
                <span className="text-red-500 capitalize">github field is required</span>
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
