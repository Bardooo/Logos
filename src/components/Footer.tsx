import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__inner">
        <div className="footer__inner-up">
          <div className="footer__inner-up-button"></div>
        </div>
        <div className="footer__inner-info">
          <h4 className="footer__inner-info-title">LOGOS</h4>
          <p className="footer__inner-info-text">© ООО СК «АПШЕРОН»</p>
          <p className="footer__inner-info-span">Все права защищены. 2010-2020</p>
          <ul className="footer__inner-info-links">
            <li className="footer__inner-links-item">Пользовательское соглашение</li>
            <li className="footer__inner-links-item">Карта сайта</li>
            <li className="footer__inner-links-item">Политика конфиденциальности</li>
          </ul>
        </div>
        <div className="footer__inner-nav">
          <ul className="footer__inner-nav-list">
            <li className="footer__inner-nav-list-item">О ресторане</li>
            <li className="footer__inner-nav-list-item">Условия доставки</li>
            <li className="footer__inner-nav-list-item">Возврат товара</li>
            <li className="footer__inner-nav-list-item">Акции</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
