export interface MenuProps {
  id: number;
  title: string;
  url: string;
}

export interface ExperienceCardProps {
  item: {
    id: number;
    image: string;
    name: string;
    location: string;
    position: string;
    date: string;
    desc: string;
    url: string;
    stack: {
      id: number;
      title: string;
    }[];
  };
}

export interface ArticleFormProps {
  title: string;
  text: string;
}

export interface AboutFormProps {
  highlightedTitle: string;
  title: string;
  subtitle: string;
  cv: string;
  contactSlug: string;
  linkedIn: string;
  github: string;
}

export interface ContactFormProps {
  name: string;
  email: string;
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
