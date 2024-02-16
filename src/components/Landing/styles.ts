import { CustomTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { Button } from '@mui/material';

const StyledResumeBtn = styled('div')(({ theme }: { theme: CustomTheme }) => ({
    color: theme.primary,
    borderRadius: '30px',
    textTransform: 'inherit',
    textDecoration: 'none',
    width: '150px',
    fontSize: '1rem',
    fontWeight: '500',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    height: '50px',
    fontFamily: 'var(--primaryFont)',
    border: `3px solid ${theme.primary}`,
    transition: '100ms ease-out',
    '&:hover': {
        backgroundColor: theme.tertiary,
        color: theme.secondary,
        border: `3px solid ${theme.tertiary}`,
    },
    [theme.breakpoints.down('sm')]: {
        width: '180px',
    }
}));

const StyledContactBtn = styled(Button)(({ theme }: { theme: CustomTheme }) => ({
    backgroundColor: theme.primary,
    color: theme.secondary,
    borderRadius: '30px',
    textTransform: 'inherit',
    textDecoration: 'none',
    width: '150px',
    height: '50px',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    fontWeight: '500',
    fontFamily: 'var(--primaryFont)',
    border: `3px solid ${theme.primary}`,
    transition: '100ms ease-out',
    '&:hover': {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
    },
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));

export const useStyles = () => {
    return {
        resumeBtn: StyledResumeBtn,
        contactBtn: StyledContactBtn,
        // Add other styled components...
    };
};
