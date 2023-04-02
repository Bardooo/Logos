import arrow from '../assets/img/arrow.svg'
import { Link } from 'react-router-dom';

const footerLinks = ['Пользовательское соглашение', 'Карта сайта', 'Политика конфиденциальности']
const footerNav = [
  {
    id: 0,
    text: 'О ресторане',
    link: '/about',
  },
  {
    id: 1,
    text: 'Условия доставки',
    link: '/delivery-rules',
  },
  {
    id: 2,
    text: 'Возврат товара',
    link: '/promotions',
  },
  {
    id: 3,
    text: 'Акции',
    link: '/goods-return',
  },
]

const Footer = () => {
  return (
    <footer className='footer'>
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
            {footerLinks.map((item, index) => (
              <li key={index} className="footer__inner-info-links-item">{item}</li>
            ))}
          </ul>
        </div>
        <ul className="footer__inner-nav">
          {footerNav.map((item, index) => (
            <Link to={item.link}>
              <li key={index} className="footer__inner-nav-item">{item.text}</li>
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
