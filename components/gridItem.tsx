import Button from '@mui/joy/Button';
import Link from 'next/link';
import {HomeGridItem } from '../consts/homeGridItems';
/**
 *
 * @param item A HomeGridItem to render
 * @param index The index of the HomeGridItem in the homeGridItems array
 * @returns A JSX element representing the HomeGridItem
 */
const gridItem = (item: HomeGridItem, index: number) => (
  <div key={index} className="m-4">
    <Link href={item.href}>
    <Button
      startDecorator={<item.icon />}
      variant="plain"
      size="lg"
      sx={(theme) => ({
        height: '5vh',
        width: '100%',
        justifyContent: 'flex-start',
        bgcolor: theme.palette.mode === 'light' ? '#1e1e1e' : '#D9D9D9',
        color: theme.palette.mode === 'light' ? '#D9D9D9' : '#1e1e1e',
        fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem' },
        '&:hover': {
        textDecoration: 'underline',
        bgcolor: theme.palette.mode === 'light' ? '#1e1e1e' : '#D9D9D9',
        },
      })}
    >
        {item.title}
      </Button>
    </Link>
  </div>
);
export default gridItem;
