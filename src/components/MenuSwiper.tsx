import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../components/Card'

import {itemsType} from './Menu'

import 'swiper/css';

type breakpointsType = {
  320: {
    slidesPerView: number;
    spaceBetween: number;
  };
  450: {
    slidesPerView: number;
    spaceBetween: number;
  };
  552: {
    slidesPerView: number;
    spaceBetween: number;
  };
  700: {
    slidesPerView: number;
    spaceBetween: number;
  };
  784: {
    slidesPerView: number;
    spaceBetween: number;
  };
  1090: {
    slidesPerView: number;
    spaceBetween: number;
  };
  1470: {
    slidesPerView: number;
    spaceBetween: number;
  };
};

type MenuSwiperProps = {
  items: itemsType[],
  breakpoints: breakpointsType
}

const MenuSwiper: React.FC<MenuSwiperProps> = ({items, breakpoints}) => {  
  return (
    <Swiper
    loop={true}
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={breakpoints}
    >
      {items.map((item: any, index: Number) => (
        <SwiperSlide><Card key={index} {...item} /></SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MenuSwiper
