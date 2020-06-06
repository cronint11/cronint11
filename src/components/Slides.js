import React, { useState } from 'react';

import { Carousel, CarouselItem, CarouselIndicators, CarouselControl } from 'reactstrap';

const carouselItems = [
  {
    src: './img/White Buffalo_7x5.jpg',
    altText: 'White Buffalo',
    caption: 'White Buffalo',
    key: 'whitebuffalo'
  },
  {
    src: './img/Normandy_7x5.jpg',
    altText: 'Normandy',
    caption: 'Normandy',
    key: 'normandy'
  },
  {
    src: './img/Yellowstone_7x5.jpg',
    altText: 'Yellowstone',
    caption: 'Yellowstone',
    key: 'yellowstone'
  }
];

const Slides = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    let nextIndex = activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    let nextIndex = activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = carouselItems.map((slide) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={slide.key}>
        <img src={slide.src} alt={slide.altText} />
        {/* <CarouselCaption captionText={slide.caption} captionHeader={slide.caption} /> */}
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators items={carouselItems} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default Slides;