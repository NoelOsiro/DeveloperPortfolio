import SnackbarContent from '@mui/material/SnackbarContent';
import { CustomTheme, styled } from '@mui/material/styles';

const Contacts = (props: { theme: CustomTheme }) => ({
  backgroundColor: props.theme.secondary,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  position: 'relative',
});


const ContactsContainer = styled('div')<{ theme: CustomTheme }>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  padding: '2rem 6rem 3rem',
  width: '80%',
  height: '100%',
  marginTop: '2rem',
  '& h1': {
    fontFamily: 'var(--primaryFont)',
    fontSize: '3.5rem',
    marginBottom: '2.5rem',
  },
}));

const ContactsBody = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.secondary,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100 %',
}));

const ContactsForm = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.secondary,
  display: 'flex',
  flex: '0.4',
  width: '100 %',
  '& form': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    width: '100 %',
  },
}));

const InputContainer = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.secondary,
  width: '100 %',

}));

const Label = styled('label')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.secondary,
  color: props.theme.primary,
  fontFamily: 'var(--primaryFont)',
  fontWeight: 600,
  fontSize: '0.9rem',
  padding: '0 5px',
  transform: 'translate(25px,50%)',
  display: 'inline-flex',
}));

const Input = styled('input')<{ theme: CustomTheme }>((props) => ({
  border: `4px solid ${props.theme.primary80}`,
  backgroundColor: `${props.theme.secondary}`,
  color: `${props.theme.tertiary}`,
  fontFamily: 'var(--primaryFont)',
  fontWeight: 500,
  transition: 'border 0.2s ease-in-out',
  '&:focus': {
    border: `4px solid ${props.theme.primary600}`,
  },
  height: '50px',
  boxSizing: 'border-box',
  borderRadius: '50px',
  outline: 'none',
  marginBottom: '2rem',
  padding: '0.7rem 0.7rem',
  width: '100 %',
  resize: 'none',
}));

const InputMessage = styled('input')<{ theme: CustomTheme }>((props) => ({
  border: `4px solid ${props.theme.primary80}`,
  backgroundColor: `${props.theme.secondary}`,
  color: `${props.theme.tertiary}`,
  fontFamily: 'var(--primaryFont)',
  fontWeight: 500,
  transition: 'border 0.2s ease-in-out',
  '&:focus': {
    border: `4px solid ${props.theme.primary600}`,
  },
  height: '150px',
  boxSizing: 'border-box',
  borderRadius: '50px',
  outline: 'none',
  marginBottom: '2rem',
  padding: '0.7rem 0.7rem',
  width: '100 %',
  resize: 'none',
}));

const SubmitButton = styled('button')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.primary,
  color: props.theme.secondary,
  transition: '250ms ease-in-out',
  '&:hover': {
    transform: 'scale(1.08)',
    color: props.theme.secondary,
    backgroundColor: props.theme.tertiary,
  },
  border: 'none',
  outline: 'none',
  width: '140px',
  height: '50px',
  borderRadius: '50px',
  fontWeight: '500',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  cursor: 'pointer',
  '& p': {
    fontSize: '16px',
    fontFamily: 'var(--primaryFont)',
  },
}));

const SnackbarStyled = styled(SnackbarContent)<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.primary,
  color: props.theme.secondary,
  fontFamily: 'var(--primaryFont)',
}));

const SocialIcon = styled('div')<{ theme: CustomTheme }>((props) => ({
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '21px',
  backgroundColor: props.theme.primary,
  color: props.theme.secondary,
  transition: '250ms ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    color: props.theme.secondary,
    backgroundColor: props.theme.tertiary,
  },
}));

const DetailsIcon = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.primary,
  color: props.theme.secondary,
  borderRadius: '50%',
  width: '45px',
  height: '45px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '23px',
  transition: '250ms ease-in-out',
  flexShrink: 0,
  '&:hover': {
    transform: 'scale(1.1)',
    color: props.theme.secondary,
    backgroundColor: props.theme.tertiary,
  },
}));

export const getComponentStyles = (theme: CustomTheme) => ({
  Contacts: styled('div')`${(props: { theme: CustomTheme }) => Contacts(props).toString()}`,
  ContactsContainer: styled('div')`${ContactsContainer(theme)}`,
  ContactsBody: styled('div')`${ContactsBody(theme)}`,
  ContactsForm: styled('div')`${ContactsForm(theme)}`,
  InputContainer: styled('div')`${InputContainer(theme)}`,
  Label: styled('label')`${Label(theme)}`,
  Input: styled('input')`${Input(theme)}`,
  InputMessage: styled('input')`${InputMessage(theme)}`,
  SubmitButton: styled('button')`${SubmitButton(theme)}`,
  // Define other components similarly
});

