'use client'
import React, { FormEvent, SyntheticEvent, useContext, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaBloggerB,
  FaRedditAlien,
  FaStackOverflow,
  FaCodepen,
  FaInstagram,
  FaGitlab,
  FaMediumM,
} from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import {useThemeContext } from '../../contexts/ThemeContext';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';
import { getComponentStyles } from './Contacts.style';


function Contacts() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const { theme } = useThemeContext();

  const {Contacts, ContactsBody,Label,Input,InputMessage,SubmitButton, DetailsIcon,SocialIcon,ContactsContainer, ContactsForm,InputContainer} = getComponentStyles(theme);

  const handleClose = (event: any, reason:string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleContactForm = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name && email && message) {
      if (isEmail(email)) {
        const responseData = {
          name: name,
          email: email,
          message: message,
        };

        axios.post(contactsData.sheetAPI, responseData).then((res) => {
          console.log('success');
          setSuccess(true);
          setErrMsg('');

          setName('');
          setEmail('');
          setMessage('');
          setOpen(false);
        });
      } else {
        setErrMsg('Invalid email');
        setOpen(true);
      }
    } else {
      setErrMsg('Enter all the fields');
      setOpen(true);
    }
  };

  return (
    <Contacts id='contacts' theme={theme}>
      <ContactsContainer theme={theme}>
        <h1>Contacts</h1>
        <ContactsBody theme={theme} className='contacts-body'>
          <ContactsForm theme={theme} className='contacts-form'>
            <form onSubmit={handleContactForm}>
              <InputContainer theme={theme} className='input-container'>
                <Label theme={theme} htmlFor='Name'>
                  Name
                </Label>
                <Input
                  theme={theme}
                  placeholder='John Doe'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  name='Name'
                  className={`form-input`}
                />
              </InputContainer>
              <InputContainer theme={theme} className='input-container'>
                <Label theme={theme} htmlFor='Email'>
                  Email
                </Label>
                <Input
                  theme={theme}
                  placeholder='John@doe.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  name='Email'
                  className={`form-input`}
                />
              </InputContainer>
              <InputContainer theme={theme} className='input-container'>
                <Label theme={theme} htmlFor='Message'>
                  Message
                </Label>
                <InputMessage
                  theme={theme}
                  placeholder='Type your message....'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  
                  name='Message'
                  className={`form-message`}
                />
              </InputContainer>
              <div className='submit-btn'>
                <SubmitButton
                  type='submit'
                  theme={theme}
                >
                  <p>{!success ? 'Send' : 'Sent'}</p>
                  <div className='submit-icon'>
                    <AiOutlineSend
                      className='send-icon'
                      style={{
                        animation: !success
                          ? 'initial'
                          : 'fly 0.8s linear both',
                        position: success ? 'absolute' : 'initial',
                      }}
                    />
                    <AiOutlineCheckCircle
                      className='success-icon'
                      style={{
                        display: !success ? 'none' : 'inline-flex',
                        opacity: !success ? '0' : '1',
                      }}
                    />
                  </div>
                </SubmitButton>
              </div>
            </form>
            {/* <Snackbar
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={open}
              autoHideDuration={4000}
              onClose={handleClose}
            >
              <SnackbarStyled
                action={
                  <React.Fragment>
                    <IconButton
                      size='small'
                      aria-label='close'
                      color='inherit'
                      onClick={handleClose}
                    >
                      <CloseIcon fontSize='small' />
                    </IconButton>
                  </React.Fragment>
                }
                theme={theme}
                message={errMsg}
              />
            </Snackbar> */}
          </ContactsForm>

          <div className='contacts-details'>
            <a
              href={`mailto:${contactsData.email}`}
              className='personal-details'
            >
              <DetailsIcon theme={theme} className='detailsIcon'>
                <FiAtSign />
              </DetailsIcon>
              <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
            </a>
            <a href={`tel:${contactsData.phone}`} className='personal-details'>
              <DetailsIcon theme={theme} className='detailsIcon'>
                <FiPhone />
              </DetailsIcon>
              <p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
            </a>
            <div className='personal-details'>
              <DetailsIcon theme={theme} className='detailsIcon'>
                <HiOutlineLocationMarker />
              </DetailsIcon>
              <p style={{ color: theme.tertiary }}>{contactsData.address}</p>
            </div>

            <div className='socialmedia-icons'>
              {socialsData.twitter && (
                <a
                  href={socialsData.twitter}
                  target='_blank'
                  rel='noreferrer'
                  className='socialIcon'
                >
                  <SocialIcon theme={theme}>
                    <FaTwitter aria-label='Twitter' />
                  </SocialIcon>
                </a>
              )}
              {socialsData.github && (
                <a
                  href={socialsData.github}
                  target='_blank'
                  rel='noreferrer'
                  className='socialIcon'
                >
                  <SocialIcon theme={theme}>
                    <FaGithub aria-label='GitHub' />
                  </SocialIcon>
                </a>
              )}
              {socialsData.linkedIn && (
                <a
                  href={socialsData.linkedIn}
                  target='_blank'
                  rel='noreferrer'
                  className='socialIcon'
                >
                  <SocialIcon theme={theme}>
                    <FaLinkedinIn aria-label='LinkedIn' />
                  </SocialIcon>
                </a>
              )}
              {socialsData.instagram && (
                <a
                  href={socialsData.instagram}
                  target='_blank'
                  rel='noreferrer'
                  className='socialIcon'
                >
                  <SocialIcon theme={theme}>
                    <FaInstagram aria-label='Instagram' />
                  </SocialIcon>
                </a>
              )}
              {socialsData.medium && (
                <a
                  href={socialsData.medium}
                  target='_blank'
                  rel='noreferrer'
                  className='socialIcon'
                >
                  <SocialIcon theme={theme}>
                    <FaMediumM aria-label='Medium' />
                  </SocialIcon>
                </a>
              )}
              {socialsData.blogger && (
                <a
                  href={socialsData.blogger}
                  target='_blank'
                  rel='noreferrer'
                  className='socialIcon'
                >
                  <SocialIcon theme={theme}>
                    <FaBloggerB aria-label='Blogger' />
                  </SocialIcon>
                </a>
              )}
              {socialsData.youtube && (
                <a
                  href={socialsData.youtube}
                  target='_blank'
                  rel='noreferrer'
                  className='socialIcon'
                >
                  <SocialIcon theme={theme}>
                    <FaYoutube aria-label='YouTube' />
                  </SocialIcon>
                </a>
              )}
              {socialsData.reddit && (
                <a
                  href={socialsData.reddit}
                  target='_blank'
                  rel='noreferrer'
                  className='socialIcon'
                >
                  <SocialIcon theme={theme}>
                    <FaRedditAlien aria-label='Reddit' />
                  </SocialIcon>
                </a>
              )}
              {socialsData.stackOverflow && (
                <a
                  href={socialsData.stackOverflow}
                  target='_blank'
                  rel='noreferrer'
                  className='socialIcon'
                >
                  <SocialIcon theme={theme}>
                    <FaStackOverflow aria-label='Stack Overflow' />
                  </SocialIcon>
                </a>
              )}
              {socialsData.codepen && (
                <a
                  href={socialsData.codepen}
                  target='_blank'
                  rel='noreferrer'
                  className='socialIcon'
                >
                  <SocialIcon theme={theme}>
                    <FaCodepen aria-label='CodePen' />
                  </SocialIcon>
                </a>
              )}
              {socialsData.gitlab && (
                <a
                  href={socialsData.gitlab}
                  target='_blank'
                  rel='noreferrer'
                  className='socialIcon'
                >
                  <SocialIcon theme={theme}>
                    <FaGitlab aria-label='GitLab' />
                  </SocialIcon>
                </a>
              )}
            </div>
          </div>
        </ContactsBody>
      </ContactsContainer>
      <img
        src={theme.contactsimg as string}
        alt='contacts'
        className='contacts--img'
      />
    </Contacts>
  );
}

export default Contacts;
