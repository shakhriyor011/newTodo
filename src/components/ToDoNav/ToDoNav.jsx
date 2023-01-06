import React from 'react'
import Button from '../Button/Button'
import SvgIcons from '../../assets/icons/SvgIcons'

import './ToDoNav.scss'

const ToDoNav = ({ gridToList, setGridToList }) => {

  const toggleGridToList = () => {
    setGridToList(!gridToList)
  }

  return (
    <div className='nav'>
      <h2 className="nav__title">Все заметки</h2>

      {
        gridToList ?
          <Button click={toggleGridToList}>
            <SvgIcons id='grid' />
            <p className='nav__btn-text'>Сетка</p>
          </Button>
          :
          <Button click={toggleGridToList}>
            <SvgIcons id='list' />
            <p className='nav__btn-text'>Список</p>
          </Button>
      }


    </div>
  )
}

export default ToDoNav