import React from 'react'

import {ReactComponent as Onion} from '../assets/img/onion.svg'
import {ReactComponent as Flash} from '../assets/img/flash.svg'
import {ReactComponent as Chef} from '../assets/img/chef.svg'

const Info = () => {
  return (
    <section className='info'>
      <div className="info__inner">
        <div className="info__main">
          <h1 className="info__title">НАШЕ КАФЕ</h1>
          <p className="info__text">Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.</p>
          <p className="info__button">ПОСМОТРЕТЬ МЕНЮ</p>
        </div>
        <div className="info__links">
          <div className="info__links-button">
            <Onion className="info__button-img" />
            <p className="info__button-text">Свежайшие продукты</p>
          </div>
          <div className="info__links-button">
            <Flash className="info__button-img" />
            <p className="info__button-text">Быстрая доставка</p>
          </div>
          <div className="info__links-button">
            <Chef className="info__button-img" />
            <p className="info__button-text">Лучшие повара</p>
          </div>
          <div className="info__links-button">
            <Onion className="info__button-img" />
            <p className="info__button-text">Свежайшие продукты</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
