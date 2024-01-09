import React from 'react'

const Navigation = () => {
  const onClickLi = (e) => {
    const elements = document.querySelectorAll('.navigation__text')
    elements.forEach(el => {
      el.classList.remove('active')
    })
    e.target.classList.add('active')
  }
  let arr = [
    "Холодные закуски",
    "Горячие закуски",
    "Мясные блюда",
    "Супы",
    "Рыбные блюда",
    "Гриль меню",
    "Фирменные блюда",
    "Напитки",
  ]
  let i = 0
  return (
    <section className='navigation'>
      <div className="navigation__inner">
        <ul className="navigation__list">
          {arr.map((item, index)=> (
            <li key={index} id={String(i++)} className="navigation__text" onClick={(e) => {onClickLi(e)}}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Navigation