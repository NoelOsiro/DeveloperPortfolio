import { CustomTheme } from '@mui/material/styles';
import { styled } from "@mui/system";
import { Button } from '@mui/material';

export const ProjectsContainer = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  backgroundColor: theme.secondary,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minHeight: '100vh',
  overflowX: 'hidden',
  padding: '2rem',
}));

export const ProjectsHeader = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  color: theme.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  margin: '1rem',
  marginBottom: '40px',
  fontSize: '3.5rem',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontFamily: 'var(--primaryFont)',
  textAlign: 'center',
}));

export const ProjectsBody = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const ProjectsBodyContainer = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4.5rem',
    width: '100%',
}));

export const ProjectsViewAll = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  width: '100%',
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '2rem',
}));
