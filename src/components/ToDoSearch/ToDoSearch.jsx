import React from 'react'
import SvgIcons from '../../assets/icons/SvgIcons'

import './ToDoSearch.scss'

const ToDoSearch = ({ search, setSearch, closeSearch, back }) => {

    const changeSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className='search'>
            <div onClick={back} className="search__back">
                <SvgIcons id="back" />
            </div>
            <input onChange={changeSearch} value={search} className='search__input' type="text" placeholder="Поиск..." />
            <div onClick={closeSearch} className="search__close">
                <SvgIcons id="close" />
            </div>
        </div>
    )
}

export default ToDoSearch