'use client';

import AppContainer from '@/components/AppContainer';
import AppSectionRow from '@/components/AppSectionRow';
import { http } from '@/services/http';
import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  skills: string;
}

interface SkillItem {
  id: string;
  skills: string;
  skillListId: string;
}

const ManageAbout: React.FC = () => {
  const [skills, setSkills] = useState([]);
  const CategoryRef = useRef<HTMLSelectElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({});

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
      await http('/api/skills', 'POST', { category: CategoryRef.current?.value, ...data });
      reset();
      getData();
    } catch (error) {
      console.error('Error submitting form:', error);
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
          <div className="w-full flex flex-col gap-4 mb-5">
            <label>Select Category</label>
            <select
              onChange={getData}
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

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 items-end">
            <div className="w-full flex flex-col gap-4 relative">
              <input
                placeholder="type here"
                {...register('skills')}
                className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
              />
              <button type="submit" className="p-1 rounded-md bg-green-600 absolute top-2 right-2">
                add
              </button>

              {errors.skills && (
                <span className="text-red-500 capitalize">{errors.skills.message}</span>
              )}
            </div>
          </form>
          {skills && (
            <ul className="flex flex-col gap-4 my-4">
              {skills?.map((item: SkillItem, index: number) => (
                <li key={item.id}>
                  <div className="w-full flex flex-col gap-4 relative">
                    <input
                      value={item.skills}
                      onChange={() => {}}
                      placeholder="type here"
                      className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
                    />
                    <button
                      onClick={() => deleteData(item.id)}
                      className="p-1 rounded-md bg-red-600 absolute top-2 right-2">
                      remove
                    </button>

                    {errors.skills && (
                      <span className="text-red-500 capitalize">{errors.skills.message}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </AppContainer>
    </AppSectionRow>
  );
};

export default ManageAbout;
