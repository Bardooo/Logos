import React from 'react'

import promoImg1 from '../assets/img/promoImg1.jpg'
import promoImg12x from '../assets/img/promoImg1.jpg'
import promoImg13x from '../assets/img/promoImg1.jpg'
import promoImg2 from '../assets/img/promoImg2.jpg'
import promoImg22x from '../assets/img/promoImg2.jpg'
import promoImg23x from '../assets/img/promoImg2.jpg'
import promoImg3 from '../assets/img/promoImg3.jpg'
import promoImg32x from '../assets/img/promoImg3.jpg'
import promoImg33x from '../assets/img/promoImg3.jpg'

const promoItems = [
  {
    id: 0,
    img: promoImg1,
    img2x: promoImg12x,
    img3x: promoImg13x,
    title: 'Без мяса? Здесь!',
    text: 'Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!',
    date: 'до 31 июля'
  },
  {
    id: 1,
    img: promoImg2,
    img2x: promoImg22x,
    img3x: promoImg23x,
    title: 'Выгодное комбо c напитками',
    text: 'Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!',
    date: 'до 31 июля'
  },
  {
    id: 2,
    img: promoImg3,
    img2x: promoImg32x,
    img3x: promoImg33x,
    title: 'Сырный бортик',
    text: 'Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!',
    date: 'до 31 июля'
  },
  {
    id: 3,
    img: promoImg2,
    img2x: promoImg22x,
    img3x: promoImg23x,
    title: 'Выгодное комбо c напитками',
    text: 'Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!',
    date: 'до 31 июля'
  },
  {
    id: 4,
    img: promoImg3,
    img2x: promoImg32x,
    img3x: promoImg33x,
    title: 'Сырный бортик',
    text: 'Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!',
    date: 'до 31 июля'
  },
  {
    id: 5,
    img: promoImg1,
    img2x: promoImg12x,
    img3x: promoImg13x,
    title: 'Без мяса? Здесь!',
    text: 'Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!',
    date: 'до 31 июля'
  },
  {
    id: 6,
    img: promoImg3,
    img2x: promoImg32x,
    img3x: promoImg33x,
    title: 'Сырный бортик',
    text: 'Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!',
    date: 'до 31 июля'
  },
  {
    id: 7,
    img: promoImg1,
    img2x: promoImg12x,
    img3x: promoImg13x,
    title: 'Без мяса? Здесь!',
    text: 'Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!',
    date: 'до 31 июля'
  },
  {
    id: 8,
    img: promoImg2,
    img2x: promoImg22x,
    img3x: promoImg23x,
    title: 'Сырный бортик',
    text: 'Самое время попробовать «Сырную» пиццу, «Маргариту», пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный суп с гренками, Грибной Стартер, Рулетики с сыром, Картофель из печи, Картофельные оладьи или Греческий салат. Выберите свой вкус!',
    date: 'до 31 июля'
  },
  
]

const Promotions = () => {
  return (
    <section className="promotions">
      <div className="promotions__inner">
        <h4 className="promotions__title title">АКЦИИ</h4>
        <div className="promotions__main">
        {promoItems.map((item, index) => (
          <div className="promotions__item">
            <img className="promotions__img" src={item.img} srcSet={`${item.img2x} 2x, ${item.img3x} 3x`} alt={item.title} />
            <div className="promotions__interior">
              <h6 className="promotions__interior-title">{item.title}</h6>
              <p className="promotions__interior-text">{item.text}</p>
              <p className="promotions__interior-date">{item.date}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Promotions
