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
    link: '/goods-return',
  },
  {
    id: 3,
    text: 'Акции',
    link: '/promotions',
  },
]

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__inner">
        <div className="footer__up">
          <div className="footer__button">
            <img src={arrow} alt="arrow" className="footer__img" />
          </div>
        </div>
        <div className="footer__info">
          <h4 className="footer__title">LOGOS</h4>
          <p className="footer__text">© ООО СК «АПШЕРОН» <br/> Все права защищены. 2010-2020</p>
          <ul className="footer__links">
            {footerLinks.map((item, index) => (
              <li key={index} className="footer__links-item">{item}</li>
            ))}
          </ul>
        </div>
        <ul className="footer__nav">
          {footerNav.map((item, index) => (
            <li key={index}><Link className='footer__nav-item' to={item.link}>{item.text}</Link></li>
          ))}
        </ul>
      </div>
    </footer>   
  )
}

export default Footer
