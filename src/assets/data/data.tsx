export const menuData = [
  {
    id: 0,
    title: 'about',
    url: '/',
  },
  {
    id: 1,
    title: 'skills',
    url: '/skills',
  },
  {
    id: 2,
    title: 'experience',
    url: '/experience',
  },
  {
    id: 3,
    title: 'projects',
    url: '/projects',
  },
  {
    id: 4,
    title: 'contact',
    url: '/contact',
  },
  {
    id: 5,
    title: 'blog',
    url: '/blog',
  },
];

export const drawerData = [
  {
    id: 0,
    title: 'about',
    url: '/manage/about',
  },
  {
    id: 1,
    title: 'skills',
    url: '/manage/skills',
  },
  {
    id: 2,
    title: 'experience',
    url: '/manage/experience',
  },
  {
    id: 3,
    title: 'projects',
    url: '/manage/projects',
  },
  {
    id: 5,
    title: 'blog',
    url: '/manage/blog',
  },
];

export const skillsData = {
  frontend: [
    {
      id: 0,
      skills: 'TypeScript, JavaScript (ES6+)',
    },
    {
      id: 1,
      skills: 'NextJS, ReactJS',
    },
    {
      id: 2,
      skills: 'Redux Toolkit, Redux',
    },
    {
      id: 3,
      skills: 'TanStack Query',
    },
    {
      id: 4,
      skills: 'React Hook Form, Zod',
    },
    {
      id: 5,
      skills: 'HTML5, CSS3, SCSS, CSS Modules',
    },
    {
      id: 6,
      skills: 'Tailwind',
    },
    {
      id: 7,
      skills: 'Webpack',
    },
    {
      id: 8,
      skills: 'Optimizing Performance, Code Splitting',
    },
    {
      id: 9,
      skills: 'ESLint, Prettier',
    },
  ],
  backend: [
    {
      id: 0,
      skills: 'NodeJS',
    },
    {
      id: 1,
      skills: 'PostgreSQL, MongoDB',
    },
    {
      id: 2,
      skills: 'Prisma',
    },
    {
      id: 3,
      skills: 'Swagger',
    },
    {
      id: 4,
      skills: 'REST API',
    },
  ],
  other: [
    {
      id: 0,
      skills: 'Git, GitHub',
    },
    {
      id: 1,
      skills: 'Figma',
    },
    {
      id: 2,
      skills: 'Jira',
    },
    {
      id: 3,
      skills: 'BEM (CSS)',
    },
  ],
};

export const experienceData = [
  {
    id: 0,
    image: '/artmedia.svg',
    name: 'Artmedia',
    url: 'http://artmedia.ge/',
    location: 'Tbilisi',
    position: 'Frontend Developer',
    date: 'November 2021 - Present',
    desc: `Developed scalable and responsive web applications, collaborating closely with designers
    and back-end developers to implement UI designs and integrate front-end code with
    server-side logic. Worked in an Agile environment, participating in daily stand-ups and
    sprint planning sessions. Conducted regular maintenance and updates to existing
    websites.`,
    stack: [
      {
        id: 0,
        title: 'NextJS',
      },
      {
        id: 1,
        title: 'ReactJS',
      },
      {
        id: 2,
        title: 'JavaScript',
      },
      {
        id: 3,
        title: 'HTML',
      },
      {
        id: 4,
        title: 'CSS (SCSS) Modules',
      },
    ],
  },
];

export const projectsData = [
  {
    id: 0,
    image: '/project.png',
    title: 'actio.ge',
    url: 'https://actio.ge/',
    desc: 'The First Impact Fund in Georgia Actio',
    stack: [
      {
        id: 0,
        title: 'JavaScript',
      },
      {
        id: 1,
        title: 'HTML',
      },
      {
        id: 2,
        title: 'SCSS',
      },
    ],
  },
];

export const blogData = [
  {
    id: 0,
    image: '/project.png',
    title: 'SEO Writing: 12 Tips for Creating SEO-Optimized Content',
    url: '/seo',
    text: `SEO writing is the process of writing content in a way that’s intended to make it rank higher in search engines like Google for relevant keywords. 
    This involves: 
    Optimizing your content for target keywords 
    Making sure your content is helpful to readers
    Helping search engines understand what your content is about
    This guide teaches you why SEO writing matters and how to hone your SEO writing skills in 12 easy pointers. Read on.
    `,
  },
  {
    id: 1,
    image: '/project.png',
    title: 'SEO Writing: 12 Tips for Creating SEO-Optimized Content',
    url: '/seo',
    text: `SEO writing is the process of writing content in a way that’s intended to make it rank higher in search engines like Google for relevant keywords. 
    This involves: 
    Optimizing your content for target keywords 
    Making sure your content is helpful to readers
    Helping search engines understand what your content is about
    This guide teaches you why SEO writing matters and how to hone your SEO writing skills in 12 easy pointers. Read on.
    `,
  },
];

export const articleData = {
  id: 0,
  image: '/project.png',
  title: 'SEO Writing: 12 Tips for Creating SEO-Optimized Content',
  url: '/seo',
  text: `SEO writing is the process of writing content in a way that’s intended to make it rank higher in search engines like Google for relevant keywords. 
  This involves: 
  Optimizing your content for target keywords 
  Making sure your content is helpful to readers
  Helping search engines understand what your content is about
  This guide teaches you why SEO writing matters and how to hone your SEO writing skills in 12 easy pointers. Read on.
  `,
};
