'use client';

import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  text: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 items-start">
      <div className="w-full flex flex-col gap-4">
        <input
          placeholder="name"
          {...register('name', { required: true })}
          className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
        />
        {errors.name && <span className="text-red-500">Name field is required</span>}
      </div>

      <div className="w-full flex flex-col gap-4">
        <input
          placeholder="email"
          {...register('email', { required: true })}
          className="w-full px-4 py-2 h-12 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize"
        />
        {errors.email && <span className="text-red-500">Email field is required</span>}
      </div>

      <div className="w-full flex flex-col gap-4">
        <textarea
          placeholder="text"
          {...register('text', { required: true })}
          className="w-full px-4 py-2 h-36 focus:outline-none rounded-md text-blue-950 placeholder:text-blue-950 placeholder:capitalize resize-none"
        />
        {errors.text && <span className="text-red-500">Text field is required</span>}
      </div>

      <button
        type="submit"
        className="px-8 py-4 bg-blue-950 text-teal-300 text-sm rounded-lg flex gap-4 items-center justify-center hover:text-teal-400 transition-colors">
        <span>Send Message</span>
        <div className="w-4 h-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24">
            <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
