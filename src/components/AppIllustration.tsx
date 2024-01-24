import Image from 'next/image';

const AppIllustration = ({ srcPath }: { srcPath: string }) => {
  return (
    <div className="w-[350px] h-[350px] relative hidden sm:block">
      <Image src={srcPath} fill alt="" />
    </div>
  );
};

export default AppIllustration;
