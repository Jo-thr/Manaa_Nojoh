import ctl from '@netlify/classnames-template-literals';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logout from '../../assets/icons/Logout.svg';
import { navigation } from '../../fixed-content/navigation';

export const Navbar = () => {
  const router = useRouter();
  const activeLink = router.route;
  const nav = navigation.header;

  return (
    <header
      className={
        'fixed flex h-screen w-20 flex-col items-center justify-between bg-black px-5 py-11'
      }
    >
      {nav.logo}
      <div className={'flex flex-col items-center justify-center gap-y-8'}>
        {nav.links.map((item) => (
          <div
            key={item.name}
            className={ctl(
              `p-2 text-white hover:cursor-pointer ${
                activeLink === item.path && 'rounded-md border-2 border-blue'
              }`
            )}
          >
            <Link href={item.path}>{item.balise}</Link>
          </div>
        ))}
      </div>
      <div className={'flex flex-col items-center gap-y-9'}>
        <Link href={nav.profile.path}>{nav.profile.balise}</Link>
        <Logout />
      </div>
    </header>
  );
};
