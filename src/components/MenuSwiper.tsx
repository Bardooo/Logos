import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../components/Card'

import 'swiper/css';

type MenuSwiperProps = {
  items: any,
}

const MenuSwiper: React.FC<MenuSwiperProps> = ({items}) => {  
  return (
    <Swiper
      spaceBetween={-140}
      slidesPerView={4}
    >
      {items.map((item: any, index: Number) => (
        <SwiperSlide><Card key={index} {...item} /></SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MenuSwiper
