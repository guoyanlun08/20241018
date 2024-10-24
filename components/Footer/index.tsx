'use client';

import SocialMedia from './SocialMedia';
import FooterInfo from './FooterInfo';

function Footer() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-8 mt-8 sm:mt-12 lg:px-8 lg:mt-16 border-t border-gray-900/10 pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <SocialMedia />
          <FooterInfo />
        </div>
      </div>
    </div>
  );
}

export default Footer;
