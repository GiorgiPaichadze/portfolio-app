'use client';

import { articleData } from '@/assets/data/data';
import AppContainer from '@/components/AppContainer';
import AppSectionRow from '@/components/AppSectionRow';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const BlogInside: React.FC = () => {
  const params = useParams();

  console.log(params.slug);

  return (
    <AppSectionRow>
      <AppContainer>
        <figure className="relative h-[400px]">
          <Image src={articleData.image} alt="" fill />
        </figure>
        <div className="max-w-3xl mt-16 mx-auto">
          <h1 className="text:xl md:text-4xl font-bold mb-6 text-teal-300">{articleData.title}</h1>
          <p className="text-lg">{articleData.text}</p>
        </div>
      </AppContainer>
    </AppSectionRow>
  );
};

export default BlogInside;
