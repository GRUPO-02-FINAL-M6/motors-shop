import { useState, useEffect } from "react";
import { CarouselStyled } from "./style";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

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
      {imagesList.length > 1 ? (
        <>
          <span id="prev" onClick={previous}><AiOutlineArrowLeft/></span>
          <img src={imagesList[current]} alt="" />
          <span id="next" onClick={next}><AiOutlineArrowRight/></span>
        </>
      ) : (
        <img src={imagesList[current]} alt="" />
      )}
    </CarouselStyled>
  );
};
