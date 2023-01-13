import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return <></>;
};

export default Error;
