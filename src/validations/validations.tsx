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
  contactSlug: z.string().min(3, 'contactSlug field is required'),
  linkedIn: z.string().min(3, 'linkedIn field is required'),
  github: z.string().min(3, 'github field is required'),
});
