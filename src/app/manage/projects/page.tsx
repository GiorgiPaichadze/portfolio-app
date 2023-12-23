'use client';

import AppButton from '@/components/AppButton';
import AppContainer from '@/components/AppContainer';
import AppImageField from '@/components/AppImageField';
import AppInputField from '@/components/AppInputField';
import AppSectionRow from '@/components/AppSectionRow';
import AppTextareaField from '@/components/AppTextareaField';
import { useLoadState } from '@/hooks/useLoadState';
import { http } from '@/services/http';
import { ProjectsItem } from '@/types/types';
import { projectsFormSchema } from '@/validations/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const ManageProjects: React.FC = () => {
  const [experienceData, setExperienceData] = useState<ProjectsItem[]>([]);

  const [isEditable, setIsEditable] = useState(false);
  const [editableItemId, setEditableItemId] = useState(null);

  const { wrapLoad, isLoading } = useLoadState();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ProjectsItem>({
    resolver: zodResolver(projectsFormSchema),
    defaultValues: {},
  });

  const getData = async () => {
    try {
      const data = await http('/api/projects', 'GET');
      setExperienceData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onSubmit: SubmitHandler<ProjectsItem> = async (data) => {
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
          url: '',
          desc: '',
          stack: '',
        });
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const addData = async (data: ProjectsItem) => {
    try {
      await http('/api/projects', 'POST', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const updateData = async (id: any, data: ProjectsItem) => {
    try {
      await http(`/api/projects/${id}`, 'PATCH', data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const deleteData = async (id: any) => {
    try {
      await http(`/api/projects/${id}`, 'DELETE');
      getData();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateDataUi = (id: any, item: ProjectsItem | {}) => {
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

            <AppInputField placeholder="url" name="url" register={register}>
              {errors.url && <span className="text-red-500 capitalize">{errors.url.message}</span>}
            </AppInputField>

            <AppInputField placeholder="stack" name="stack" register={register}>
              {errors.stack && (
                <span className="text-red-500 capitalize">{errors.stack.message}</span>
              )}
            </AppInputField>

            <AppTextareaField placeholder="desc" name="desc" register={register}>
              {errors.desc && (
                <span className="text-red-500 capitalize">{errors.desc.message}</span>
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

                  <AppButton sm onClick={() => updateDataUi(item.id, item)} warning>
                    update
                  </AppButton>

                  <AppButton sm onClick={() => deleteData(item.id)} danger>
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

export default ManageProjects;
