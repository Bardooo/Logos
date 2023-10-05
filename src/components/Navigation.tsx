import React from 'react'

const Navigation = () => {
  //есть класс active
  const arr = [
    "Холодные закуски",
    "Горячие закуски",
    "Мясные блюда",
    "Супы",
    "Рыбные блюда",
    "Гриль меню",
    "Фирменные блюда",
    "Напитки",
  ]
  return (
    <section className='navigation'>
      <div className="navigation__inner">
        <ul className="navigation__list">
          {arr.map((item, index)=> (
            <li key={index} className="navigation__text">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Navigation