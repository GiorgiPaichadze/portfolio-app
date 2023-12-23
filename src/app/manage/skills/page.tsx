'use client';

import AppButton from '@/components/AppButton';
import AppContainer from '@/components/AppContainer';
import AppInputField from '@/components/AppInputField';
import AppSectionRow from '@/components/AppSectionRow';
import { useLoadState } from '@/hooks/useLoadState';
import { http } from '@/services/http';
import { SkillItem } from '@/types/types';
import { skillsFormSchema } from '@/validations/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  skills: string;
}

const ManageSkills: React.FC = () => {
  const [skills, setSkills] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [editableItemId, setEditableItemId] = useState(null);
  const CategoryRef = useRef<HTMLSelectElement | null>(null);

  const { wrapLoad, isLoading } = useLoadState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(skillsFormSchema),
    defaultValues: { skills: '' },
  });

  const getData = async () => {
    try {
      const data = await http(`/api/skills/${CategoryRef.current?.value}`, 'GET');
      setSkills(data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      if (isEditable) {
        updateData(editableItemId, data);
      } else {
        await addData(data);
      }
      reset();
      getData();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const addData = async (data: FormData) => {
    try {
      await http('/api/skills', 'POST', { category: CategoryRef.current?.value, ...data });
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  const updateDataUi = (id: any, skills: string) => {
    reset({ skills: skills });
    setEditableItemId(id);
    setIsEditable(true);
  };

  const updateData = async (id: any, data: FormData) => {
    try {
      await http(`/api/skills/${CategoryRef.current?.value}?id=${id}`, 'PATCH', data);

      setIsEditable(false);
      setEditableItemId(null);
      reset({ skills: '' });
      getData();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const deleteData = async (id: any) => {
    try {
      await http(`/api/skills/${CategoryRef.current?.value}?id=${id}`, 'DELETE');
      getData();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppSectionRow>
      <AppContainer>
        <div className="mx-auto max-w-[468px]">
          <div className="w-full flex flex-col gap-4 mb-10">
            <label>Select Category</label>
            <select
              onChange={() => {
                setIsEditable(false);
                setEditableItemId(null);
                reset({ skills: '' });
                getData();
              }}
              ref={CategoryRef}
              className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize cursor-pointer"
              defaultValue="frontend">
              <option value="" disabled>
                Select an category
              </option>
              <option value="frontend">frontend</option>
              <option value="backend">backend</option>
              <option value="other">other</option>
            </select>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 items-end">
            <div className="relative w-full flex flex-col gap-4 items-end">
              <AppInputField placeholder="skills" name="skills" register={register}>
                {errors.skills && (
                  <span className="text-red-500 capitalize">{errors.skills.message}</span>
                )}
              </AppInputField>

              <AppButton success={!isEditable} warning={isEditable} disabled={isLoading}>
                {isEditable ? 'edit' : 'add'}
              </AppButton>
            </div>
          </form>
          {skills && (
            <ul className="flex flex-col gap-4 my-4">
              {skills?.map((item: SkillItem) => (
                <li
                  key={item.id}
                  className="w-full flex items-center gap-4 relative px-4 py-2 h-12 bg-white rounded">
                  <span className="text-black flex-1">{item.skills}</span>

                  <AppButton sm onClick={() => updateDataUi(item.id, item.skills)} warning>
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

export default ManageSkills;
