import { z } from 'zod';

export const signInFormSchema = z.object({
  email: z.string().min(3, 'Email is required').email('Invalid email'),
  password: z.string().min(3, 'Password is required'),
});

export const aboutFormSchema = z.object({
  highlightedTitle: z.string().min(3, 'highlightedTitle field is required'),
  title: z.string().min(3, 'title field is required'),
  subtitle: z.string().min(3, 'subtitle field is required'),
  cv: z.string().min(3, 'cv field is required'),
  linkedIn: z.string().min(3, 'linkedIn field is required'),
  github: z.string().min(3, 'github field is required'),
  email: z.string().min(3, 'email field is required'),
});

export const skillsFormSchema = z.object({
  skills: z.string().min(3, 'skills field is required'),
});

export const experienceFormSchema = z.object({
  image: z.string().min(3, 'image field is required'),
  name: z.string().min(3, 'name field is required'),
  url: z.string().min(3, 'url field is required'),
  location: z.string().min(3, 'location field is required'),
  position: z.string().min(3, 'position field is required'),
  date: z.string().min(3, 'date field is required'),
  desc: z.string().min(3, 'desc field is required'),
  stack: z.string().min(3, 'stack field is required'),
});

export const projectsFormSchema = z.object({
  image: z.string().min(3, 'image field is required'),
  title: z.string().min(3, 'title field is required'),
  url: z.string().min(3, 'url field is required'),
  desc: z.string().min(3, 'desc field is required'),
  stack: z.string().min(3, 'stack field is required'),
});

export const postFormSchema = z.object({
  image: z.string().min(3, 'image field is required'),
  title: z.string().min(3, 'title field is required'),
  text: z.string().min(3, 'desc field is required'),
});
