import Calendar from '../assets/icons/Calendar.svg';
import Home from '../assets/icons/Home.svg';
import Logo from '../assets/icons/LOGO.svg';
import Logout from '../assets/icons/Logout.svg';
import News from '../assets/icons/News.svg';
import Profile from '../assets/icons/Profile.svg';
import Ressources from '../assets/icons/Ressources.svg';
import Staff from '../assets/icons/Staff.svg';

export const navigation = {
  header: {
    logo: <Logo className={'mb-16'} />,
    links: [
      { name: 'Home', path: '/', balise: <Home className={'w-full'} /> },
      {
        name: 'Planner',
        path: '/planner',
        balise: <Calendar className={'w-full'} />,
      },
      { name: 'News', path: '/news', balise: <News className={'w-full'} /> },
      { name: 'Staff', path: '/staff', balise: <Staff className={'w-full'} /> },
      {
        name: 'Ressources',
        path: '/ressources',
        balise: <Ressources className={'w-full'} />,
      },
    ],
    profile: {
      name: 'Profile',
      path: '/profile',
      balise: <Profile className={'w-full'} />,
    },
  },
  footer: [],
};
