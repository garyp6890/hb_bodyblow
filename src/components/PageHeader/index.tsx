import React from 'react';
import DesktopHeader from './Desktop';
import MobileHeader from './Mobile';
import { PageHeaderProps } from './types';

export default function PageHeader(props: PageHeaderProps) {
  return (
    <div className="mt-[164px] relative z-30">
      <DesktopHeader {...props} />
      <MobileHeader {...props} />
    </div>
  );
}