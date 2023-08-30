import { useState, useEffect } from "react";
import { CarouselStyled } from "./style";

import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';


interface iImageList {
  images: [];
}

export const Carousel = ({ images }: iImageList) => {
  const [imagesList, setImagesList] = useState<[]>(images);
  const minimum: number = 0;
  const [current, setCurrent] = useState<number>(0);
  const maximum: number = images.length - 1;

  const previous = () => {
    if (current <= minimum) {
      setCurrent(maximum);
      return;
    }
    setCurrent(current - 1);
  };

  const next = () => {
    if (current == maximum) {
      setCurrent(0);
      return;
    }
    setCurrent(current + 1);
  };

  return (
    <CarouselStyled>
     {
        images.length > 1 && <span className="prev" onClick={previous}>
          <BsArrowLeftCircle size={30} />
        </span>
     }
      <img src={imagesList[current]} alt="" />
     {
        images.length > 1 && <span className="next" onClick={next}>
          <BsArrowRightCircle size={30} />
        </span>
     }
    </CarouselStyled>
  );
};
