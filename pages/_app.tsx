import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import PageWrapper from '../src/components/PageWrapper';
import { store } from '../src/store';
import { Provider } from 'react-redux';
import {loadStripe} from "@stripe/stripe-js";



export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <UserProvider>
      <Provider store={store}>
        <PageWrapper
          pageProps={pageProps}
          Component={Component}
          router={router}
        />
      </Provider>
    </UserProvider>
  );
}
