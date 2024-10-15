import CreateIcon from '@mui/icons-material/Create';
import CelebrationIcon from '@mui/icons-material/Celebration';
import HistoryIcon from '@mui/icons-material/History';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

export type HomeGridItem = {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
};

export const homeGridItems: ReadonlyArray<HomeGridItem> = [
  {
    title: 'Create a Raffle',
    description: 'Create a new raffle and manage it',
    icon: CreateIcon,
    href: '/create',
  },
  {
    title: 'Raffles',
    description: 'View all Raffles',
    icon: CelebrationIcon,
    href: '/Raffles',
  },
  {
    title: 'Statistics',
    description: 'View statistics of all your raffles',
    icon: HistoryIcon,
    href: '/Statistics',
  },
  {
    title: 'Profile',
    description: 'View and edit your profile',
    icon: PermIdentityIcon,
    href: '/Profile',
  },
];
