import React, { useEffect, useState } from "react";

import { sliderContent } from "./sliderContent";

import { backgroundImages } from "./backgroundImages";

import { SliderEllipses } from "./SliderEllipses";


import {Link} from "react-router-dom";

import "./SliderStyles.scss";

export const SliderTwo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveEllipse = (newIndex) => {
    setActiveIndex(newIndex);
  };

  useEffect(() => {
 
    if (activeIndex < sliderContent.length) {
      const interval = setInterval(() => setActiveIndex(activeIndex + 1), 5000);
      return () => clearInterval(interval);
    }
    return setActiveIndex(activeIndex - sliderContent.length);
  }, [activeIndex]);

  return (
    <div className="slider-component-wrapper">
      <div className="slider-carousel">
        <div
          className="slider-background_inner"
          // Had to use inline styling for background image switch
          style={{ transform: `translateX(-${activeIndex * 25}%)` }}
        >
          {backgroundImages.map((img) => (
            <div className="slider-carousel-item" key={img}>
              <img src={img} key={img} alt="back" className="slider-img" />
            </div>
          ))}
        </div>
      </div>
      {sliderContent.map(
        (content) =>
          activeIndex === content.id && (
            <div className="container" key={content.id}>
              <div className="slider-text_big">
                {content.bigTextFirstPart}
              </div>
              <div className="slider-text_small">{content.smallText}</div>
              {/* TODO: Figure out why <Button/> component dont use classname in prop */}
              
               <Link to="expertise" className="slider-button">Перейти</Link>
              <SliderEllipses
                activeIndex={activeIndex}
                updateActiveEllipse={updateActiveEllipse}
              />
            </div>
          )
      )}
    </div>
  );
};
