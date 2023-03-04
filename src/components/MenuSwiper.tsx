import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../components/Card'

import 'swiper/css';

const MenuSwiper = ({items}) => {
  return (
    <Swiper
      spaceBetween={-140}
      slidesPerView={4}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((item: any, index: Number) => (
        <SwiperSlide><Card key={index} {...item} /></SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MenuSwiper
