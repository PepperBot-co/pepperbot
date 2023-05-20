import { SessionProvider } from "next-auth/react";
import { api } from "@pb/utils/api";

import { type AppType } from "next/app";
import { type Session } from "next-auth";

import "@pb/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
