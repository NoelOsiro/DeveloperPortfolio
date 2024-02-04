'use client'
import React, { useContext, useRef } from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useThemeContext } from '../../contexts/ThemeContext';
import { CustomTheme, styled } from '@mui/material/styles';
import { testimonialsData } from '../../../data/testimonialsData';

interface TestimonialProps {
  id: number;
  name: string;
  title: string;
  text: string;
  image: string;
}

const TestimonialsContainer = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.primary,
}));

const TestimonialsHeader = styled('div')<{ theme: CustomTheme }>((props) => ({
  color: props.theme.secondary,
}));

const TestimonialsBody = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.primary,
}));

const TestimonialsSlider = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.primary,
}));

const SingleTestimony = styled('div')<{ theme: CustomTheme }>((props) => ({}));

const TestimonialsContainerInner = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.secondary,
}));

const ReviewImage = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.secondary,
}));

const ReviewContent = styled('div')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.secondary,
  color: props.theme.tertiary,
}));

const PrevButton = styled('button')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.secondary,
}));

const NextButton = styled('button')<{ theme: CustomTheme }>((props) => ({
  backgroundColor: props.theme.secondary,
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
        <TestimonialsContainer theme={theme} className='testimonials'>
          <TestimonialsHeader theme={theme} className='testimonials--header'>
            <h1>Testimonials</h1>
          </TestimonialsHeader>
          <TestimonialsBody theme={theme} className='testimonials--body'>
            <FaQuoteLeft className='quote' style={{ color: theme.secondary }} />
            <TestimonialsSlider theme={theme} className='testimonials--slider'>
              <Slider {...settings} ref={sliderRef}>
                {testimonialsData.map((test: TestimonialProps) => (
                  <SingleTestimony key={String(test.id)} className='single--testimony' theme={theme}>
                    <TestimonialsContainerInner theme={theme} className='testimonials--container'>
                      <ReviewImage theme={theme} className='review--img'>
                        <img src={test.image} alt={test.name} />
                      </ReviewImage>
                      <ReviewContent theme={theme} className='review--content'>
                        <p>{test.text}</p>
                        <h1>{test.name}</h1>
                        <h4>{test.title}</h4>
                      </ReviewContent>
                    </TestimonialsContainerInner>
                  </SingleTestimony>
                ))}
              </Slider>
              <PrevButton theme={theme} className='prevBtn' onClick={gotoPrev}>
                <FaArrowLeft style={{ color: theme.primary }} aria-label='Previous testimonial' />
              </PrevButton>
              <NextButton theme={theme} className='nextBtn' onClick={gotoNext}>
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
