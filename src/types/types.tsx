export interface MenuProps {
  id: number;
  title: string;
  url: string;
}

export interface AboutFormProps {
  highlightedTitle: string;
  title: string;
  subtitle: string;
  cv: string;
  linkedIn: string;
  github: string;
  email: string;
}

export interface SkillItem {
  id: string;
  skills: string;
  skillListId: string;
}

export interface ExperienceFormProps {
  id: string;
  image: string;
  name: string;
  location: string;
  position: string;
  date: string;
  desc: string;
  url: string;
  stack: string;
}

export interface ExperienceItem {
  id: string;
  image: string;
  name: string;
  url: string;
  location: string;
  position: string;
  date: string;
  desc: string;
  stack: string;
}

export interface ProjectsItem {
  id: string;
  image: string;
  title: string;
  url: string;
  desc: string;
  stack: string;
  orderId: number;
  dragFirst: number;
  dragSecond: number;
}

export interface PostFormProps {
  id?: string;
  slug?: string;
  image: string;
  title: string;
  text: string;
}

export interface HighlightedTitleProps {
  children: string;
  nowrap?: boolean;
}

export interface SignInProps {
  email: string;
  password: string;
}

export interface SocialProps {
  socials: {
    linkedIn: string;
    github: string;
    email: string;
  };
}
