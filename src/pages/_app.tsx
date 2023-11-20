import '@/styles/globals.scss'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React, {useEffect, useState} from 'react'
import setLanguage from 'next-translate/setLanguage'
import { Analytics } from '@vercel/analytics/react';
import Preload from '@/components/Preload'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  const [loading, setLoading] = useState(false);

    useEffect(() => {
      let timeoutId : any;
      const handleRouteChangeStart = () => {
        setLoading(true);
      };
      
      const handleRouteChangeComplete = () => {;
        timeoutId = setTimeout(() => {
          setLoading(false);
        }, 3000);
      };

      router.events.on('routeChangeStart', handleRouteChangeStart);
      router.events.on('routeChangeComplete', handleRouteChangeComplete);

      return () => {
        clearTimeout(timeoutId);
        router.events.off('routeChangeStart', handleRouteChangeStart);
        router.events.off('routeChangeComplete', handleRouteChangeComplete);
      };
      
    }, [loading, router.events]);

  useEffect(
    () =>{
    const savedLang = localStorage.getItem("lang");

    if (savedLang != undefined && savedLang != router.locale) {
      setLanguage(savedLang);
    }
      
    }, [router.locale]
  )
  return (
    <ThemeProvider attribute="class">
      <Preload />
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}
