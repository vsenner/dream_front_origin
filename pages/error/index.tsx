import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0/client';

const Error = () => {
  const router = useRouter();

  const { user } = useUser();

  useEffect(() => {
    router.push(user ? '/dashboard' : '/');
  }, [router, user]);

  return <></>;
};

export default Error;
