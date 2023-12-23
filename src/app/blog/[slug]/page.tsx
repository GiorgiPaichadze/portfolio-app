import AppContainer from '@/components/AppContainer';
import AppSectionRow from '@/components/AppSectionRow';
import { http } from '@/services/http';
import { PostFormProps } from '@/types/types';
import Image from 'next/image';

const getData = async (slug: any) => {
  try {
    const data = await http(`/api/blog/${slug}`, 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const BlogInside: React.FC = async ({ params }: any) => {
  const { slug } = params;

  const blogData: PostFormProps = await getData(slug);

  if (!blogData) return null;

  return (
    <AppSectionRow>
      <AppContainer>
        <div className="max-w-[768px] mx-auto">
          <figure className="relative h-[520px] ">
            <Image src={blogData.image} alt="" fill />
          </figure>
          <div className="max-w-3xl mt-16 mx-auto">
            <h1 className="text:xl md:text-4xl font-bold mb-6 text-teal-300">{blogData.title}</h1>
            <p className="text-lg">{blogData.text}</p>
          </div>
        </div>
      </AppContainer>
    </AppSectionRow>
  );
};

export default BlogInside;
