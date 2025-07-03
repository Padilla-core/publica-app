'use client';

import { useVariables } from '@gitroom/react/helpers/variable.context';
import Script from 'next/script';

export const useAffonso = () => {
  return () => {
    return {
        // @ts-ignore
        affonso:  window?.affonso_referral || '',
        // @ts-ignore
        register: window.Affonso.signup
      }
  };
};

export const AffonsoScript = () => {
  const { affonso } = useVariables(); 
  if (!affonso) return null;

  return (
    <Script
      src="https://affonso.io/js/pixel.min.js"
      strategy="afterInteractive"
      data-affonso={affonso}
      data-cookie_duration="30"
    />
  );
};
