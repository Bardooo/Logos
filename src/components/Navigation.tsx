import React from 'react'

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className="navigation__inner">
        <ul className="navigation__inner-list">
          <li className="navigation__inner-list-text active">Холодные закуски</li>
          <li className="navigation__inner-list-text">Горячие закуски</li>
          <li className="navigation__inner-list-text">Мясные блюда</li>
          <li className="navigation__inner-list-text">Супы</li>
          <li className="navigation__inner-list-text">Рыбные блюда</li>
          <li className="navigation__inner-list-text">Гриль меню</li>
          <li className="navigation__inner-list-text">Фирменные блюда</li>
          <li className="navigation__inner-list-text">Напитки</li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation