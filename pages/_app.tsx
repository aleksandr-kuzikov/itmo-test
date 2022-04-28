import '../styles/globals.css'
import MainLayout from "../layouts/MainLayout";
import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {setupStore} from "../store/store";

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
      </Provider>
  )
}

export default MyApp
