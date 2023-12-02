export type menuDataProps = {
  id: number;
  title: string;
  url: string;
}[];

export type ExperienceCardProps = {
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
};
