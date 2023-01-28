export {};

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    ChannelIO: (...args: any[]) => void;
    dataLayer: Record<string, any>;
  }
}
