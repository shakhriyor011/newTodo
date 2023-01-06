import React, { useState } from 'react'
import SvgIcons from '../../assets/icons/SvgIcons'
import ToDoSearch from '../ToDoSearch/ToDoSearch'

import './ToDoHeader.scss'

const ToDoHeader = ({ search, setSearch }) => {
    const [openSearch, setOpenSearch] = useState(false)

    const handleOpenSearch = () => {
        setOpenSearch(true)
    }

    const handleCloseSearch = () => {
        setOpenSearch(false)
        setSearch('')
    }

    const handleBack = () => {
        setOpenSearch(false)
    }


    return (
        openSearch ? <ToDoSearch
            search={search}
            setSearch={setSearch}
            closeSearch={handleCloseSearch}
            back={handleBack}
        />
            :
            <div className='todoHeader'>
                <h2 className="todoHeader__title">Заметки</h2>
                <div onClick={handleOpenSearch} className="todoHeader__icon">
                    <SvgIcons id='search' />
                </div>
            </div>
    )
}

export default ToDoHeader