import {
  Dashboard as DashboardIcon,

  People as PeopleIcon,

  Home as HomeIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

import { IMenuItem } from '../types';
import { ROUTES } from './routes';

export const MENU_LIST: IMenuItem[] = [
  
  {
    route: ROUTES.home,
    literal: 'Home',
    Icon: HomeIcon,
  },
  {
    route: ROUTES.services,
    literal: 'Services',
    Icon: SettingsIcon,
  },
  {
    route: ROUTES.blog,
    literal: 'Blog',
    Icon: DashboardIcon,
  },
  {
    route: ROUTES.contact,
    literal: 'contact',
    Icon: PeopleIcon,
  },
];
