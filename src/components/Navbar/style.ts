import { CustomTheme } from "@mui/material/styles";
import { styled } from "@mui/system";

const StyledNavMenu = styled('div')(({ theme }: { theme: CustomTheme }) => ({
    fontSize: '2.5rem',
    color: theme.tertiary,
    cursor: 'pointer',
    transform: 'translateY(-10px)',
    transition: 'color 0.3s',
    '&:hover': {
      color: theme.primary,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem',
    },
  }));

  const StyledMuiDrawer = styled('div')(({ theme }: { theme: CustomTheme }) => ({
    padding: '0em 1.8em',
    width: '14em',
    fontFamily: ' var(--primaryFont)',
    fontStyle: ' normal',
    fontWeight: ' normal',
    fontSize: ' 24px',
    background: theme.secondary,
    overflow: 'hidden',
    borderTopRightRadius: '40px',
    borderBottomRightRadius: '40px',
    [theme.breakpoints.down('sm')]: {
        width: '12em',
    },
}));

const StyledCloseBtnIcon = styled('div')(({ theme }: { theme: CustomTheme }) => ({
    fontSize: '2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: theme.primary,
    position: 'absolute',
    right: 40,
    top: 40,
    transition: 'color 0.2s',
    '&:hover': {
        color: theme.tertiary,
    },
    [theme.breakpoints.down('sm')]: {
        right: 20,
        top: 20,
    },
}));


const StyledDrawerItem = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  margin: '2rem auto',
  borderRadius: '78.8418px',
  background: theme.secondary,
  color: theme.primary,
  width: '85%',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  padding: '0 30px',
  boxSizing: 'border-box',
  border: '2px solid',
  borderColor: theme.primary,
  transition: 'background-color 0.2s, color 0.2s',
  '&:hover': {
      background: theme.primary,
      color: theme.secondary,
  },
  [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '0 25px',
      height: '55px',
  },
}));
const StyledDrawerLinks= styled('span')(({ theme }: { theme: CustomTheme }) => ({
  fontFamily: 'var(--primaryFont)',
  width: '50%',
  fontSize: '1.3rem',
  fontWeight: 600,
  [theme.breakpoints.down('sm')]: {
      fontSize: '1.125rem',
  },
}));
const StyledDrawerIcon = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  fontSize: '1.6rem',
  [theme.breakpoints.down('sm')]: {
      fontSize: '1.385rem',
  },
}));

export const useStyles = () => {
    return {
        navMenu: StyledNavMenu,
        MuiDrawer: StyledMuiDrawer,
        closebtnIcon: StyledCloseBtnIcon,
        drawerItem: StyledDrawerItem,
        drawerLink: StyledDrawerLinks,
        drawerIcon: StyledDrawerIcon,
        // Add other styled components...
    };
};