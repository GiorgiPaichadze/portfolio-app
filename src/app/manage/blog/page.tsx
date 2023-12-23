'use client';

import AppButton from '@/components/AppButton';
import AppContainer from '@/components/AppContainer';
import AppImageField from '@/components/AppImageField';
import AppInputField from '@/components/AppInputField';
import AppSectionRow from '@/components/AppSectionRow';
import AppTextareaField from '@/components/AppTextareaField';
import { useLoadState } from '@/hooks/useLoadState';
import { http } from '@/services/http';
import { PostFormProps } from '@/types/types';
import { postFormSchema } from '@/validations/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const ManageBlog: React.FC = () => {
  const [experienceData, setExperienceData] = useState<PostFormProps[]>([]);

  const [isEditable, setIsEditable] = useState(false);
  const [editableItemId, setEditableItemId] = useState(null);

  const { wrapLoad, isLoading } = useLoadState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<PostFormProps>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {},
  });

  const getData = async () => {
    try {
      const data = await http('/api/blog', 'GET');
      setExperienceData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onSubmit: SubmitHandler<PostFormProps> = async (data) => {
    try {
      await wrapLoad(async () => {
        if (isEditable) {
          await updateData(editableItemId, data);
        } else {
          await addData(data);
        }
        setIsEditable(false);
        setEditableItemId(null);
        getData();

        reset({
          image: '',
          title: '',
          text: '',
        });
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const addData = async (data: PostFormProps) => {
    try {
      await http('/api/blog', 'POST', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const updateData = async (slug: any, data: PostFormProps) => {
    try {
      await http(`/api/blog/${slug}`, 'PATCH', data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const deleteData = async (slug: any) => {
    try {
      await http(`/api/blog/${slug}`, 'DELETE');
      getData();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateDataUi = (id: any, item: PostFormProps | {}) => {
    reset(item);
    setEditableItemId(id);
    setIsEditable(true);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppSectionRow>
      <AppContainer>
        <div className="mx-auto max-w-[468px]">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 items-end">
            <AppImageField name="image" register={register} setValue={setValue}>
              {errors.image && (
                <span className="text-red-500 capitalize">{errors.image.message}</span>
              )}
            </AppImageField>

            <AppInputField placeholder="title" name="title" register={register}>
              {errors.title && (
                <span className="text-red-500 capitalize">{errors.title.message}</span>
              )}
            </AppInputField>

            <AppTextareaField placeholder="text" name="text" register={register}>
              {errors.text && (
                <span className="text-red-500 capitalize">{errors.text.message}</span>
              )}
            </AppTextareaField>

            <AppButton success={!isEditable} warning={isEditable} disabled={isLoading}>
              {isEditable ? 'edit' : 'add'}
            </AppButton>
          </form>

          {experienceData && (
            <ul className="flex flex-col gap-4 my-4">
              {experienceData?.map((item) => (
                <li
                  key={item.id}
                  className="w-full flex items-center gap-4 relative px-4 py-2 h-12 bg-white rounded">
                  <span className="text-black flex-1">{item.title}</span>

                  <AppButton sm onClick={() => updateDataUi(item.slug, item)} warning>
                    update
                  </AppButton>

                  <AppButton sm onClick={() => deleteData(item.slug)} danger>
                    remove
                  </AppButton>
                </li>
              ))}
            </ul>
          )}
        </div>
      </AppContainer>
    </AppSectionRow>
  );
};

export default ManageBlog;
