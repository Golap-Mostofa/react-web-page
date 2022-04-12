import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../imges/experts/experts-4.jpg'
import Banner2 from '../../../imges/experts/experts-5.jpg'
import Banner3 from '../../../imges/experts/experts-6.jpg'
import Banner4 from '../../../imges/experts/experts-7.jpg'
const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-primary'>First slide label</h3>
          <p className='text-primary'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-primary'>Second slide label</h3>
          <p className='text-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-primary'>Third slide label</h3>
          <p className='text-primary'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;