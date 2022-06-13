import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import type { Page } from '../types/page';
import { AuthConsumer, AuthProvider } from '../contexts/jwt-context';

import '@styles/swiper.styles.css';
import '@styles/global.scss';

// this should give a better typing
type Props = AppProps & {
  Component: Page;
};
const MyApp = ({ Component, pageProps }: Props) => {
  // adjust accordingly if you disabled a layout rendering option
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;

  return (
    <AuthProvider>
      <Layout>
        <AuthConsumer>
          {(auth) =>
            !auth.isInitialized ? (
              <>
                <div>Loading...</div>
              </>
            ) : (
              getLayout(<Component {...pageProps} />)
            )
          }
        </AuthConsumer>
      </Layout>
    </AuthProvider>
  );

  // or swap the layout rendering priority
  // return getLayout(<Layout><Component {...pageProps} /></Layout>)
};

export default MyApp;
