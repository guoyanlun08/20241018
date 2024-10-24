'use client';

import React, { useState } from 'react';
import MobileSelectZone from './MobileSelectZone';
import styles from './styles.module.scss';

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className="flex justify-between items-center max-w-full mx-0 my-auto p-[10px]">
        <div className="flex items-center">
          <a href="/" className={styles.headerLogo}>
            <svg viewBox="0 0 64 36" xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-auto fill-none">
              <path
                fill="black"
                d="M41.3111 0H37.6444C30.3111 0 24.6889 4.15556 21.7556 9.28889C18.8222 3.91111 12.9556 0 5.86667 0H2.2C0.977781 0 0 0.977779 0 2.2V5.86667C0 16.1333 8.31111 24.2 18.3333 24.2H19.8V33C19.8 34.2222 20.7778 35.2 22 35.2C23.2222 35.2 24.2 34.2222 24.2 33V24.2H25.6667C35.6889 24.2 44 16.1333 44 5.86667V2.2C43.5111 0.977779 42.5333 0 41.3111 0ZM19.3111 19.5556H17.8444C10.2667 19.5556 4.15556 13.4444 4.15556 5.86667V4.4H5.62222C13.2 4.4 19.3111 10.5111 19.3111 18.0889V19.5556ZM39.1111 5.86667C39.1111 13.4444 33 19.5556 25.4222 19.5556H23.9556V18.0889C23.9556 10.5111 30.0667 4.4 37.6444 4.4H39.1111V5.86667Z"
                className="sc-49c604f9-0 btsKug"
              ></path>
            </svg>
            PDF.ai
          </a>
        </div>
        {/* desktop */}
        <div className="hidden md:block">
          <div className={styles.desktopNav}>
            <a className="hover:underline" href="/pricing">
              Pricing
            </a>
            <a className="hover:underline" href="/chrome-extension">
              Chrome extension
            </a>
            <a className="hover:underline" href="/use-cases">
              Use cases
            </a>
            <a className="hover:underline" href="/auth/sign-in">
              Get started →
            </a>
          </div>
        </div>
        {/* mobile */}
        <button className={`md:hidden ${styles.mobileBtn}`} onClick={() => setIsOpen(!isOpen)}>
          <svg viewBox="0 0 16 16">
            {isOpen ? (
              <path d="M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z"></path>
            ) : (
              <path d="M1 4h14c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm14 8H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zm0-5H1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z"></path>
            )}
          </svg>
        </button>
      </div>
      <MobileSelectZone isOpen={isOpen} />
    </div>
  );
}

export default Header;
