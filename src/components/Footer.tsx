import React from 'react'
import arrow from '../assets/img/arrow.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__inner">
        <div className="footer__inner-up">
          <div className="footer__inner-up-button">
            <img src={arrow} alt="arrow" className="footer__inner-up-button-img" />
          </div>
        </div>
        <div className="footer__inner-info">
          <h4 className="footer__inner-info-title">LOGOS</h4>
          <p className="footer__inner-info-text">© ООО СК «АПШЕРОН» <br/> Все права защищены. 2010-2020</p>
          <ul className="footer__inner-info-links">
            <li className="footer__inner-info-links-item">Пользовательское соглашение</li>
            <li className="footer__inner-info-links-item">Карта сайта</li>
            <li className="footer__inner-info-links-item">Политика конфиденциальности</li>
          </ul>
        </div>
        <ul className="footer__inner-nav">
          <li className="footer__inner-nav-item">О ресторане</li>
          <li className="footer__inner-nav-item">Условия доставки</li>
          <li className="footer__inner-nav-item">Возврат товара</li>
          <li className="footer__inner-nav-item">Акции</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
