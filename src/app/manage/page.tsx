'use client';

import AppButton from '@/components/AppButton';
import AppContainer from '@/components/AppContainer';
import AppInputField from '@/components/AppInputField';
import AppSectionRow from '@/components/AppSectionRow';
import AppTextareaField from '@/components/AppTextareaField';
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
    console.log(data);

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
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 items-end">
            <AppInputField
              placeholder="highlightedTitle"
              name="highlightedTitle"
              register={register}>
              {errors.highlightedTitle && (
                <span className="text-red-500 capitalize">{errors.highlightedTitle.message}</span>
              )}
            </AppInputField>
            <AppInputField placeholder="title" name="title" register={register}>
              {errors.title && (
                <span className="text-red-500 capitalize">{errors.title.message}</span>
              )}
            </AppInputField>
            <AppTextareaField placeholder="subtitle" name="subtitle" register={register}>
              {errors.subtitle && (
                <span className="text-red-500 capitalize">{errors.subtitle.message}</span>
              )}
            </AppTextareaField>
            <AppInputField placeholder="cv" name="cv" register={register}>
              {errors.cv && <span className="text-red-500 capitalize">{errors.cv.message}</span>}
            </AppInputField>
            <AppInputField placeholder="linkedIn" name="linkedIn" register={register}>
              {errors.linkedIn && (
                <span className="text-red-500 capitalize">{errors.linkedIn.message}</span>
              )}
            </AppInputField>
            <AppInputField placeholder="github" name="github" register={register}>
              {errors.github && (
                <span className="text-red-500 capitalize">{errors.github.message}</span>
              )}
            </AppInputField>
            <AppInputField placeholder="email" name="email" register={register}>
              {errors.email && (
                <span className="text-red-500 capitalize">{errors.email.message}</span>
              )}
            </AppInputField>

            <AppButton warning>
              <span>Update</span>
            </AppButton>
          </form>
        </div>
      </AppContainer>
    </AppSectionRow>
  );
};

export default ManageAbout;
