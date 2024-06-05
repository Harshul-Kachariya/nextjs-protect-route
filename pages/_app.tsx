import "@/styles/globals.css";
import { changeAuthStatus } from "@/zustand/action";
import { getAuthData } from "@/zustand/store";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const auth = getAuthData();
  console.log(auth);
  return !auth ? (
    <Component {...pageProps} />
  ) : (
    <button onClick={() => changeAuthStatus(false)}>Login</button>
  );
}
