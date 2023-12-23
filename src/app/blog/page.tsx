import AppContainer from '@/components/AppContainer';
import blog from '@/assets/data/lottiefiles/blog.json';
import LottieAnimation from '@/components/LottieAnimation';
import Link from 'next/link';
import Image from 'next/image';
import AppSectionRow from '@/components/AppSectionRow';
import { http } from '@/services/http';
import { PostFormProps } from '@/types/types';

const getData = async () => {
  try {
    const data = await http('/api/blog', 'GET');
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const Blog: React.FC = async () => {
  const blogData: PostFormProps[] | [] = await getData();

  if (!blogData) return null;

  return (
    <AppSectionRow>
      <AppContainer>
        <div className="flex flex-col gap-16">
          <div className="flex">
            <div className="flex-1 hidden md:block">
              <LottieAnimation item={blog} />
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                {blogData.map((item) => (
                  <Link
                    href={`blog/${item.slug}`}
                    key={item.id}
                    className="flex gap-6 p-5 rounded-md hover:bg-slate-800/50
                    hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] transition-shadow">
                    <div>
                      <Image
                        src={item.image}
                        alt=""
                        width={120}
                        height={120}
                        className="rounded-md min-w-[120px] max-h-[90px]"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h4 className="text-lg text-teal-300">{item.title}</h4>
                      <div className="text-sm line-clamp-2">{item.text}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </AppSectionRow>
  );
};

export default Blog;
