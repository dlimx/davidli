import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';

const CarouselContainer = styled.div``;

interface Props {
  children: React.ReactNode[];
}

const Carousel = (props: Props) => {
  <CarouselContainer>
    <Slider>{props.children}</Slider>
  </CarouselContainer>;
};

export default Carousel;
