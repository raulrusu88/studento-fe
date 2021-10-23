import type { AppProps as NextAppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
