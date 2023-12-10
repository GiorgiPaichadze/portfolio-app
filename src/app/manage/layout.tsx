'use client';

import AppLoader from '@/components/AppLoader';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const ManageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const session = useSession();

  if (session.status === 'loading') {
    return <AppLoader />;
  }

  if (session.status === 'unauthenticated') {
    router.push('/');
  }

  if (session.status === 'authenticated') {
    return <div>{children}</div>;
  }
};

export default ManageLayout;
