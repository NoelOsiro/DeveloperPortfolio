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


const ContactsContainer = (props: { theme: CustomTheme }) => ({
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
});

const ContactsBody = (props: { theme: CustomTheme }) => ({
  backgroundColor: props.theme.secondary,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100 %',
});

const ContactsForm = (props: { theme: CustomTheme }) => ({
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
});

const InputContainer = (props: { theme: CustomTheme }) => ({
  backgroundColor: props.theme.secondary,
  width: '100 %',

});

const Label = (props: { theme: CustomTheme }) => ({
  backgroundColor: props.theme.secondary,
  color: props.theme.primary,
  fontFamily: 'var(--primaryFont)',
  fontWeight: 600,
  fontSize: '0.9rem',
  padding: '0 5px',
  transform: 'translate(25px,50%)',
  display: 'inline-flex',
});

const Input = (props: { theme: CustomTheme }) =>  ({
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
});

const InputMessage = (props: { theme: CustomTheme }) =>  ({
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
});

const SubmitButton = (props: { theme: CustomTheme }) =>  ({
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
});

const SnackbarStyled = (props: { theme: CustomTheme }) =>  ({
  backgroundColor: props.theme.primary,
  color: props.theme.secondary,
  fontFamily: 'var(--primaryFont)',
});

const SocialIcon = (props: { theme: CustomTheme }) => ({
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
});

const DetailsIcon = (props: { theme: CustomTheme }) => ({
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
});

export const getComponentStyles = (theme: CustomTheme) => ({
  Contacts: styled('div')`${(props: { theme: CustomTheme }) => Contacts(props).toString()}`,
  ContactsContainer: styled('div')`${(props: { theme: CustomTheme }) => ContactsContainer(props).toString()}`,
  ContactsBody: styled('div')`${(props: { theme: CustomTheme }) => ContactsBody(props).toString()}`,
  ContactsForm: styled('div')`${(props: { theme: CustomTheme }) => ContactsForm(props).toString()}`,
  InputContainer: styled('div')`${(props: { theme: CustomTheme }) => InputContainer(props).toString()}`,
  Label: styled('label')`${(props: { theme: CustomTheme }) => Label(props).toString()}`,
  Input: styled('input')`${(props: { theme: CustomTheme }) => Input(props).toString()}`,
  InputMessage: styled('input')`${(props: { theme: CustomTheme }) => InputMessage(props).toString()}`,
  SubmitButton: styled('button')`${(props: { theme: CustomTheme }) => SubmitButton(props).toString()}`,
  SnackbarStyled: styled('div')`${(props: { theme: CustomTheme }) => SnackbarStyled(props).toString()}`,
  SocialIcon: styled('div')`${(props: { theme: CustomTheme }) => SocialIcon(props).toString()}`,
  DetailsIcon: styled('div')`${(props: { theme: CustomTheme }) => DetailsIcon(props).toString()}`,
  // Define other components similarly
});


