import React from 'react'

import Menu, { itemsType, navigationTitlesType } from '../components/Menu'
import Info from '../components/Info'

type HomeProps = {
  items: itemsType[],
  navigationTitles: navigationTitlesType[]
}

const Home: React.FC<HomeProps> = ({ items, navigationTitles }) => {
  return (
    <>
      <Menu items={items} navigationTitles={navigationTitles} />
      <Info />
    </>
  )
}

export default Home
