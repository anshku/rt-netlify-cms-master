import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from "reactstrap";

const items = [
  {
    id: 1,
    src: "uploads/Component 1 – 1.svg",
    altText: "Logo #1",
    caption: "Logo #1"
  },
  {
    id: 2,
    src: "uploads/Component 1 – 1.svg",
    altText: "Logo #2",
    caption: "Logo #2"
  },
  {
    id: 3,
    src: "uploads/Component 1 – 1.svg",
    altText: "Logo #3",
    caption: "Logo #3"
  },
  {
    id: 4,
    src: "uploads/Component 1 – 1.svg",
    altText: "Logo #4",
    caption: "Logo #4"
  },
  {
    id: 5,
    src: "uploads/Component 1 – 1.svg",
    altText: "Logo #5",
    caption: "Logo #5"
  }
];

const CarouselComponent = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} className="image" />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 200px;
              text-align: center;
              background: #ccc;
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
