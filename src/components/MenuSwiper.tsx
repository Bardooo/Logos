import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../components/Card'

import {itemsType} from './Menu'

import 'swiper/css';

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: -15
  },
  450: {
    slidesPerView: 1,
    spaceBetween: -100
  },
  552: {
    slidesPerView: 1,
    spaceBetween: -200
  },
  700: {
    slidesPerView: 2,
    spaceBetween: -20
  },
  784: {
    slidesPerView: 2,
    spaceBetween: -100
  },
  1090: {
    slidesPerView: 3,
    spaceBetween: -100
  },
  1470: {
    slidesPerView: 4,
    spaceBetween: -140
  }
}

type MenuSwiperProps = {
  items: itemsType[],
}

const MenuSwiper: React.FC<MenuSwiperProps> = ({items}) => {  
  return (
    <Swiper
      spaceBetween={10} 
      slidesPerView={1}
      breakpoints={breakpoints}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <Card {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MenuSwiper
