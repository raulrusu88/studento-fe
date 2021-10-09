import type { AppProps as NextAppProps } from "next/app";
import "tailwindcss/tailwind.css";

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
