'use client'
import React, { useRef } from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useThemeContext } from '../../contexts/ThemeContext';
import { CustomTheme, styled } from '@mui/material/styles';
import { testimonialsData } from '../../data/testimonialsData';

const TestimonialsContainer = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.primary,
  height: '100vh', // Enclose in quotes
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
}));

const TestimonialsHeader = styled('div')<{ theme: CustomTheme }>((props) => ({
  color: props.theme.secondary,
}));

const TestimonialsBody = styled('div')<{ theme: CustomTheme }>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  width: '95%',
  marginTop: '1rem',
  position: 'relative',
  '& .quote': {
    color: props.theme.secondary,
    fontSize: '4rem',
    position: 'absolute',
    zIndex: '10',
    transform: 'translateY(50%)',
    opacity: '0.5',
  },
}));

const TestimonialsSlider = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.primary,
  display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '70%',
}));

const SingleTestimony = styled('div')(() => ({
  padding: '2rem',
    width: '100%',
    height: '500px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}));

const TestimonialsContainerInner = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.secondary,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ReviewImage = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.secondary,
  margin: '0 auto',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    zIndex: '3',
    transform: 'translateY(50%)',
    boxShadow: '0 0 5px rgba(0,0,0,0.2)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      width: '90px',
    },
}));

const ReviewContent = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.secondary,
  color: props.theme.tertiary,
  margin: '0 auto',
    width: '90%',
    height: '250px',
    borderRadius: '200px',
    boxSizing: 'border-box',
    padding: '30px 40px',
    paddingTop: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    '& p':{
        fontStyle: 'italic',
        fontWeight: '300',
        width: '80%',
    },

    '& h1': {
        fontSize: '1.5rem',
        fontWeight: '600',
        marginTop: '10px',
    },

    '& h4': {
        fontSize: '1rem',
        fontWeight: '500',
    }
  
}));

const PrevButton = styled('button')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.secondary,
  position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '60px',
    height: '60px',
    borderRadius: '50%',

    appearance: 'none',
    outline: 'none',
    border: 'none',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: '1.6rem',
    left: '5%',
    cursor: 'pointer'
}));

const NextButton = styled('button')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.secondary,
  position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '60px',
    height: '60px',
    borderRadius: '50%',

    appearance: 'none',
    outline: 'none',
    border: 'none',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: '1.6rem',
    right: '5%',
    cursor: 'pointer'
}));

function Testimonials() {
  const { theme } = useThemeContext();
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 800,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    margin: 3,
    loop: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipeToSlide: true,
    swipe: true,
  };

  const gotoNext = () => {
    sliderRef.current?.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <>
      {testimonialsData.length > 0 && (
        <TestimonialsContainer theme={theme}>
          <TestimonialsHeader theme={theme}>
            <h1>Testimonials</h1>
          </TestimonialsHeader>
          <TestimonialsBody theme={theme}>
            <FaQuoteLeft className='quote' style={{ color: theme.secondary }} />
            <TestimonialsSlider theme={theme}>
              <Slider {...settings} ref={sliderRef}>
                {testimonialsData.map((test) => (
                  <SingleTestimony key={String(test.id)} theme={theme}>
                    <TestimonialsContainerInner theme={theme}>
                      <ReviewImage theme={theme}>
                        <img src={test.image} alt={test.name} />
                      </ReviewImage>
                      <ReviewContent theme={theme}>
                        <p>{test.text}</p>
                        <h1>{test.name}</h1>
                        <h4>{test.title}</h4>
                      </ReviewContent>
                    </TestimonialsContainerInner>
                  </SingleTestimony>
                ))}
              </Slider>
              <PrevButton theme={theme}onClick={gotoPrev}>
                <FaArrowLeft style={{ color: theme.primary }} aria-label='Previous testimonial' />
              </PrevButton>
              <NextButton theme={theme} onClick={gotoNext}>
                <FaArrowRight style={{ color: theme.primary }} aria-label='Next testimonial' />
              </NextButton>
            </TestimonialsSlider>
          </TestimonialsBody>
        </TestimonialsContainer>
      )}
    </>
  );
}

export default Testimonials;
