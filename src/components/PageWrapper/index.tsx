import type { AppProps } from 'next/app';
import { useUser } from '@auth0/nextjs-auth0/client';
import Error from '../../../pages/error';

const PageWrapper = ({ Component, pageProps }: AppProps) => {
  // const { user, error, isLoading } = useUser();
  //
  // if (isLoading) return <div>loading...</div>;
  //
  // if (pageProps.protected && !user) {
  //   return <Error />;
  // }

  return <Component {...pageProps} />;
};

export default PageWrapper;
