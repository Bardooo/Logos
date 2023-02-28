import React from 'react'

const Navigation = () => {
  return (
    <div className='navigation'>
      <div className="navigation__inner">
        <li className="navigation__inner-text active">Холодные закуски</li>
        <li className="navigation__inner-text">Горячие закуски</li>
        <li className="navigation__inner-text">Мясные блюда</li>
        <li className="navigation__inner-text">Супы</li>
        <li className="navigation__inner-text">Рыбные блюда</li>
        <li className="navigation__inner-text">Гриль меню</li>
        <li className="navigation__inner-text">Фирменные блюда</li>
        <li className="navigation__inner-text">Напитки</li>
      </div>
    </div>
  )
}

export default Navigation