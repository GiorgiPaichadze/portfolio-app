'use client';

import { articleData } from '@/assets/data/data';
import AppContainer from '@/components/AppContainer';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const BlogInside = () => {
  const params = useParams();
  console.log(params.slug);
  return (
    <div className="py-20 md:py-24">
      <AppContainer>
        <figure className="relative h-[400px]">
          <Image src={articleData.image} alt="" fill />
        </figure>
        <div className="max-w-3xl mt-16 mx-auto">
          <h1 className="text:xl md:text-4xl font-bold mb-6 text-teal-300">{articleData.title}</h1>
          <p className="text-lg">{articleData.text}</p>
        </div>
      </AppContainer>
    </div>
  );
};

export default BlogInside;
