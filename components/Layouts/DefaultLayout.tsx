import { ReactNode } from 'react';

import { Footer } from '../Footer/footer';
import { Navbar } from '../Navbar/Navbar';

export interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div
      className={
        'flex min-h-screen w-screen flex-col justify-between overflow-x-hidden'
      }
    >
      <Navbar />
      <div className={'ml-20 flex w-[100%-5rem] flex-col px-24 py-20 '}>
        {children}
      </div>
      <Footer />
    </div>
  );
};
