import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../imges/parson/bana1.png'
import Banner2 from '../../../imges/parson/parson2.jpg'
import Banner3 from '../../../imges/parson/parson3.jpg'

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel className='w-100 content' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className=" banner"
          src={Banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='text-primary'>First slide label</h1>
          <p className='text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" banner"
          src={Banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className='text-primary'>Second slide label</h1>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" banner"
          src={Banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className='text-primary'>Third slide label</h1>
          <p className='text-white'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;