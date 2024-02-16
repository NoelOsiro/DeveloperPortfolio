import { CustomTheme } from '@mui/material/styles';
import { styled } from "@mui/system";

export const SingleProjectContainer =styled('div')(({ theme }: { theme: CustomTheme }) => ({
  backgroundColor: theme.primary,
  boxShadow: '4px 4px 8px rgba(36, 3, 3, 0.2)',
    width: '304px',
    height: '360px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.4rem 2rem',
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    '&:hover img.img': {
      opacity: 0,
    },
}));

export const SingleProjectContent =styled('div')(({ theme }: { theme: CustomTheme }) => ({
  display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
}));

export const SingleProjectContentH2 =styled('h2')(({ theme }: { theme: CustomTheme }) => ({
  color: theme.tertiary,
  fontFamily: 'var(--primaryFont)',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '1.525rem',
    lineHeight: '110%',
    textAlign: 'center',
}));
export const SingleProjectShowcaseBtn=styled('div')(({ theme }: { theme: CustomTheme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
}));

export const ProjectContentImg = styled('img')(({ theme }: { theme: CustomTheme }) => ({
  width: '100%',
  height: '60%',
  transition: 'opacity 0.7s 0.3s',
  '&.img': { // Add a class to the image
    width: '100%',
    height: '60%',
    transition: 'opacity 0.7s 0.3s',
  },
}));

export const SingleProjectHoverImg = styled(SingleProjectContainer)({
  '&:hover $img.img': {
    opacity: 0,
  },
});

export const ProjectShowcaseBtnLink = styled('a')(({ theme }: { theme: CustomTheme }) => ({
  color: theme.tertiary,
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'transform 0.5s 0.3s',
  width: '40px',
  border: '2px solid #eaeaea',
  height: '40px',
  display: 'flex',
  
  alignItems: 'center',
  borderRadius: '50px',
  justifyContent: 'center',
}));

export const SingleProjectHoverBtn = styled(SingleProjectContainer)({
  '&:hover $projectShowcaseBtnLink:nth-child(2)': {
    transform: 'translateX(-140px) scale(1.1) !important',
  },
});

export const ProjectDesc = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  position: 'absolute',
  width: '95%',
  height: '160px',
  left: '0',
  top: '0',
  transform: 'translate(-110%, 40%)',
  padding: '15px',
  borderRadius: '0 20px 20px 0',
  transition: 'transform 0.9s',
  lineHeight: '110%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--primaryFont)',
}));

export const SingleProjectHoverDesc = styled(SingleProjectContainer)({
  '&:hover $projectDesc': {
    transform: 'translate(-2%, 40%)',
  },
});

export const ProjectLang = styled('div')(({ theme }: { theme: CustomTheme }) => ({
  position: 'absolute',
  bottom: '20px',
  right: '0',
  width: '140px',
  fontSize: '0.8rem',
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',
  flexDirection: 'column',
  borderRadius: '10px 0 0 10px',
  transform: 'translateX(100%)',
  transition: 'transform 0.5s 0.3s',
  padding: '0.825rem',
}));

export const SingleProjectHoverLang = styled(SingleProjectContainer)({
  '&:hover $projectLang': {
    transform: 'translateX(0)',
  },
});

export const ProjectLangSpan = styled('span')(({ theme }: { theme: CustomTheme }) => ({
  fontFamily: 'var(--primaryFont)',
  fontWeight: '500',
  wordBreak: 'break-word',
  lineHeight: '100%',
}));
